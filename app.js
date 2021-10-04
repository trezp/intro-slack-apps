// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const { getRandomCatUrl, getRandomDogUrl } = require('./api-helpers.js');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN 
});

app.message('cat please', async ({ message, say }) => {
  const url = await getRandomCatUrl();

  try {
    const result = await say({
      text: "A randomly chosen picture of a cat",
      blocks: [
        {
          "type": "image",
          "image_url": url,
          "alt_text": "A random picture of a cat"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Give me another!",
                "emoji": false
              },
              "value": "dog_or_cat",
              "action_id": "randomAnimalButton"
            }
          ]
        }
      ]
    });
    
    app.action('randomAnimalButton', async ({ ack, body, client, say }) => {
      // Acknowledge action request before anything else
      await ack();

      let newAnimal = await getRandomCatUrl(); 
      
      //Respond to action with a message
      await client.chat.postMessage({
        channel: body.channel.id,
        user: body.user.id,
        text: `A new random picture of a animal`,
        blocks: [
          {
            "type": "image",
            "image_url": newAnimal,
            "alt_text": "A random picture of an animal"
          },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Give me another!",
                "emoji": true
              },
              "value": "dog_or_cat",
              "action_id": "randomAnimalButton"
            }
          ]
        }
        ]
      });
    });
  }
  catch (error) {
    console.error(error);
  }
});

// Example 1
// app.message('', async({ message, say }) => {
//   await say({
//     text: "",
//   });
// });

// Example 2
// app.message('', async({ message, say }) => {
//   await say({
//     "blocks": []
//   });
// }; 

// Example 3
// app.message('', async({ message, say }) => {
//   await say({
//     "blocks": [
//       {
//         "type": "actions",
//         "elements": [
//           {
//             "type": "button",
//             "text": {
//               "type": "plain_text",
//               "text": "",
//               "emoji": true
//             },
//             "value": "click_me_123",
//             "action_id": ""
//           }
//         ]
//       }
//     ]
//   });
  
//   app.action('', async ({ ack, body, client, say }) => {
//     await ack();
//     await say(`Yay <@${body.user.id}>, you've pressed the button!`);
//   });
// });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app intro is running!');
})();

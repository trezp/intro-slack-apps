// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const { getRandomCatUrl, getRandomDogUrl } = require('./api-helpers.js');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN 
});

app.message('greetings', async({message, say}) => {
  await say({
    text: "greetings, earthling",
  });
});

app.message('button please', async({message, say}) => {
  await say({
    "blocks": [
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Press me!",
              "emoji": true
            },
            "value": "click_me_123",
            "action_id": "test-btn"
          }
        ]
      }
    ]
  });
  
  app.action('test-btn', async ({ ack, body, client, say }) => {
    await ack();
    await say(`Yay <@${body.user.id}>, you've pressed the button!`);
  });
});


app.message('cat please', async ({ message, say }) => {
  const url = await getRandomCatUrl();

  try {
    const result = await say({
      //`text` argument is missing in the request payload for a chat.postMessage call - It's a best practice to always provide a `text` argument when posting a message. The `text` is used in places where the content cannot be rendered such as: system push notifications, assistive technology such as screen readers, etc.
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
                "emoji": true
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

      let channelID = body.channel.id
      let userID = body.user.id
      let newAnimal = await getRandomCatUrl(); 
      
      //Respond to action with a message
      await client.chat.postMessage({
        channel: channelID,
        user: userID,
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

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app intro is running!');
})();

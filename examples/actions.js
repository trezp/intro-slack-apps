// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Message listener function called for messages containing "hello"
app.message('hello', async ({ message, say }) => {
  await say({
    "text": `👋 Hey there <@${message.user}>`,
	  "blocks": [
		  {
			  "type": "section",
			  "text": {
				  "type": "mrkdwn",
          "text": `👋 Hey there <@${message.user}>`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me",
            "emoji": true
          },
          "action_id": "click_me_button"
        }
      }
    ]
  });
});

// Action listener function called when an interactive component with action_id of “click_me_button” is triggered
app.action('click_me_button', async ({ ack, body, client, say }) => {
  // Acknowledge action request before anything else
  await ack();
  
  let channelID = body.channel.id
  let userID = body.user.id
  
  // Respond to action with an ephemeral message
  await client.chat.postEphemeral({
    channel: channelID,
    user: userID,
    text: `<@${userID}> clicked the button! 🎉`
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

# Adding an interaction to a Slack app  

Below are some suggestions for your quick Slack app. To get started: 
- "remix" this workspace (from the menu on the top right) 
- copy and replace the code into app.js
- modify the code 
- refresh and test in Slack!
  
### 1. Modify the Random Cat message in app.js respond to "dogs please" and display random dogs

### 2. Make an icebreaker: When someone types your name, use [Block Kit Builder](https://app.slack.com/block-kit-builder/) to create an introductory message with an image or giphy of you or something you like

```
app.message('', async({message, say}) => {
  await say({
    "blocks": []
  });
}; 

```
### 3. Respond with the message "Greetings, earthling" when someone types "greetings" (remember that messages are case sensitive)
```
app.message('', async({message, say}) => {
  await say({
    text: "",
  });
});
```

### 4. When someone requests a joke, display the joke with a button to reveal the punchline 
```
app.message('', async({message, say}) => {
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
    await say(`The punchline goes here, <@${body.user.id}>`);
  });
});
```

### 5. Experiment with the examples in the examples folder. 
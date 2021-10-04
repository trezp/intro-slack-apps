# Getting started with Slack Apps 
Slack apps allow you to extend and customize your Slack workspaces with fun and useful interactions.

## Prerequisites/Preparing for the Workshop  
- [Please join the workshop Slack workspace](https://join.slack.com/t/slack-apps-yay/shared_invite/zt-wh8wk9d1-hYS9m_QOkilnjdHzEa8sIQht)
- Optional: [Sign up for a Glitch account](https://glitch.com/). We’ll be using Glitch as a collaborative coding environment to learn how to program Slack apps. You’ll still be able to follow along with the workshop without one, but having a glitch account will ensure that your work is saved. 
- Request to join [the Glitch project](https://glitch.com/edit/#!/intro-slack-apps) for the example Slack app. There
should be a button in the top left corner reading `Request to Join Project`.
- Remix (make a copy of) this Glitch project. 
  - Click the "intro-slack-apps" menu in the top left corner, then `Remix Project`. You'll use a copy of the glitch project
  play around with Slack app functionality. _Note: Your remix won't work quite yet. During the workshop I'll share some
  Oauth keys that will grant you permission to interact with the Slack app._
  
## Agenda
- Introduction to Slack apps 
- Quick overview of how to set up a fast Slack dev environment 
- Walkthrough of "Cat, Please" with example activities 

## In this workshop, you'll learn how to:  
- Get a Slack dev environment up and running quickly with Glitch
- Use Bolt for JavaScript to listen for and respond to Slack messages 
- Use Bolt for JavaScript to listen for and respond to button clicks 
- Use Slack's Block Kit Builder to create snazzy UI elements 

## Overview of Quick Set up Steps 
- Create a dev Slack workspace
- Create an app 
- Give your app permission scopes 
- Install it to a dev environment 

## Next Steps: Going Further with this example project 
- [Create your own pre-configured Slack app](https://api.slack.com/tutorials/tracks/scheduling-messages) available from the "Post Message on a Schedule" tutorial. This pre-configured
app should come with most of the scope permissions you need to try the activities in `activities.md`.
- Remix this example by choosing "Remix example" from the top left menu. [Find Your App's api keys](https://slack.dev/bolt-js/tutorial/getting-started#tokens-and-installing-apps)
and plug them into your remix project's `.env` file
- Modify the code, try the activities in `activities.md`, or do your own thing! 

## Resources 
- [Create a New Workspace for Slack App Development and Testing](https://slack.com/get-started#/create)
- Learn how to quickly set up your own Slack dev environment with [Tutorial: Hello World Slack App Using Bolt](https://api.slack.com/tutorials/tracks/hello-world-bolt)
- [Getting Started with Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started)
- [Slack Block Kit Builder](https://app.slack.com/block-kit-builder/)
- [Slack app permissions scopes](https://api.slack.com/scopes)


Bolt app template
=================

[Bolt](https://slack.dev/bolt) is a development framework that lets you build JavaScript-based Slack apps in a flash.

This Project
------------

- `app.js` contains the primary Bolt app. It imports the Bolt package (`@slack/bolt`) and starts the Bolt app's server. It's where you'll add your app's listeners.
- `.env` is where you'll put your Slack app's authorization token and signing secret.
- The `examples/` folder contains a couple of other sample apps that you can peruse to your liking. They show off a few platform features that your app may want to use.


Read the [Getting Started guide](https://api.slack.com/start/building/bolt)
-------------------

Read the [Bolt documentation](https://slack.dev/bolt)
-------------------

View the [source code on Github](https://github.com/slackapi/bolt-js)
-------------------

\ ゜o゜)ノ

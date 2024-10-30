const express = require('express');
const bodyParser = require('body-parser');
const FacebookGraphAPI = require('./index');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your actual values
const PAGE_ACCESS_TOKEN = '';
const VERIFY_TOKEN = '1234';

const api = new FacebookGraphAPI(PAGE_ACCESS_TOKEN);

app.use(bodyParser.json());

// Webhook verification
app.get('/webhook', (req, res) => {
  try {
    const challenge = api.verifyWebhook(
      req.query['hub.mode'],
      req.query['hub.verify_token'],
      req.query['hub.challenge'],
      VERIFY_TOKEN
    );
    res.status(200).send(challenge);
  } catch (error) {
    console.error('Webhook verification failed:', error);
    res.status(403).send('Webhook verification failed');
  }
});

// Webhook event handling
app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log('Received webhook event:', JSON.stringify(body, null, 2));

  if (body.object === 'page') {
    body.entry.forEach((entry) => {
      const webhookEvent = entry.messaging[0];
      const senderId = webhookEvent.sender.id;

      if (webhookEvent.message) {
        console.log('Handling message event');
        handleMessage(senderId, webhookEvent.message);
      } else if (webhookEvent.postback) {
        console.log('Handling postback event');
        handlePostback(senderId, webhookEvent.postback);
      }
    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    console.error('Received unknown event:', body.object);
    res.sendStatus(404);
  }
});

// Message handling function
async function handleMessage(senderId, receivedMessage) {
  console.log('Received message:', JSON.stringify(receivedMessage, null, 2));

  if (receivedMessage.text) {
    const messageText = receivedMessage.text.toLowerCase();
    console.log('Received text message:', messageText);

    switch (messageText) {
      case 'hello':
        await sendMessage(senderId, "Hello! I'm your friendly bot. How can I help you today?");
        break;
      case 'image':
        await sendImageMessage(senderId, 'https://i.pinimg.com/736x/79/b0/0f/79b00fa6e63941ab2e491b40c794c3bf.jpg');
        break;
      case 'products':
        await sendProductList(senderId);
        break;
      case 'help':
        await sendHelpMessage(senderId);
        break;
      case 'quickreply':
        console.log('Triggering quick reply');
        await sendQuickReplyOptions(senderId);
        break;
      default:
        await sendMessage(senderId, "I'm sorry, I didn't understand that command. Type 'help' to see what I can do!");
    }
  } else if (receivedMessage.quick_reply) {
    console.log('Handling quick reply:', receivedMessage.quick_reply);
    handleQuickReply(senderId, receivedMessage.quick_reply.payload);
  }
}

// Helper functions for sending messages
async function sendMessage(recipientId, text) {
  try {
    console.log('Sending text message:', text);
    const response = await api.sendMessage(recipientId, text);
    console.log('Text message sent successfully:', response);
  } catch (error) {
    console.error('Error sending text message:', error);
  }
}

async function sendImageMessage(recipientId, imageUrl) {
  try {
    console.log('Sending image message:', imageUrl);
    const response = await api.sendImageMessage(recipientId, imageUrl);
    console.log('Image message sent successfully:', response);
  } catch (error) {
    console.error('Error sending image message:', error);
  }
}

async function sendProductList(recipientId) {
  const products = [
    {
      title: 'Awesome T-Shirt',
      image_url: 'https://example.com/t-shirt.jpg',
      subtitle: 'Comfortable and stylish t-shirt',
      default_action: {
        type: 'web_url',
        url: 'https://example.com/product/t-shirt',
        webview_height_ratio: 'tall',
      },
      buttons: [
        {
          type: 'web_url',
          url: 'https://example.com/product/t-shirt',
          title: 'View Product',
        },
      ],
    },
    {
      title: 'Cool Sunglasses',
      image_url: 'https://example.com/sunglasses.jpg',
      subtitle: 'Protect your eyes in style',
      default_action: {
        type: 'web_url',
        url: 'https://example.com/product/sunglasses',
        webview_height_ratio: 'tall',
      },
      buttons: [
        {
          type: 'web_url',
          url: 'https://example.com/product/sunglasses',
          title: 'View Product',
        },
      ],
    },
  ];

  try {
    console.log('Sending product list');
    const response = await api.sendProductMessage(recipientId, products);
    console.log('Product list sent successfully:', response);
  } catch (error) {
    console.error('Error sending product list:', error);
  }
}

async function sendHelpMessage(recipientId) {
  const helpText = `
Here are the commands I understand:
- 'hello': I'll greet you back!
- 'image': I'll send you a sample image
- 'products': I'll show you some cool products
- 'quickreply': I'll send you quick reply options
- 'help': I'll show you this help message
  `.trim();

  await sendMessage(recipientId, helpText);
}

async function sendQuickReplyOptions(recipientId) {
  const quickReplies = [
    {
      content_type: 'text',
      title: 'Red',
      payload: 'SELECTED_RED'
    },
    {
      content_type: 'text',
      title: 'Green',
      payload: 'SELECTED_GREEN'
    },
    {
      content_type: 'text',
      title: 'Blue',
      payload: 'SELECTED_BLUE'
    }
  ];

  try {
    console.log('Sending quick reply options');
    const response = await api.sendQuickReply(recipientId, 'What is your favorite color?', quickReplies);
    console.log('Quick reply options sent successfully:', response);
  } catch (error) {
    console.error('Error sending quick reply:', error);
  }
}

async function handleQuickReply(senderId, payload) {
  console.log('Handling quick reply payload:', payload);
  switch (payload) {
    case 'SELECTED_RED':
      await sendMessage(senderId, 'You chose Red! 🔴');
      break;
    case 'SELECTED_GREEN':
      await sendMessage(senderId, 'You chose Green! 🟢');
      break;
    case 'SELECTED_BLUE':
      await sendMessage(senderId, 'You chose Blue! 🔵');
      break;
    default:
      await sendMessage(senderId, "I didn't recognize that choice.");
  }
}

async function handlePostback(senderId, postback) {
  console.log('Handling postback:', postback);
  const payload = postback.payload;
  
  switch (payload) {
    case 'GET_STARTED':
      await sendMessage(senderId, "Welcome! I'm your friendly bot. Type 'help' to see what I can do!");
      break;
    default:
      await sendMessage(senderId, "I'm not sure how to handle that postback. Type 'help' for available commands.");
  }
}

// Remove persistent menu and get started button
async function removeExistingMenuAndGetStarted() {
  try {
    console.log('Removing existing menu and get started button');
    await api._makeApiCall(`${api.baseUrl}/me/messenger_profile`, 'DELETE', {
      fields: ['persistent_menu', 'get_started']
    });
    console.log('Existing menu and get started button removed successfully');
  } catch (error) {
    console.error('Error removing existing menu and get started button:', error);
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Bot is listening on port ${port}`);
  
  // Remove existing menu and get started button
  removeExistingMenuAndGetStarted();
});

// Set up the webhook (you would typically do this once, not on every server start)
api.setWebhook('me', 'https://l24kt9x5-3000.asse.devtunnels.ms/webhook', VERIFY_TOKEN)
  .then(() => console.log('Webhook set successfully'))
  .catch((error) => console.error('Error setting webhook:', error));
# Facebook Graph API Messenger Module

This module provides a comprehensive interface to interact with the Facebook Graph API v21.0, focusing on the Messenger Platform. It allows you to build interactive customer bots with various messaging capabilities.

## Installation

```
npm install facebook-graph-api-messenger
```

## Usage

```javascript
const FacebookGraphAPI = require('facebook-graph-api-messenger');

const api = new FacebookGraphAPI('YOUR_ACCESS_TOKEN');

// Send a text message
api.sendMessage('RECIPIENT_ID', 'Hello, world!')
  .then(response => console.log('Message sent:', response))
  .catch(error => console.error('Error:', error));

// Send an image message
api.sendImageMessage('RECIPIENT_ID', 'https://example.com/image.jpg')
  .then(response => console.log('Image sent:', response))
  .catch(error => console.error('Error:', error));

// Send a product message
const products = [
  {
    title: 'Product 1',
    imageUrl: 'https://example.com/product1.jpg',
    subtitle: 'Description of Product 1',
    url: 'https://example.com/product1',
  },
  {
    title: 'Product 2',
    imageUrl: 'https://example.com/product2.jpg',
    subtitle: 'Description of Product 2',
    url: 'https://example.com/product2',
  },
];

api.sendProductMessage('RECIPIENT_ID', products)
  .then(response => console.log('Products sent:', response))
  .catch(error => console.error('Error:', error));

// Send quick replies
const quickReplies = [
  { title: 'Option 1', payload: 'OPTION_1' },
  { title: 'Option 2', payload: 'OPTION_2' },
];

api.sendQuickReply('RECIPIENT_ID', 'Please choose an option:', quickReplies)
  .then(response => console.log('Quick replies sent:', response))
  .catch(error => console.error('Error:', error));

// Set up a webhook
api.setWebhook('PAGE_ID', 'https://your-webhook-url.com', '1234')
  .then(response => console.log('Webhook set:', response))
  .catch(error => console.error('Error:', error));

// Verify a webhook
app.get('/webhook', (req, res) => {
  try {
    const challenge = api.verifyWebhook(
      req.query['hub.mode'],
      req.query['hub.verify_token'],
      req.query['hub.challenge'],
      '1234'
    );
    res.status(200).send(challenge);
  } catch (error) {
    res.status(403).send('Webhook verification failed');
  }
});
```

## API Reference

Please refer to the TypeScript definition file (`index.d.ts`) for a complete list of available methods and their parameters.

## License

This project is licensed under the MIT License.
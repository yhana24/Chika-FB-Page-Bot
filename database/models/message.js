const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  mid: { type: String, required: true, unique: true }, // Message ID
  senderId: { type: String, required: true }, // ID of the sender
  recipientId: { type: String, required: true }, // ID of the recipient
  text: { type: String, required: false }, // Text of the message
  attachments: { type: Array, required: false }, // Attachments (if any)
  timestamp: { type: Date, default: Date.now }, // Timestamp of the message
  replyTo: { type: String, required: false } // ID of the message being replied to
});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;

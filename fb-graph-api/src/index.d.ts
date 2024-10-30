declare class FacebookGraphAPI {
    constructor(accessToken: string, apiVersion?: string);
  
    sendMessage(recipientId: string, message: object): Promise<any>;
    sendMessage(recipientId: string, text: string): Promise<any>;
    sendImageMessage(recipientId: string, imageUrl: string): Promise<any>;
    sendVideoMessage(recipientId: string, videoUrl: string): Promise<any>;
    sendAudioMessage(recipientId: string, audioUrl: string): Promise<any>;
    sendProductMessage(recipientId: string, products: Array<{
      title: string;
      imageUrl: string;
      subtitle: string;
      url: string;
    }>): Promise<any>;
    sendQuickReply(recipientId: string, text: string, quickReplies: Array<{
      title: string;
      payload: string;
    }>): Promise<any>;
    sendButtonTemplate(recipientId: string, text: string, buttons: Array<{
      type: string;
      title: string;
      payload?: string;
      url?: string;
    }>): Promise<any>;
    sendReusableAttachment(recipientId: string, attachmentId: string): Promise<any>;
    getUserProfile(userId: string): Promise<any>;
    getConversationHistory(userId: string, limit?: number): Promise<any>;
    setWebhook(pageId: string, webhookUrl: string, verifyToken: string): Promise<any>;
    verifyWebhook(mode: string, token: string, challenge: string, verifyToken: string): string;
  }
  
  export = FacebookGraphAPI;
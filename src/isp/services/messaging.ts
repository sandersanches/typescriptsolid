import MessagingProtocol from './interfaces/messaging-protocol';

export default class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Message sent: ' + msg);
  }
}

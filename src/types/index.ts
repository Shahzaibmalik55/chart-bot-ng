export enum MessageType {
  UserInput = 'userInput',
  BotResponse = 'botResponse',
}

export interface IMessage {
  messageType: MessageType;
  data: any;
}

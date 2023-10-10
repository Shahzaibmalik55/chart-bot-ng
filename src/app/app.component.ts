import { Component, ViewChild, ElementRef } from '@angular/core';
import { IMessage, MessageType } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputText = '';
  isLoading = false;
  messages: IMessage[] = [
    {
      messageType: MessageType.BotResponse,
      data: {
        message: 'Hello! How can I assist you today?',
      },
    },
  ];

  @ViewChild('messagesRef') private messagesRef: ElementRef | undefined;

  getData = async (input: string) => {
    try {
      const response = await fetch(`./assets/graph.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response.json();
    } catch (err) {
      console.log('err', err);
    }
  };

  onSend(text: string) {
    const message: IMessage = {
      messageType: MessageType.UserInput,
      data: {
        input: text,
      },
    };
    this.inputText = text;
    this.messages = [...this.messages, message];
    this.scrollToBottom();
    if (this.inputText) this.fetchData(this.inputText);
  }

  async fetchData(inputText: string) {
    try {
      this.isLoading = true;
      const data = await this.getData(inputText);
      setTimeout(() => {
        const message: IMessage = {
          messageType: MessageType.BotResponse,
          data: { ...data },
        };
        this.messages = [...this.messages, message];
        this.isLoading = false;
        this.scrollToBottom();
      }, 2000);
    } catch (err) {
      console.log('err', err);
      this.isLoading = false;
    }
  }

  scrollToBottom(): void {
    if (this.messagesRef) {
      try {
        this.messagesRef.nativeElement.scrollTo({
          behavior: 'smooth',
          top: this.messagesRef.nativeElement.scrollHeight,
        });
      } catch (err) {}
    }
  }
}

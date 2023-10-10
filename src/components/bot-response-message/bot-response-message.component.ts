import { Component, Input } from '@angular/core';
import { IMessage } from 'src/types';

@Component({
  selector: 'bot-response-message',
  templateUrl: './bot-response-message.component.html',
  styleUrls: ['./bot-response-message.component.scss'],
})
export class BotResponseMessageComponent {
  @Input() message: IMessage | undefined;
  @Input() chartTitle: string = '';
}

import { Component, Input } from '@angular/core';
import { IMessage } from 'src/types';

@Component({
  selector: 'user-input-message',
  templateUrl: './user-input-message.component.html',
  styleUrls: ['./user-input-message.component.scss'],
})
export class UserInputMessageComponent {
  @Input() message: IMessage | undefined;
  @Input() chartTitle: string = '';
}

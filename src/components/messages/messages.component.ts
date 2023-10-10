import { Component, Input } from '@angular/core';
import { IMessage } from 'src/types';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  @Input() messages: IMessage[] = [];
  @Input() isLoading = false;
  @Input() title: string = '';
}

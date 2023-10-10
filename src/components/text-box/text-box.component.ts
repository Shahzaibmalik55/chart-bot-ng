import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent {
  @Output() onSend: EventEmitter<string> = new EventEmitter();
  @Input() isLoading = false;

  input: string = '';

  onEnter() {
    this.onSend.emit(this.input);
    this.input = '';
  }
}

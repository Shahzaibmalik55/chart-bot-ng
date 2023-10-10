import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotResponseMessageComponent } from './bot-response-message.component';

describe('BotResponseMessageComponent', () => {
  let component: BotResponseMessageComponent;
  let fixture: ComponentFixture<BotResponseMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotResponseMessageComponent]
    });
    fixture = TestBed.createComponent(BotResponseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

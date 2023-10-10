import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputMessageComponent } from './user-input-message.component';

describe('UserInputMessageComponent', () => {
  let component: UserInputMessageComponent;
  let fixture: ComponentFixture<UserInputMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInputMessageComponent]
    });
    fixture = TestBed.createComponent(UserInputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

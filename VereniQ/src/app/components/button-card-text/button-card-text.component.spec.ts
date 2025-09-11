import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonCardTextComponent } from './button-card-text.component';

describe('ButtonCardTextComponent', () => {
  let component: ButtonCardTextComponent;
  let fixture: ComponentFixture<ButtonCardTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonCardTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCardTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

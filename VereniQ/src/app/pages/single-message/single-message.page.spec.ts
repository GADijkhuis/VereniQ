import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleMessagePage } from './single-message.page';

describe('SingleMessagePage', () => {
  let component: SingleMessagePage;
  let fixture: ComponentFixture<SingleMessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

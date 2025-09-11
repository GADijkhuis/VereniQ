import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleEventPage } from './single-event.page';

describe('SingleEventPage', () => {
  let component: SingleEventPage;
  let fixture: ComponentFixture<SingleEventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

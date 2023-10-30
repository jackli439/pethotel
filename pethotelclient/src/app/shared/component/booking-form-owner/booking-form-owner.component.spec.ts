import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormOwnerComponent } from './booking-form-owner.component';

describe('BookingFormOwnerComponent', () => {
  let component: BookingFormOwnerComponent;
  let fixture: ComponentFixture<BookingFormOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFormOwnerComponent]
    });
    fixture = TestBed.createComponent(BookingFormOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

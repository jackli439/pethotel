import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormRoomsComponent } from './booking-form-rooms.component';

describe('BookingFormRoomsComponent', () => {
  let component: BookingFormRoomsComponent;
  let fixture: ComponentFixture<BookingFormRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFormRoomsComponent]
    });
    fixture = TestBed.createComponent(BookingFormRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

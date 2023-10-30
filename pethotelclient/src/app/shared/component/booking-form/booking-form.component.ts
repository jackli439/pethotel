import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookingService } from '../../service/booking/booking.service';
import { Room } from '../../model/room';
import { EmergencyContact } from '../../model/emergencyContact';
import { Pet } from '../../model/pet';
import { RoomTypeService } from '../../service/roomType/room-type.service';
import { RoomType } from '../../model/room-type';
import { Booking } from '../../model/booking';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  bookingForm: FormGroup;
  // roomTypes: RoomType[];

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private roomTypeService: RoomTypeService
  ) {

    this.bookingForm = this.buildForm()
    this.bookingService.getBooking('1').subscribe((booking) => {
      
    });
  }

  private buildForm(): FormGroup {
    return this.bookingForm = this.formBuilder.group({
      id: [],
      startDate: [],
      endDate: [],
      checkedIn: [],
      expired: [],
      owner: this.formBuilder.group({
        id: [],
        firstName: [],
        lastName: [],
        email: [],
        phoneNumber: [],
        emergencyContacts: this.formBuilder.array([]),
      }),
      rooms: this.formBuilder.array([]),
    });
  }

  get owner(): FormGroup {
    return this.bookingForm.get('owner') as FormGroup;
  }

}

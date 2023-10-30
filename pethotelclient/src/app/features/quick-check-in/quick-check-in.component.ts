import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Booking } from 'src/app/shared/model/booking';
import { BookingService } from 'src/app/shared/service/booking/booking.service';

@Component({
  selector: 'app-quick-check-in',
  templateUrl: './quick-check-in.component.html',
  styleUrls: ['./quick-check-in.component.css'],
})
export class QuickCheckInComponent {
  constructor(private bookingService: BookingService) {}

  private _bookings: Booking[] = null as any;
  @Input() set bookings(value: Booking[]) {
    if (value !== null) {
      this._bookings = value;
    }
  }
  get bookings(): Booking[] {
    return this._bookings;
  }

  private bookingCheckInInProgress: Map<Booking, boolean> = new Map();

  sortBookingsByStartDate(bookings: Booking[]): Booking[] {
    return this.bookingService.sortBookingsByStartDate(bookings)
  }

  getTodayBookings(bookings: Booking[]): Booking[] {
    return this.bookingService.getTodayBookings(bookings)
  }

  startCheckIn(booking: Booking) {
    this.bookingCheckInInProgress.set(booking, true);
    this.bookingService.updateCheckIn(booking.id, true).subscribe((rooms) => {
      this.bookingCheckInInProgress.set(booking, false);
      let foundBooking: Booking = this.bookings.find((b) => {
        return b.id === booking.id;
      }) as Booking;
      foundBooking.checkedIn = true;
    });
  }

  isBookingCheckInInProgress(booking: Booking): boolean {
    if (this.bookingCheckInInProgress.has(booking)) {
      return this.bookingCheckInInProgress.get(booking) as boolean;
    }
    return false;
  }
}

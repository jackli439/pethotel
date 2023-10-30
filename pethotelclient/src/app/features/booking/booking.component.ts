import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/shared/model/booking';
import { BookingService } from 'src/app/shared/service/booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  bookings: Booking[] = null as any;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.getBookings();
  }

  private getBookings() {
    this.bookingService.getBookings().subscribe((bookings) => {
      this.bookings = bookings;
    });
  }

  routeTo(route: string, id: string) {
    this.router.navigate([route, id])
  }

  sortBookingsByStartDate(bookings: Booking[]): Booking[] {
    return this.bookingService.sortBookingsByStartDate(bookings);
  }

  sortBookingsByEndDate(bookings: Booking[]): Booking[] {
    return this.bookingService.sortBookingsByEndDate(bookings);
  }
}

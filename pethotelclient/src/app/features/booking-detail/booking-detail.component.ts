import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/shared/model/booking';
import { BookingService } from 'src/app/shared/service/booking/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css'],
})
export class BookingDetailComponent {

  booking: Booking | null = null

  constructor(private route: ActivatedRoute, private bookingService: BookingService) {}


  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('id')
    this.bookingService.getBooking(bookingId as string).subscribe((booking) => {
      this.booking = booking
    })


  }


}

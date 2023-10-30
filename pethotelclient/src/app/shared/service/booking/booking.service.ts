import { Injectable } from '@angular/core';
import { Booking } from 'src/app/shared/model/booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { HandleErrorService } from '../http/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private serverUrl = 'http://localhost:8080/booking';

  constructor(
    private http: HttpClient,
    private httpHandleError: HandleErrorService
  ) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.serverUrl}`).pipe(
      delay(2000),
      tap((_) => console.log('fetched bookings')),
      catchError(
        this.httpHandleError.handleError<Booking[]>('getBookings', undefined)
      )
    );
  }

  getBooking(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.serverUrl}/${id}`).pipe(
      delay(2000),
      tap((_) => console.log('fetched booking')),
      catchError(
        this.httpHandleError.handleError<Booking>('getBooking', undefined)
      )
    );
  }

  updateCheckIn(bookingId: string, checkIn: boolean): Observable<Booking> {
    return this.http
      .put<Booking>(
        `${this.serverUrl}/${bookingId}/checkedIn?value=${checkIn}`,
        ''
      )
      .pipe(
        delay(2000),
        tap((_) => console.log('updated check in for booking')),
        catchError(
          this.httpHandleError.handleError<Booking>('updateCheckIn', undefined)
        )
      );
  }
  
  getTodayBookings(bookings: Booking[]): Booking[] {
    return bookings?.filter((booking) => {
      let today: Date = new Date();
      let bookingStartDate = new Date(booking.startDate);
      return today.getDate() == bookingStartDate.getDate();
    });
  }

  sortBookingsByEndDate(bookings: Booking[]): Booking[] {
    return bookings?.sort((a, b) => {
      return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
    });
  }

  sortBookingsByStartDate(bookings: Booking[]): Booking[] {
    return bookings?.sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
  }
}

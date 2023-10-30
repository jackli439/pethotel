import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleErrorService } from '../http/handle-error.service';
import { Observable, catchError, delay, tap } from 'rxjs';
import { RoomType } from '../../model/room-type';

@Injectable({
  providedIn: 'root',
})
export class RoomTypeService {
  serverUrl = 'http://localhost:8080/roomType';

  constructor(
    private http: HttpClient,
    private httpHandleError: HandleErrorService
  ) {}

  getRoomTypes(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.serverUrl}`).pipe(
      delay(1000),
      tap((_) => console.log('fetched roomTypes')),
      catchError(
        this.httpHandleError.handleError<RoomType[]>('getRoomType', [])
      )
    );
  }
}

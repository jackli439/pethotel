import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleErrorService } from '../http/handle-error.service';
import { Observable, catchError, delay, tap } from 'rxjs';
import { Room } from '../../model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  serverUrl = 'http://localhost:8080/room';

  constructor(
    private http: HttpClient,
    private httpHandleError: HandleErrorService
  ) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.serverUrl}`).pipe(
      delay(2000),
      tap((_) => console.log('fetched rooms')),
      catchError(this.httpHandleError.handleError<Room[]>('getRoom', []))
    );
  }
}

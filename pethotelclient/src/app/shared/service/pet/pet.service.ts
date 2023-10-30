import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { Pet } from '../../model/pet';
import { HandleErrorService } from '../http/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  serverUrl = 'http://localhost:8080/pet';

  constructor(
    private http: HttpClient,
    private httpHandleError: HandleErrorService
  ) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.serverUrl}`).pipe(
      delay(2000),
      tap((_) => console.log('fetched pets')),
      catchError(this.httpHandleError.handleError<Pet[]>('getPet', []))
    );
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(
    private http: HttpClient,
    private logger: Logger
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPlaygroundServiceText() : Observable<string> {
    return this.http.get<string>('http://localhost:8080/playground-service"')
    .pipe(
     catchError(this.handleError)
    );
  }
}
 
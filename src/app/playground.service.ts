import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, take, tap, throwError } from 'rxjs';
import { Logger } from './logger.service';
import { ApiUrls } from './url-constants';
import { environment } from './../environments/environment';

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
    return throwError(() => new Error('test'));
  }

  getPlaygroundServiceText() : Observable<any> {
    return this.http.get(environment.apiUrl + ApiUrls.playgroundService, {responseType: 'text'});
  }
}
 
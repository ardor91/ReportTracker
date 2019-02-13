import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Home } from './home.model';


import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeUrl = 'api/home';

  constructor(private http: HttpClient,private router: Router) { }

  getDetailsOnTheMain(): Observable<any> {
    return this.http.get(this.homeUrl)
      .pipe(
        catchError(this.handleError('getDetailsOnTheMain', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      this.router.navigate(['/login']);
      return of(result as T);
    };
  }
}

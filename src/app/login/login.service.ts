import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private router: Router;

  constructor(private http: HttpClient) { }

  checkUser(data){
    const url = 'api/login';
    return this.http.post(url, data).pipe(
      //tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError(`getHero id`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    //this.router.navigate(['/error']);
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      this.router.navigate(['/error']);
      return of(result as T);
    };
  }

}

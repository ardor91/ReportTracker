import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from './shared/student.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsUrl = 'api/students';
  // _id;

  constructor(
    private http: HttpClient,
    injector: Injector,
    private router: Router
  ) {
    setTimeout(() => this.router = injector.get(Router));
  }

  getStudents (): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
    .pipe(
      //tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getStudent(id: string): Observable<Student> {
    // this._id = id;
    const url = `api/student/${id}`;
    return this.http.get<Student>(url).pipe(
      //tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Student>(`getHero id=${id}`))
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
      this.router.navigate(['/login']);
      return of(result as T);
    };
  }
}

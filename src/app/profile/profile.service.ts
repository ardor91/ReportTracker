import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from '../students/shared/student.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private router: Router;

  constructor(private http: HttpClient,
    injector: Injector) { }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>('/api/students/' + id).pipe(
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  addContact(value1,type1): Observable<any> {
    let data = {value:value1,type:type1};
    return this.http.post(`/api/students/`,data, httpOptions).pipe(

      catchError(this.handleError<Student>(`addContact`))
    );
  }

  addSkill(nameSkill, exp): Observable<any>{
    let data = {name:nameSkill,experience:exp};
    return this.http.post('/api/students/',data, httpOptions).pipe(
      catchError(this.handleError<Student>(`addContact`))
    );
  }

  // delete
  deleteContact(contact): any {
    return this.http.delete('/api/students/', httpOptions).pipe(
      catchError(this.handleError<Student>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
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

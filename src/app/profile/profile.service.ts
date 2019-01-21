import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from '../students/shared/student.model';
import { Router } from '@angular/router';

import {EventEmitter} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private router: Router;
  private id:number;

  onClick:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
    injector: Injector) {
      // setTimeout(() => this.router = injector.get(Router));
    }

  getStudent(id: number): Observable<Student> {
    this.id = id;
    return this.http.get<Student>('/api/students/' + id).pipe(
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  addNewContact(contactType, contactValue): Observable<Student> {
    let data = {type:contactType, value:contactValue};
    this.onClick.emit(data);
    return this.http.put<Student>(`/api/student/${this.id}`,data).pipe(
      catchError(this.handleError<Student>(`addContact`))
    );
  }

  addNewSkill(nameSkill, exp): Observable<any>{
    let data = {name:nameSkill,experience:exp};
    this.onClick.emit(data);
    return this.http.put<Student>(`/api/studentt/${this.id}`,data).pipe(
      catchError(this.handleError<Student>(`addSkill`))
    );
  }

  // delete
  deleteContact(contact): any {
    return this.http.delete('/api/students/', httpOptions).pipe(
      catchError(this.handleError<Student>('deleteContact'))
    );
  }

  deleteSkill(skill): any {
    return this.http.delete('/api/students/', httpOptions).pipe(
      catchError(this.handleError<Student>('deleteSkill'))
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

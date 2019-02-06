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
  private id:number;
  student: Student;

  onClick:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
    // injector: Injector,
  private router: Router) {
      // setTimeout(() => this.router = injector.get(Router));
    }

  getStudent(id: number): Observable<Student> {
    this.id = id;
    return this.http.get<Student>(`/api/student/${this.id}`).pipe(
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  updateStudentName(student: Student): Observable<any>{
    return this.http.put<Student>(`/api/student/${student.id}`, student, httpOptions).pipe(
      catchError(this.handleError<any>('updateStudentName'))
    );
  }

  getStudentForChange(): Observable<Student> {
    return this.http.get<Student>(`/api/student/${this.id}`).pipe(
      catchError(this.handleError<Student>(`getStudent id=${this.id}`))
    );
  }

  addNewContact(contactType, contactValue,obj): Observable<Student> {
    let contact = {type:contactType, value:contactValue};
    this.onClick.emit(contact);
    let data = obj.contacts.push(contact);
    return this.http.put<Student>(`/api/student/${this.id}`,obj).pipe(
      catchError(this.handleError<Student>(`addContact`))
    );
  }

  addNewSkill(nameSkill, exp, obj): Observable<any>{
    let skill = {name:nameSkill,experience:exp};
    this.onClick.emit(skill);
    let data = obj.skills.push(skill);
    return this.http.put<Student>(`/api/student/${this.id}`,obj).pipe(
      catchError(this.handleError<Student>(`addSkill`))
    );
  }

  // delete
  deleteContact(contactType, contactValue,obj): any {
    let contact = {type:contactType, value:contactValue};
    let data = obj.contacts.pop(contact);
    return this.http.put(`/api/student/${this.id}`,obj).pipe(
      catchError(this.handleError<Student>('deleteContact'))
    );
  }

  deleteSkill(nameSkill, exp, obj): any {
    let skill = {name:nameSkill,experience:exp};
    let data = obj.skills.pop(skill);
    return this.http.put(`/api/student/${this.id}`,obj).pipe(
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

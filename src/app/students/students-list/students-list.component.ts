import { Component, OnInit } from '@angular/core';

import { Student } from '../shared/student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
    .subscribe(students => {
      console.log(students);
      this.students = students
    });
  }

}

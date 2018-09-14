import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../shared/student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentsService.getStudent(id)
      .subscribe(student => {
        console.log(student);
        this.student = student});
  }

  goBack(): void {
    this.location.back();
  }

  ExpToText(exp: number): string {
    return this.options.filter(
          option => option.value === exp)[0].name;
  }

  options = [
    {
      name: 'Expert',
      value: 4
    },
    {
      name: 'Experienced',
      value: 3
    },
    {
      name: 'Extensive knowledge',
      value: 2
    },
    {
      name: 'Working knowledge',
      value: 1
    }
  ]

}

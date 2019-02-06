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
      this.students = students
    });
  }

  getReportsCount(student: Student): number {
    let count = 0;
    student.tasks.forEach(element => {
      if(element.reports)
        count += element.reports.length;
    });
    return count;
  }

  getStudyLength(startDate: string): string {
    let date = new Date(startDate);
    let now = new Date();

    var duration = this.monthDiff(date, now);

    if(duration == 0)
    {
        return this.daysDiff(date, now) + " day(s)";
    }
    if(duration > 12)
    {
      console.log(duration + "   total months");
      let years = duration / 12;
      let months = duration % 12;
      return Math.trunc(years) + " year(s) " + months + " month(s)";
    }
    return duration + " month(s)";
  }

  private monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  private daysDiff(d1, d2) {
    var days;
    days = (d2.getDate() - d1.getDate());
    return days <= 0 ? 0 : days;
  }

}

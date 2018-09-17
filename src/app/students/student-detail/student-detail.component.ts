import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../shared/student.model';
import { Task } from '../shared/task.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  tasks: Task[];
  selectedTask: Task;

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

  sortTasks(): void {
    
  }

  goBack(): void {
    this.location.back();
  }

  selectTask(task: Task): void {
    this.selectedTask = task;
  }

  ExpToText(exp: number): string {
    return this.options.filter(
          option => option.value === exp)[0].name;
  }

  getDurationTime(startDate: string): string {
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

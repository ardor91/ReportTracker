import { Component, OnInit } from '@angular/core';

import { Student } from '../students/shared/student.model';
import { ProfileService } from './profile.service';

const id = 1;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  student: Student;

  constructor(private profileService: ProfileService) {
    this.profileService.onClick.subscribe(data => {
      if(data.type) {
        this.student.contacts.push(data);
      } else {
        this.student.skills.push(data);
      }
    });
    console.log(this.student);
  }

  ngOnInit() {
    this.getStudent(id);
  }

  getStudent(id): void{
    this.profileService.getStudent(id)
      .subscribe(student => {
        this.student = student;
        console.log(this.student);
      });
      // console.log(this.student);
  }


  getReportsCount(student: Student): number {
    let count = 0;
    student.tasks.forEach(element => {
      if (element.reports)
        count += element.reports.length;
    });
    return count;
  }

  getStudyLength(startDate: string): string {
    let date = new Date(startDate);
    let now = new Date();

    var duration = this.monthDiff(date, now);

    if (duration == 0) {
      return this.daysDiff(date, now) + " day(s)";
    }
    if (duration > 12) {
      // console.log(duration + "   total months");
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

  ExpToText(exp: number): string {
    return this.options.filter(
      option => option.value === exp)[0].name;
  }

  deleteContact(idx) {
    this.profileService.deleteContact(idx)
      .subscribe(contact => {
        this.student.contacts.splice(idx, 1);
      });
  }

  deleteSkill(idx) {
    this.profileService.deleteSkill(idx)
      .subscribe(skill => {
        this.student.skills.splice(idx, 1);
      });
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
    },
    {
      name: 'None'
    }
  ]
}

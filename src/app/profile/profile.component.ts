import { Component, OnInit } from '@angular/core';

import { Student } from '../students/shared/student.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  student: Student;
  skype = [];
  phone = [];
  id: number;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(): void {
    const id = 1;
    this.id = id;
    this.profileService.getStudent(id)
      .subscribe(student => {
        this.student = student;
        let contacts = this.student.contacts;
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i].type == 'phone') {
            this.phone.push(contacts[i].value);
          } else {
            this.skype.push(contacts[i].value);
          }
        }
      });
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


  newContact(value, type): string {
    value = value.trim();
    if (!value) { return; }
    this.profileService.addContact( value, type)
      .subscribe(contact => {
        let newContact = { type: contact.type, value: contact.value};
        this.student.contacts.push(newContact);
        if (newContact.type == 'phone') {
          this.phone.push('+375' + newContact.value);
        } else {
          this.skype.push(newContact.value);
        }
        console.log(this.student.contacts);
      });
  }

  newSkill(name, experience): string{
    name = name.trim();
    if (!(name && experience)) { return; }
    this.profileService.addSkill( name, experience)
    .subscribe(skill => {
      let newSkill = { name: skill.name, experience: skill.experience };
      this.student.skills.push(newSkill);
    });
  }

  delete(contact):void{
    // console.log(this.student.contacts[1].value);
    // console.log(contact);

    this.profileService.deleteContact(contact)
    .subscribe(contact => {
      let index = 0;
      for(let i=0; i < this.student.contacts.length; i++){
        if(this.student.contacts[i].value == contact){
          index = i;
        }
      }
        this.student.contacts.splice(index, 1);
        // console.log(index);
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

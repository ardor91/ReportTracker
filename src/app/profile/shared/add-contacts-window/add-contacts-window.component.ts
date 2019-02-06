import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProfileService} from '../../profile.service';
import {Student} from '../../../students/shared/student.model';

@Component({
  selector: 'app-add-contacts-window',
  templateUrl: './add-contacts-window.component.html',
  styleUrls: ['./add-contacts-window.component.css']
})
export class AddContactsWindowComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentNewContact);

    // dialogRef.afterClosed().subscribe(result => {});
  }


}

@Component({
  selector: 'dialog-overview-add-contact',
  templateUrl: 'dialog-overview-add-contact.html',
})
export class DialogContentNewContact {
  newContact = {};
  student: Student;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getStudentForChange();
  }

  getStudentForChange(): void{
    this.profileService.getStudentForChange()
      .subscribe(student => {
        this.student = student;
      });
  }

  add(type,value) {
    this.profileService.addNewContact(type,value,this.student)
      .subscribe(newContact => {
        this.newContact = newContact;
      });
  }
}

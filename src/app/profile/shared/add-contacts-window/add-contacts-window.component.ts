import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProfileService} from '../../profile.service';

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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'dialog-overview-add-contact',
  templateUrl: 'dialog-overview-add-contact.html',
})
export class DialogContentNewContact {
  newContact = {};
  constructor(private profileService: ProfileService) {}

  add(type,value) {
    this.profileService.addNewContact(type,value)
      .subscribe(newContact => {
        this.newContact = newContact;
      });
  }
}

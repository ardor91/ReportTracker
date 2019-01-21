import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProfileService} from '../../profile.service';

@Component({
  selector: 'app-add-skills-window',
  templateUrl: './add-skills-window.component.html',
  styleUrls: ['./add-skills-window.component.css']
})
export class AddSkillsWindowComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentNewSkill);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'dialog-overview-add-skill',
  templateUrl: 'dialog-overview-add-skill.html',
})
export class DialogContentNewSkill {
  newSkill = {};
  constructor(private profileService: ProfileService) {}

  add(name,experience) {
    // console.log(name, experience);
    this.profileService.addNewSkill(name,experience)
      .subscribe(newSkill => {
        this.newSkill = newSkill;
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

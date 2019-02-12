import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user;
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  toRegister(firstName,lastName,email,login,password){
    let data = { firstName, lastName, email, login, password };
    this.registrationService.newUser(data)
      .subscribe(user => {
        this.user = user;
      });
  }


}

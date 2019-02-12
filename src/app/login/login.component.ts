import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err;
  message= '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  checkLogin(email,password){
    let data = { email, password };
    this.loginService.checkUser(data)
    .subscribe(result => {
      this.err = result;
      if(this.err === null) {
        this.message = 'false';
      } else {
        this.message = 'true';
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err;
  message= '';

  constructor(private loginService: LoginService, private appService: AppService,private router: Router) { }

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
        setTimeout(()=> {this.router.navigate(['/home'])}, 500);
      }
    });
  }


  errorStatus(){
    if(this.err === null) {
      this.appService.errorStatus('err');
    } else {
      this.appService.errorStatus('ok');
    }
  }

}

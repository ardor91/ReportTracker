import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  result;

  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.logoutService.logout().subscribe(result => {
      this.result = result;
      setTimeout(()=> {this.router.navigate(['/login'])}, 500);
    });
  }

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cookieValue;
  errStatus;

  constructor(private cookieService: CookieService) { }

  linkAccess(){
    this.cookieValue = this.cookieService.get('auth');
    if(this.cookieValue) {
      return true;
    } else {
      return false;
    }
  }

  errorStatus(val){
    this.errStatus = val;
  }
}

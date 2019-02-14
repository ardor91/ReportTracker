import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  cookieValue = '';

    constructor(private router: Router, private cookieService: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.cookieValue = this.cookieService.get('auth');
      if (!this.cookieValue) {

        return true;

      } else {
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        return false;
      }


    }
}

import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: Home;
  // about: Home;
  // techologies: Home;
  // howToHire: Home;
  // aboutHiring: Home;
  // contacts: Home;
  // trends: Home;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.homeService.getHome()
      .subscribe(home => this.home=home
        // home => {
        // this.about = home[0].about;
        // this.techologies = home[0].techologies;
        // this.howToHire = home[0].howToHire;
        // this.aboutHiring = home[0].aboutHiring;
        // this.contacts = home[0].contacts;
        // this.trends = home[0].trends;
      // }
    );
  }
}

// export class DataComponent{
//     this.http.get(path).subscribe({
//        DataComponent.setSubscribeData(res);
//     })
// }
//
//
// static subscribeData:any;
// static setSubscribeData(data):any{
//     DataComponent.subscribeData=data;
//     return data;
// }

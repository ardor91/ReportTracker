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

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getDetailsOnTheMain();
  }

  getDetailsOnTheMain() {
    this.homeService.getDetailsOnTheMain()
      .subscribe(home => {
          this.home=home[0];
      });
  }
}

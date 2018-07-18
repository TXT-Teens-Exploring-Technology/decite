import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {OnInit} from '@angular/core';

import { periodOnePage } from '../pages/period1/period1';
import { periodTwoPage } from '../pages/period2/period2';
import { PeriodPage } from '../pages/period3/period3';

@Component({
  templateUrl: 'app.html'


  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = periodOnePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Period 1', component: periodOnePage },
      { title: 'Period 2', component: periodTwoPage },
      { title: 'Period 3', component: PeriodPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


export class appComponent implements OnInit { 
  itemCount: number;
  btnText: string='Send';
  textText: string="Got Anything to say?"

  
  constructor() { }

  ngOnInit() {
    //this.itemCount = this.texts.length;
  }


}




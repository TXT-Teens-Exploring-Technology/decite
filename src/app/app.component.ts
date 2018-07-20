import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {OnInit} from '@angular/core';


import { PeriodPage } from '../pages/period/period';
import { DatabaseProvider } from '../providers/database/database';
import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'


  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PeriodPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public db: DatabaseProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = this.db.getPages();

    //TO ADD MORE PAGES
    let otherPages = [
      { title: 'Extra', component: PeriodPage, class_id: 0}
    ]
    this.pages= this.pages.concat(otherPages);
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
    this.nav.setRoot(page.component, {info: this.db.getClass(page.class_id)});
  }
  profilePage(){
    this.nav.push(ProfilePage);
  }
//ADD BUTTON MENU
  addMenu(){
    let otherPages = [
      { title: 'Extra', component: PeriodPage, class_id: 0}
    ]
    this.pages= this.pages.concat(otherPages);
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




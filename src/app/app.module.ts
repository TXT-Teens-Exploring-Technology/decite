import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';

import { PeriodPage } from '../pages/period/period';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';


@NgModule({
  declarations: [
    MyApp,
  PeriodPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PeriodPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,

  ]
})
export class AppModule {}

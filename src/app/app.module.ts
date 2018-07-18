import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { periodOnePage } from '../pages/period1/period1';
import { periodTwoPage } from '../pages/period2/period2';
import { PeriodPage } from '../pages/period3/period3';
// import { NewPage } from '../pages/new/new';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeriodServiceProvider } from '../providers/period-service/period-service';

@NgModule({
  declarations: [
    MyApp,
    periodOnePage,
    periodTwoPage,
    PeriodPage,
    // NewPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    periodOnePage,
    periodTwoPage,
    PeriodPage,
    // NewPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeriodServiceProvider
  ]
})
export class AppModule {}

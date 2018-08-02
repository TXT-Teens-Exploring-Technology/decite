import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule} from "@ionic/storage";

import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';

import { PeriodPage } from '../pages/period/period';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { ProfilePage } from '../pages/profile/profile';
import { PeriodNewPage } from '../pages/period-new/period-new';

@NgModule({
  declarations: [
    MyApp,
    PeriodPage,
    ProfilePage,
    PeriodNewPage
  ],
  imports: [

  BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
    }),
    FormsModule,
    IonicStorageModule.forRoot(),

  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PeriodPage,
    ProfilePage,
    PeriodNewPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,

  ]
})
export class AppModule {}

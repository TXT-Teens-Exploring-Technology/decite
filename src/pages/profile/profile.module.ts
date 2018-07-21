import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {

  profile =[
    {
      profileId: 0,
      profileName: 'Joathan D.',
      schoolName: 'Cathedral Highschool',
      gradeNumber: '11th',
      contactInfo: '323-394-6216',
    }
  ]
  
}

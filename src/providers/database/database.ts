import { Injectable } from '@angular/core';
import { PeriodPage } from '../../pages/period/period';
import { ProfilePage } from '../pages/profile/profile';


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  classes = [
    {
      class_id : 0,
      className: 'Period 1',
      teacherName: 'Ms. Le',
      teacherPicture: 'teacher.png',
      period: 'Period 1',
      comments:[
        {
          likes: 0,
          text: 'Nice Class!'
        }
      ]
    },
    {
      class_id : 1,
      className: 'Period 2',
      teacherName: 'Mr. Lee',
      teacherPicture: 'teacher.png',
      period: 'Period 2',
      comments:[
        {
          likes: 0,
          text: 'Nice Class Bro!'
        }
      ]
    },
    {
      class_id : 2,
      className: 'Period 3',
      teacherName: 'Mr. T',
      teacherPicture: 'teacher.png',
      period: 'Period 2',
      comments:[
        {
          likes: 0,
          text: 'Nice Class Bro!'
        }
      ]
    },
  ]

  profile =[
    {
      profileId: 0,
      profileName: 'Joathan D.',
      schoolName: 'Cathedral Highschool',
      gradeNumber: '11th',
      contactInfo: '323-394-6216',
    }
  ]

  constructor() {
    console.log('Hello DatabaseProvider Provider');
  }
  getProfile(profileId_id){
    for(let i=0; i< this.profile.length; i++){
      if(this.profile[i].profileId == profileId_id){
        return this.profile[i];
      }
    }
  }
  
getClass(class_id){
  for(let i=0; i< this.classes.length; i++){
    if(this.classes[i].class_id == class_id){
      return this.classes[i];
    }
  }
}

getPages(){
    let output =[];
    for (let i = 0; i < this.classes.length; i++){
      output.push({
        title: this.classes[i].teacherName,
        component: PeriodPage,
        class_id : this.classes[i].class_id
      })
    }
    return output;
}

}

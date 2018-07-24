import { Injectable } from '@angular/core';
import { PeriodPage } from '../../pages/period/period';
import { ProfilePage } from '../../pages/profile/profile';
import { Storage } from '@ionic/storage';




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
      className: 'Algebra',
      teacherPicture: 'assets/imgs/teacher.png',
      teacherName: 'Mr. Domingez',
      period: 'Period 1',
      comments:[
        {
          likes: 19,
          text: 'The atmosphere of Mr. Domingez’s class is off. It feels like im trapped.',
        }
      ]
    },
    {
      class_id : 1,
      className: 'Period 2',
      teacherName: 'Mr. Rodriguez',
      teacherPicture: 'assets/imgs/teacher2.png',
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
      teacherName: 'Ms. Promunis',
      teacherPicture: 'assets/imgs/teacher3.png',
      period: 'Period 2',
      comments:[
        {
          likes: 0,
          text:'Nice Class Bro!'
        }
      ]
    },
  ] 



  profiles =[
    {
      name:'Joanathan',
      school: 'Verbum Dei',
      grade: '11th',
      contact: '323-394-6216',
    }
  ];

  constructor() {
    console.log('Hello DatabaseProvider Provider');
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
        image: this.classes[i].teacherPicture,
        // classname: this.classes[i].className,
        component: PeriodPage,
        class_id : this.classes[i].class_id
      })
    }
    return output;
} 

}

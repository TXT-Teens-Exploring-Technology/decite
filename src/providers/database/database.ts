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
      class_id: 0,
      className: 'Algebra',
      teacherPicture: 'assets/imgs/teacher.png',
      teacherName: 'Mr. Domingez',
      roomNumber: "Room 745",
      period: 'Period 1',
      comments: [
        {
          likes: 19,
          text: 'The atmosphere of Mr. Domingez’s class is off. It feels like im trapped.',
        }
      ]
    },
    {
      class_id: 1,
      className: 'English',
      teacherName: 'Mr. Rodriguez',
      teacherPicture: 'assets/imgs/teacher2.png',
      roomNumber: "Room 207",
      period: 'Period 2',
      comments: [
        {
          likes: 0,
          text: "I'm bored in class"
        }
      ]
    },
    {
      class_id: 2,
      className: 'Physics',
      teacherName: 'Ms. Promunis',
      teacherPicture: 'assets/imgs/teacher3.png',
      roomNumber: "Room 302",
      period: 'Period 3',
      comments: [
        {
          likes: 0,
          text: 'Bro that Homework was easy I want a challenge'
        }
      ]
    },
    {
      class_id: 3,
      className: 'Bio',
      teacherName: 'Mr. Johnson',
      teacherPicture: 'assets/imgs/teacher4.png',
      roomNumber: "Room 506",
      period: 'Period 4 ',
      comments: [
        {
          likes: 0,
          text: 'Alright bet, this class is too easy'
        }
      ]
    },
  ]



  profiles = [
    {
      name: 'Ricardo Godinez',
      school: 'Verbum Dei',
      grade: '11th',
      contact: '323-394-6216',
    }
  ];

  constructor() {
    console.log('Hello DatabaseProvider Provider');
  }




  getClass(class_id) {
    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes[i].class_id == class_id) {
        return this.classes[i];
      }
    }
  }

  getPages() {
    let output = [];
    for (let i = 0; i < this.classes.length; i++) {
      output.push({
        title: this.classes[i].teacherName,
        image: this.classes[i].teacherPicture,
        className: this.classes[i].className,
        room: this.classes[i].roomNumber,
        component: PeriodPage,
        class_id: this.classes[i].class_id
      })
    }
    return output;
  }

  //For the Profile Data
  getprofile() {
    let output = [];
    for (let i = 0; i < this.profiles.length; i++) {
      output.push({
        userName: this.profiles[i].name,
        userSchool: this.profiles[i].school,
        userGrade: this.profiles[i].grade,
        userContact: this.profiles[i].contact,
      })
    }
    return output;
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'period.html'
})
export class PeriodPage {
  texts = [];
  newText = '';
  itemCount = 0;
  info;
  name = 'No Class Selected';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('info');
    if(this.info != undefined){
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
    }
  }

  addPost() {
    this.texts.push(
      {
        text: this.newText,
        likes: 0
      }
    );
    this.newText = '';
    this.itemCount = this.texts.length;
  }

  likePost(likedPost) {
    likedPost.likes += 1
    console.log(likedPost.likes)
    console.log("Hello World")
    // sort likedPosts
    this.texts = this.texts.sort((a, b) => {
      if (a.likes > b.likes) {
        return -1;
      }
      if (a.likes < b.likes) {
        return 1;
      }
      return 0;
    })
  console.log(this.texts);
  }

  // const da = new Date(){}
  // const a = da.getHours() + ':'+da.getMinutes()
  
}


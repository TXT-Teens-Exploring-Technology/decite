import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'period1.html'
})
export class periodOnePage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  texts = [];
  newText = '';
  itemCount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(periodOnePage, {
      item: item
    });
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


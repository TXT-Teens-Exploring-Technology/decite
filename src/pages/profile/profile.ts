import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { profiles } from '../../providers/database/database';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }

  


  getProfile(){
    var input = "afa"

    console.log(input);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

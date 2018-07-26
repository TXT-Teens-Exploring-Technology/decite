import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
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
  user;
  editOn=false

  constructor( public database: DatabaseProvider ){
    this.user = this.database.getUser();
  }
  editButton(){
    this.editOn=true;
  }
  
  confirmButton(){
    this.database.editUser(this.user.name, this.user.school, this.user.grade, this.user.contact)
    this.editOn=false;
  }

  }







  






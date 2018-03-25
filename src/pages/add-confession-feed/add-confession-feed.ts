import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/**
 * Generated class for the AddConfessionFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-confession-feed',
  templateUrl: 'add-confession-feed.html',
})
export class AddConfessionFeedPage {
  confessionList: AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDatabase: AngularFireDatabase) {
    this.confessionList = afDatabase.list('/contacts');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddConfessionFeedPage');
  }

  addConfessionFeed(name){
    this.confessionList.push({
      name: name
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}

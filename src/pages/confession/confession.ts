import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ConfessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confession',
  templateUrl: 'confession.html',
})
export class ConfessionPage {
  confessionList: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDatabase: AngularFireDatabase) {
    this.confessionList = afDatabase.list('/contacts').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfessionPage');
  }

  openPostPage(){
    this.navCtrl.push('AddConfessionFeedPage');
  }

}

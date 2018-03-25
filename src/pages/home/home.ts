import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private rootPage;

  cards: any;
    category: string = 'gear';
    socialList: Observable<any[]>;
  constructor(public navCtrl: NavController,
    public navParam : NavParams,
    public afDatabase: AngularFireDatabase,
  public storage: Storage) {
    this.socialList = afDatabase.list('/socialFeed').valueChanges()
    this.rootPage = HomePage;
    
  }
  ionViewDidLoad() {
    console.log(this.storage.get('name'));
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
  openPostPage(){
    this.navCtrl.push('AddSocialFeedPage');
  }
}

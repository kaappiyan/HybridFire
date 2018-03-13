import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private rootPage;

  cards: any;
    category: string = 'gear';
  constructor(public navCtrl: NavController) {
    this.rootPage = HomePage;
    this.cards = new Array(10);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
}

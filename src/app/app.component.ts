import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  public splashScreen: SplashScreen;

  constructor(platform: Platform, statusBar: StatusBar ) {
    platform.ready().then(() => {
      this.hideSplashScreen();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyDnAJC_pSBqSpOrQ7erLu4mIUCGlB_E9Po",
      authDomain: "b2chybrid.firebaseapp.com",
      databaseURL: "https://b2chybrid.firebaseio.com",      
      storageBucket: "b2chybrid.appspot.com",
      messagingSenderId: "620814455025"     
    });
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = 'HomePage';
        unsubscribe();
      }
    });
 
        
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
     }

    }
}

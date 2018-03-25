import { Component,ViewChild } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthData } from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';


import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  @ViewChild('mycontent') navCtrl: NavController;
  rootPage:any ;
  public splashScreen: SplashScreen;

 

  constructor(platform: Platform, 
    statusBar: StatusBar,
    public authProvider: AuthData ) {
    platform.ready().then(() => {
    
      
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
        this.rootPage = HomePage;
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
    openHomePage(){
      this.rootPage = HomePage; 
    }
    openConfessionPage() {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
       this.rootPage = 'ConfessionPage'; 
    }

    logout(){
      
      this.authProvider.logoutUser();
      this.rootPage = 'LoginPage';
	    
    }
}

import { Component ,Input } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from 'ionic-native';
/**
 * Generated class for the AddSocialFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-social-feed',
  templateUrl: 'add-social-feed.html',
})
export class AddSocialFeedPage {

  captureDataUrl: string;
  alertCtrl: AlertController;

  @Input('useURI') useURI: Boolean = true;

  public email : any;
  socialList: AngularFireList<any>;
  private imageSrc: string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public afDatabase: AngularFireDatabase,
     public storage: Storage,
     alertCtrl: AlertController) {
      this.alertCtrl = alertCtrl;
    this.socialList = afDatabase.list('/socialFeed');
  }

  ionViewDidLoad() {
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.getData(val);
     
    });
    
    console.log(this.storage.get('name'));
    console.log('ionViewDidLoad AddSocialFeedPage');
  }
  getData(val){
    this.email=val;
    console.log('ths gotta work perfect'+this.email);
  }
  addSocialFeed(name){
    this.socialList.push({
      feedText: name,
    feedOwner: this.email
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

  getPicture(){
    const cameraOptions: CameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,      
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 50,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    
    }
    Camera.getPicture(cameraOptions)
    .then(file_uri => this.imageSrc = file_uri, 
    err => console.log(err));   
  }  
  upload() {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
        // Do something here when the data is succesfully uploaded!
        this.showSuccesfulUploadAlert();
    });
  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();
    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }
}

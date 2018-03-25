import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSocialFeedPage } from './add-social-feed';

@NgModule({
  declarations: [
    AddSocialFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSocialFeedPage),
  ],
})
export class AddSocialFeedPageModule {}

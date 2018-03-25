import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddConfessionFeedPage } from './add-confession-feed';

@NgModule({
  declarations: [
    AddConfessionFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(AddConfessionFeedPage),
  ],
})
export class AddConfessionFeedPageModule {}

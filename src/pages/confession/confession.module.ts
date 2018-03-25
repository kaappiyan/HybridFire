import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfessionPage } from './confession';

@NgModule({
  declarations: [
    ConfessionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfessionPage),
  ],
})
export class ConfessionPageModule {}

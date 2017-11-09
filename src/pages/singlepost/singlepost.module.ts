import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglepostPage } from './singlepost';

@NgModule({
  declarations: [
    SinglepostPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglepostPage),
  ],
})
export class SinglepostPageModule {}

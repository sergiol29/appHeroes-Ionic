import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleModalCommentPage } from './sample-modal-comment';

@NgModule({
  declarations: [
    SampleModalCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleModalCommentPage),
  ],
})
export class SampleModalCommentPageModule {}

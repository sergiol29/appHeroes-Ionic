import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroeGalleryPage } from './heroe-gallery';

@NgModule({
  declarations: [
    HeroeGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroeGalleryPage),
  ],
})
export class HeroeGalleryPageModule {}

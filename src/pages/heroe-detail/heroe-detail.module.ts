import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroeDetailPage } from './heroe-detail';

/* Load Component */
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    HeroeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroeDetailPage),
    ComponentsModule
  ],
})
export class HeroeDetailPageModule {}

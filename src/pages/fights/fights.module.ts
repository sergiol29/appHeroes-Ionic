import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightsPage } from './fights';

/* Load Component */
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    FightsPage,
  ],
  imports: [
    IonicPageModule.forChild(FightsPage),
    ComponentsModule
  ],
})
export class FightsPageModule {}

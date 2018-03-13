import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroeListPage } from './heroe-list';

/* Load Component */
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    HeroeListPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroeListPage),
    ComponentsModule
  ],
})
export class HeroeListPageModule {}

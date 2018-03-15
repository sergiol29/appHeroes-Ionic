import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroeAparenceListPage } from './heroe-aparence-list';

/* Load Component */
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    HeroeAparenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroeAparenceListPage),
    ComponentsModule
  ],
})
export class HeroeAparenceListPageModule {}

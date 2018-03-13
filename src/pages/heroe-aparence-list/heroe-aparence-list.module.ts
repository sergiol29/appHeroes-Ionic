import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroeAparenceListPage } from './heroe-aparence-list';

@NgModule({
  declarations: [
    HeroeAparenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroeAparenceListPage),
  ],
})
export class HeroeAparenceListPageModule {}

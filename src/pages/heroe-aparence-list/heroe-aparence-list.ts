import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';

/* Open modal page */
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the HeroeAparenceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroe-aparence-list',
  templateUrl: 'heroe-aparence-list.html',
})
export class HeroeAparenceListPage {
  idHeroe: number;
  appearances: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private heroesProv: HeroesProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HeroeAparenceListPage');
    
    /* get ID heroe like params of function */
    this.idHeroe = this.navParams.get('heroe');
    this.getAppearanceProvider();
  }

  /* get Data in API */
  getAppearanceProvider() {
    /* get Data of API with funcion getAppearance in Providers heroes */
    this.heroesProv.getAppearance(this.idHeroe).subscribe(
      (data) => {
        this.appearances = data;
        //console.log(data);
      });
  }

  /* Open Modal Page */
  openModal(idHeroe: number) {
    let myModal = this.modalCtrl.create('SampleModalPage', {idHeroe: idHeroe} );

    /* When close modal refresh data */
    myModal.onDidDismiss(data => {
      this.getAppearanceProvider();
    });

    myModal.present();
  }

}

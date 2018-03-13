import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private heroesProv: HeroesProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HeroeAparenceListPage');
    
    /* get ID heroe like params of function */
    this.idHeroe = this.navParams.get('heroe');

    /* get Data of API with funcion getAppearance in Providers heroes */
    this.heroesProv.getAppearance(this.idHeroe).subscribe(
      (data) => {
        this.appearances = data;
        console.log(data);
      });
  }

}

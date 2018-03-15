import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';

/* Loading Spinner */
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the FightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fights',
  templateUrl: 'fights.html',
})
export class FightsPage {

  heroeFights: any;
  idHeroe: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private heroesProv: HeroesProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FightsPage');
    this.idHeroe = this.navParams.get('heroe');

    /* Create loading spinner */
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });

    /* Show loading spinner */
    loader.present().then(() => {
      /* get Data of API */
      this.heroesProv.getFights(this.idHeroe).subscribe(
          (data) => {
            this.heroeFights = data;
            /* Hide loading spinner */
            loader.dismiss();
            //console.log(data);
          }
      );
    });


  }

}

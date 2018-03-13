import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';

/* Loading Spinner */
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the HeroeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroe-list',
  templateUrl: 'heroe-list.html',
})
export class HeroeListPage {
  heroes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private heroesProv: HeroesProvider, public loadingCtrl: LoadingController) {
  }

  ionViewWillLoad() {
    /* Create loading spinner */
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });

    /* Show loading spinner */
    loader.present().then(() => {
      /* get Data of API */
      this.heroesProv.getAll().subscribe(
          (data) => {
            this.heroes = data;
            /* Hide loading spinner */
            loader.dismiss();
            //console.log(data);
          }
      );
    });
  }

  /* When tap in buttom, send a HeroeDetailPage the ID of heroe and location this page */
  getDetails(heroe) {
    //console.log(heroe);
    this.navCtrl.push('HeroeDetailPage', { heroe: heroe });
  }
}

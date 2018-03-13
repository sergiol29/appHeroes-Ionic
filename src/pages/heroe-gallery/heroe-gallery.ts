import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeroeGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroe-gallery',
  templateUrl: 'heroe-gallery.html',
})
export class HeroeGalleryPage {
  heroes: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HeroeGalleryPage');

    /* get ID heroe like params of function */
    this.heroes = this.navParams.get('heroe');
  }

}

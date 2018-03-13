import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeroeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroe-detail',
  templateUrl: 'heroe-detail.html',
})
export class HeroeDetailPage {
  heroe: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    //console.log('ionViewDidLoad HeroeDetailPage');
    //console.log(this.navParams.get('heroe'));
    
    /* get ID heroe like params of function */
    this.heroe = this.navParams.get('heroe');
  }

  /* When tap in buttom, send a HeroeGalleryPage the object of heroe and location this page */
  getGallery(heroe: any) {
    this.navCtrl.push('HeroeGalleryPage', { heroe: heroe });
  }

  /* When tap in buttom, send a HeroeAparencePage the ID of heroe and location this page */
  getAppearance(heroe: number) {
    this.navCtrl.push('HeroeAparenceListPage', { heroe: heroe });
  }

}

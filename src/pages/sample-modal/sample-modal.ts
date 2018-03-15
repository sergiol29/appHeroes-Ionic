import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Import for close modal page */
import { ViewController } from 'ionic-angular';

/* Import for form */
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/* Import provider */
import { HeroesProvider } from '../../providers/heroes/heroes';
/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {
  
  idHeroe: number;
  form: FormGroup;
  body: any;

  selectOptions = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private viewCtrl: ViewController, private fb: FormBuilder, private heroesProv: HeroesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
    this.idHeroe = this.navParams.get('idHeroe');

    /* Create form */
    this.form = this.fb.group({
      year: [2001, Validators.required],
      appearance: ['', Validators.required],
    });
  }

  /* Close modal page */
  closeModal(){
    this.viewCtrl.dismiss();
  }

  /* Submit of form */
  onSubmit(idHeroe: number){
    this.body = this.form.value;

    /* If form is valid */
    if(this.form.valid) {
      /* set Data of API with funcion getAppearance in Providers heroes */
      this.heroesProv.setAppearance(this.idHeroe, this.body).subscribe(
        (data) => {
          this.closeModal();
        });
    }
  }
}

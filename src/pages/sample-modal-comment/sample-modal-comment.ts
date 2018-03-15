import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Import for close modal page */
import { ViewController } from 'ionic-angular';

/* Import for form */
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/* Import provider */
import { HeroesProvider } from '../../providers/heroes/heroes';

/**
 * Generated class for the SampleModalCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-modal-comment',
  templateUrl: 'sample-modal-comment.html',
})
export class SampleModalCommentPage {
  idHeroe: number;
  form: FormGroup;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private viewCtrl: ViewController, private fb: FormBuilder, private heroesProv: HeroesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalCommentPage');
    this.idHeroe = this.navParams.get('idHeroe');

    this.form = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(128), Validators.minLength(10)]]
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
      this.heroesProv.setComment(this.idHeroe, this.body).subscribe(
        (data) => {
          this.closeModal();
        });
    }
  }

}

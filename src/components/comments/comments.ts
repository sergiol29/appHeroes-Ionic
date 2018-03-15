import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';

/* Open modal page */
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the CommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  comments: any;
  idHeroe: number;

  @Input()
  id: number;

  constructor(public navParams: NavParams, private heroesProv: HeroesProvider, private modalCtrl: ModalController) {
    console.log('Hello CommentsComponent Component');
  }

  ngOnInit(){
    /* get ID heroe like params of input type */
    this.idHeroe = this.id;
    this.getCommentProvider();
  }

  getCommentProvider() {
    /* get Data of API */
    this.heroesProv.getComment(this.idHeroe).subscribe(
      (data) => {
        this.comments = data;
        //console.log(data);
      });
  }

  /* Open Modal Page */
  openModal(idHeroe: number) {
    let myModal = this.modalCtrl.create('SampleModalCommentPage', {idHeroe: idHeroe} );

    /* When close modal refresh data */
    myModal.onDidDismiss(data => {
      this.getCommentProvider();
    });

    myModal.present();
  }

}

import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HeroesProvider } from '../../providers/heroes/heroes';

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

  constructor(public navParams: NavParams, private heroesProv: HeroesProvider) {
    console.log('Hello CommentsComponent Component');
  }

  ngOnInit(){
    /* get ID heroe like params of input type */
    this.idHeroe = this.id;

    /* get Data of API */
    this.heroesProv.getComment(this.idHeroe).subscribe(
      (data) => {
        this.comments = data;
        console.log(data);
      });
  }

}

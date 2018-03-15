import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../config';

/*
  Generated class for the HeroesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HeroesProvider Provider');
  }

  /* get all heroes in API */
  getAll() {
    const url = `${CONFIG.API_URL}/heros`;
    return this.http.get(url);
  }

  /* get comment of heroe in API */
  getComment(idHeroe: number) {
    const url = `${CONFIG.API_URL}/heros/${idHeroe}/comments`;
    return this.http.get(url);
  }

  /* set comment of heroe in API */
  setComment(idHeroe: number, data: any) {
    const url = `${CONFIG.API_URL}/heros/${idHeroe}/comments`;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(url, data, httpOptions);
  }

  /* get appearance of heroe in API */
  getAppearance(idHeroe: number) {
    const url = `${CONFIG.API_URL}/heros/${idHeroe}/appearances`;
    return this.http.get(url);
  }

  /* set appearance of heroe in API */
  setAppearance(idHeroe: number, data: any) {
    const url = `${CONFIG.API_URL}/heros/${idHeroe}/appearances`;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(url, data, httpOptions);
  }

  /* get appearance of heroe in API */
  getFights(idHeroe: number) {
    const url = `${CONFIG.API_URL}/heros/${idHeroe}/fights`;
    return this.http.get(url);
  }

}

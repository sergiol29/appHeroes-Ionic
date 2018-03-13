import { Component, Input } from '@angular/core';

/**
 * Generated class for the CompanyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-company',
  templateUrl: 'company.html'
})
export class CompanyComponent {

  @Input()
  company: string;

  constructor() {
    console.log('Hello CompanyComponent Component');
  }

}

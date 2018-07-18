import { Component } from '@angular/core';

/**
 * Generated class for the Period4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'period4',
  templateUrl: 'period4.html'
})
export class Period4Component {

  text: string;

  constructor() {
    console.log('Hello Period4Component Component');
    this.text = 'Hello World';
  }

}

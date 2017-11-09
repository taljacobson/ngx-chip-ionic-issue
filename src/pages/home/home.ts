import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor(public navCtrl: NavController) {

  }

}

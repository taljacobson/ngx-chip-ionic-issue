
import { HomePage } from './home';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TagInputModule
  ],
  exports: [
    HomePage
  ]
})
export class AccountPageModule { }

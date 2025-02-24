import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailanimesPageRoutingModule } from './detailanimes-routing.module';

import { DetailanimesPage, } from './detailanimes.page';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailanimesPageRoutingModule
  ],
  declarations: [DetailanimesPage, SafeUrlPipe]
})
export class DetailanimesPageModule {}

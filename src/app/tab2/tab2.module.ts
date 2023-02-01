import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Tab2RoutingModule } from './tab2-routing.module';
import {Tab2PageComponent} from './tab2-page.component'

import {PhotoService} from '../services/photo.service';

@NgModule({
  declarations: [Tab2PageComponent],
  imports: [
    CommonModule,
    IonicModule,
    Tab2RoutingModule
  ],
  providers: [PhotoService]
})
export class Tab2Module { }

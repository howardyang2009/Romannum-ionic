import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab2RoutingModule } from './tab2-routing.module';
import {Tab2PageComponent} from './tab2-page.component'

@NgModule({
  declarations: [Tab2PageComponent],
  imports: [
    CommonModule,
    Tab2RoutingModule
  ]
})
export class Tab2Module { }

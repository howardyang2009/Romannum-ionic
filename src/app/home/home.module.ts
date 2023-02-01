import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from './home-routing.module';
import { ChildPageComponent } from './child-page.component';

import { RomannumCalc1Service } from '../services/romannum.calc.1.service';
import { RomannumCalc2Service } from '../services/romannum.calc.2.service';
import { RomannumCalc3Service } from '../services/romannum.calc.3.service';
import { RomannumCalcExService } from '../services/romannum.calc.ex.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ChildPageComponent],
  providers: [RomannumCalc1Service, RomannumCalc2Service, RomannumCalc3Service, RomannumCalcExService]
})
export class HomePageModule { }

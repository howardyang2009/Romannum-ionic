import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthComponent} from './auth.component';
import { AuthRoutingModule } from './auth-routing.module'


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module'
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    IonicModule,
    HighlightModule,
    AuthRoutingModule
  ],
  providers: [],
})
export class AuthModule { }

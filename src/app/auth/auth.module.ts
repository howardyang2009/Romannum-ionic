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
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
})
export class AuthModule { }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { ChannelsService } from '../services/channels.service';

@Component({
  selector: 'app-child-page',
  template: `
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Child Page
    </ion-title>
  </ion-toolbar>
</ion-header>
<!-- <ion-content [fullscreen]="false"> -->
    <ion-item>
    <!-- <p>child-page works!</p> -->
      <ion-label>{{message}}</ion-label>
    </ion-item>
<!-- </ion-content> -->
  `,
  styles: [
  ]
})
export class ChildPageComponent implements OnInit, OnDestroy {

  private notifier = new Subject<void>();

  message: string = '';

  constructor(private channel: ChannelsService) { }

  ngOnInit() {
    this.channel.romannumCalcResult$
      .pipe(takeUntil(this.notifier))
      .subscribe((m: string) => this.message = m);
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

}

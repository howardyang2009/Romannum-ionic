import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { ChannelsService } from '../services/channels.service';

export interface Sample {
  num1: string,
  num2: string
}

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
      <p>{{calculator}}</p>
      <ion-button id = 'sample-button' type="button" (click)="inputSample()">Input Sample Roman Number</ion-button>
      <ion-label id = 'message'>{{message}}</ion-label>
    </ion-item>
<!-- </ion-content> -->
  `,
  styles: [
  ]
})
export class ChildPageComponent implements OnInit, OnDestroy {
  @Input() calculator:string = '';
  @Output() sampleEvent = new EventEmitter<Sample>();

  private notifier = new Subject<void>();

  message: string = '';

  constructor(private channel: ChannelsService) { }

  ngOnInit() {
    this.channel.romannumCalcMessage$
      .pipe(takeUntil(this.notifier))
      .subscribe((m: string) => this.message = m);
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  inputSample() {
    this.sampleEvent.emit({num1: 'V', num2: 'IV'});
  }
}

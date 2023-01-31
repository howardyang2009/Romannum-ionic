import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private romannumcalcmessage$ = new BehaviorSubject<string>('');
  romannumCalcMessage$ = this.romannumcalcmessage$.asObservable();

  constructor() { }
  
  setRomannumCalcMessage(message:string) {
    this.romannumcalcmessage$.next(message);
  }

}

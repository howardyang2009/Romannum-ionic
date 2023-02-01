import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // channel service should be singualton in app scope
})
export class ChannelsService {

  private romannumcalcmessage$ = new BehaviorSubject<string>('');
  romannumCalcMessage$ = this.romannumcalcmessage$.asObservable();

  constructor() { }
  
  setRomannumCalcMessage(message:string) {
    this.romannumcalcmessage$.next(message);
  }

}

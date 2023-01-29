import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private _romannumCalcResult$ = new BehaviorSubject<string>('');
  romannumCalcResult$ = this._romannumCalcResult$.asObservable();

  constructor() { }
  
  setRomannumCalcResult(message:string) {
    this._romannumCalcResult$.next(message);
  }

}

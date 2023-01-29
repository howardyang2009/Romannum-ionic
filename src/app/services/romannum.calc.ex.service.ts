import { Injectable } from '@angular/core';
import {IRomannumCalculator} from '../service-interfaces/i.romannum.calculator'
import {RomannumCalc1Service} from './romannum.calc.1.service'

@Injectable({
  providedIn: 'root'
})
export class RomannumCalcExService extends RomannumCalc1Service implements IRomannumCalculator {

  constructor() { 
    super ()
    this.numArr = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
    this.letterArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'v', 'x', 'l', 'c', 'd', 'm'];
    this.init();
  }
}

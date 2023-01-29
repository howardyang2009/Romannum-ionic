import { Injectable } from '@angular/core';
import {IRomannumCalculator} from '../service-interfaces/i.romannum.calculator'

@Injectable({
  providedIn: 'root'
})
export class RomannumCalc2Service implements IRomannumCalculator {

  private lookup: Record<string, number> = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  private numeralCodes: string[][] = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],   // Ones
                              ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                              ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],	// Hundreds
                              ["", "M", "MM", "MMM"]];        // Thousands
  private min: number = 1;
  private max: number = 3999;

  constructor() { }

  letters(): string {
      return 'IVXLCDM';
  }

  str2num(romanStr: string): number {
      let arabic = 0, temp: string, roman = romanStr.trim(), i = roman.length;
      while (i--) {
          if (roman[i + 1] &&
              this.char2num(roman[i]) < this.char2num(roman[i + 1])) {
              arabic -= this.char2num(roman[i]);
          } else {
              arabic += this.char2num(roman[i]);
          }
      }

      temp = this.num2str(arabic);
      if (temp !== roman) {
          throw new Error('non-standard Roman Number');
      }

      return arabic;
  }

  num2str(num: number): string {
      let numeral = '', digits: string | any[];

      if (num < this.min || num > this.max) {
          throw new Error('number exceed scope [' + this.min + ',' + this.max + ']');
      }

      digits = num.toString().split('')

      for (let i = 0; i < digits.length; i++) {
          numeral += this.numeralCodes[digits.length - 1 - i][parseInt(digits[i])];
      }
      return numeral;
  }

  private char2num(c: string): number {
      let errorInfo: string;
      if (this.lookup[c] === undefined) {
          errorInfo = 'valid letter just could be ';
          for (let key in this.lookup) {
              if (this.lookup.hasOwnProperty(key)) {
                  errorInfo += key;
              }
          }
          throw new Error(errorInfo);
      }
      return this.lookup[c];
  }

}

import { Injectable } from '@angular/core';
import { IRomannumCalculator } from '../service-interfaces/i.romannum.calculator'

@Injectable()
export class RomannumCalc1Service implements IRomannumCalculator {

    protected numArr: number[] = [1, 5, 10, 50, 100, 500, 1000];
    protected letterArr: string[] = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    protected min: number = 0;
    protected max: number = 0;

    constructor() {
        this.init();
    }

    letters(): string {
        let r = '';
        for (let i = 0; i < this.letterArr.length; i++) {
            r += this.letterArr[i];
        }
        return r;
    }

    str2num(inputStr: string): number {
        let num: number, i: number, currentChar: string, nextChar: string, currentCharIndex: number, nextCharIndex: number, str: string, temp: string;

        str = inputStr.trim();
        if (str.length <= 0) {
            throw new Error('empty is invalid');
        }

        num = 0;
        i = 0;
        nextCharIndex = -1;
        while (i < str.length) {
            currentChar = str.charAt(i);
            currentCharIndex = this.getCharIndex(currentChar);
            if (i < str.length - 1) {
                nextChar = str.charAt(i + 1);
                nextCharIndex = this.getCharIndex(nextChar);
            }

            if (currentCharIndex < nextCharIndex) {
                num -= this.char2num(currentChar);
            } else {
                num += this.char2num(currentChar);
            }

            i++;
            nextCharIndex = -1;
        }

        temp = this.num2str(num);
        if (temp !== str) {
            throw new Error('non-standard Roman Number');
        }

        return num;
    }

    num2str(num: number): string {
        let str: string = '', times: number;

        if (num < this.min || num > this.max) {
            throw new Error('number exceed scope [' + this.min + ',' + this.max + ']');
        }
        for (var i = this.numArr.length - 1; i >= 0; i--) {
            times = Math.floor(num / this.numArr[i]);
            if (times === 4) {
                // for IV XL CD 4 40 400
                str += this.letterArr[i] + this.letterArr[i + 1];
            } else {
                for (var j = 0; j < times; j++) {
                    str += this.letterArr[i];
                }
            }
            num -= times * this.numArr[i];
            //for IX VL CM 9 90 900
            if (!this.isOdd(i) && i !== 0) {
                if (num >= Math.floor(this.numArr[i] * 0.9)) {
                    str += this.letterArr[i - 2] + this.letterArr[i];
                    num -= Math.floor(this.numArr[i] * 0.9);
                }
            }
        }
        return str;
    }

    protected init(): void {
        this.min = 1;
        const lastIndex = this.numArr.length - 1;
        this.max = this.numArr[lastIndex] * 4 - 1; //3999
    }

    protected getCharIndex(c: string): number {
        const index = this.letterArr.indexOf(c);
        let errorInfo: string;
        if (index < 0) {
            errorInfo = 'valid letter just could be ' + this.letters();
            throw new Error(errorInfo);
        }
        return index;
    }

    protected char2num(c: string): number {
        const index = this.getCharIndex(c);
        return this.numArr[index];
    }

    protected isOdd(num: number): boolean {
        return num % 2 == 1;
    }
}

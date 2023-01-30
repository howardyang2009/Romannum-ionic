import { Injectable } from '@angular/core';
import { IRomannumCalculator } from '../service-interfaces/i.romannum.calculator'
import { RomannumCalc1Service } from './romannum.calc.1.service'

@Injectable({
	providedIn: 'root'
})
export class RomannumCalc3Service extends RomannumCalc1Service implements IRomannumCalculator {

	override str2num(inputStr: string): number {
		let num = 0, index = 0, sameLetter = 0,
			currentChar: string, nextChar: string, currentCharPosition: number,
			nextCharPosition: number, temp: string | number, str: string, errorInfo: string;

		str = inputStr.trim();

		if (str.length <= 0) {
			throw new Error('empty is invalid');
		}

		while (index < str.length) {
			currentChar = str.charAt(index);
			currentCharPosition = this.getCharIndex(currentChar);
			if (index === str.length - 1) {
				num += this.char2num(currentChar) * (sameLetter + 1);
			} else {
				nextChar = str.charAt(index + 1);
				nextCharPosition = this.getCharIndex(nextChar);
				if (nextCharPosition < currentCharPosition) {
					num += this.char2num(currentChar) * (sameLetter + 1);
					sameLetter = 0
				} else if (nextCharPosition > currentCharPosition) {
					//for IIV
					if (sameLetter >= 1) {
						throw new Error('the left subtractive number should not more than one time, for example: IIV is invalid');
					}
					//small left just could be I X C
					if (this.isOdd(this.getCharIndex(currentChar))) {
						errorInfo = 'the left subtractive number just could be '
						for (var i = 0; i < this.letterArr.length; i += 2) {
							errorInfo += this.letterArr[i];
						}
						errorInfo += ', for example: VX is invalid';
						throw new Error(errorInfo);
					}
					//99 is not IC, is XCIX
					if (nextCharPosition > (currentCharPosition + 2)) {
						throw new Error('the subtractive number just could be IX or IV style, for example: 99 is not IC, is XCIX');
					}
					//for big roman number left
					if (index + 2 < str.length) {
						temp = this.getCharIndex(str.charAt(index + 2));
						if (temp >= nextCharPosition)
							throw new Error('big roman number should be left, for example: CMM is invalid');
					}
					if (index + 3 < str.length) {
						temp = this.getCharIndex(str.charAt(index + 3));
						if (temp >= nextCharPosition)
							throw new Error('big roman number should be left, for example: CMM is invalid');
					}

					num += this.char2num(nextChar) - this.char2num(currentChar);
					index++;
					sameLetter = 0
				} else if (nextCharPosition === currentCharPosition) {
					// V L D can not have more than one
					if (this.isOdd(this.getCharIndex(currentChar))) {
						errorInfo = 'should not repeat ';
						for (var i = 1; i < this.letterArr.length; i += 2) {
							errorInfo += this.letterArr[i];
						}
						errorInfo += ' letter';
						throw new Error(errorInfo);
					}
					//for VIIII
					if (sameLetter >= 2) {
						errorInfo = 'should not repeat ';
						for (var i = 0; i < this.letterArr.length; i += 2) {
							errorInfo += this.letterArr[i];
						}
						errorInfo += ' more than 3 times';
						throw new Error(errorInfo);
					}
					sameLetter++;
				}
			}
			index++;
		}

		temp = this.num2str(num);
		if (temp !== str) {
			throw new Error('non-standard Roman Number');
		}

		return num;
	}
}

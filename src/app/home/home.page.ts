import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';

import { IRomannumCalculator } from '../service-interfaces/i.romannum.calculator';
import { RomannumCalc1Service } from '../services/romannum.calc.1.service';
import { RomannumCalc2Service } from '../services/romannum.calc.2.service';
import { RomannumCalc3Service } from '../services/romannum.calc.3.service';
import { RomannumCalcExService } from '../services/romannum.calc.ex.service';
import { ChannelsService } from '../services/channels.service';

import { Sample } from './child-page.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Roman Number Calculator';

  error1: string = 'error1';
  error2: string = 'error2';
  error3: string = 'error3';

  private calculator: IRomannumCalculator = this.romannumCalc1;
  help1: string = 'helper1';
  help2: string = 'helper2';

  romannumForm = new FormGroup({
    num1: new FormControl('', [this.romannumValidator(1)]),
    num2: new FormControl('', [this.romannumValidator(2)]),
    sum: new FormControl('', [this.romannumValidator(3)]),
    calc: new FormControl('RomanNumCalc1')
  });

  constructor(
    private romannumCalc1: RomannumCalc1Service,
    private romannumCalc2: RomannumCalc2Service,
    private romannumCalc3: RomannumCalc3Service,
    private romannumCalcEx: RomannumCalcExService,
    private channel: ChannelsService
  ) {
    this.init();
  }

  calc() {
    console.warn(this.romannumForm.value);
    const num1: number = this.calculator.str2num(this.romannumForm.value.num1!);
    const num2: number = this.calculator.str2num(this.romannumForm.value.num2!);
    const sum: number = num1 + num2;

    let romannum: string;
    try {
      romannum = this.calculator.num2str(sum);
    } catch (err: any) {
      romannum = `${sum} is not a valid Roman number.`;
      this.error3 = err.message;
    }

    this.romannumForm.patchValue({ sum: romannum });

    const message = `${this.romannumForm.value.calc} : ${this.romannumForm.value.num1} + ${this.romannumForm.value.num2} = ${romannum} | ${num1} + ${num2} = ${sum}`;
    this.channel.setRomannumCalcMessage(message);
  }

  calculatorChange(event: any) {
    //console.log(event);
    this.init()
  }

  romannumInputChange(event: any) {
    // console.log(event);
    this.romannumForm.patchValue({ sum: '' })
  }

  romannumValidator(id: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      try {
        const temp = control.value;
        if (!temp)
          return null;

        this.calculator.str2num(temp);
      } catch (err: any) {
        if (id == 1)
          this.error1 = err.message;
        else if (id == 2)
          this.error2 = err.message;

        return { invalidromannum: { value: control.value } };
      }
      return null;
    }
  }

  inputSample(sample: Sample) {
    this.romannumForm.patchValue({
      num1: sample.num1,
      num2: sample.num2
    });
  }

  private init() {
    this.romannumForm.patchValue({
      num1: '',
      num2: '',
      sum: ''
    });

    if (this.romannumForm.value.calc === 'RomanNumCalc1')
      this.calculator = this.romannumCalc1;
    else if (this.romannumForm.value.calc === 'RomanNumCalc2')
      this.calculator = this.romannumCalc2;
    else if (this.romannumForm.value.calc === 'RomanNumCalc3')
      this.calculator = this.romannumCalc3;
    else
      this.calculator = this.romannumCalcEx

    this.help1 = this.calculator.letters();
    this.help2 = this.calculator.letters();

    this.channel.setRomannumCalcMessage('');
  }
}

import { TestBed } from '@angular/core/testing';

import { RomannumCalc2Service } from './romannum.calc.2.service';

describe('RomannumCalc2Service', () => {
  let service: RomannumCalc2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomannumCalc2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('str2num function', function () {
    // expect(service.str2num('')).toEqual(0);
    expect(service.str2num('I')).toEqual(1);
    expect(service.str2num('II')).toEqual(2);
    expect(service.str2num('III')).toEqual(3);
    expect(service.str2num('IV')).toEqual(4);
    expect(service.str2num('V')).toEqual(5);
    expect(service.str2num('VI')).toEqual(6);
    expect(service.str2num('VII')).toEqual(7);
    expect(service.str2num('VIII')).toEqual(8);
    expect(service.str2num('IX')).toEqual(9);
    expect(service.str2num('LXXIV')).toEqual(74);
    expect(service.str2num('XCIX')).toEqual(99);
    expect(service.str2num('DII')).toEqual(502);
    expect(service.str2num('DXV')).toEqual(515);
    expect(service.str2num('DLXXVI')).toEqual(576);
    expect(service.str2num('CM')).toEqual(900);
    expect(service.str2num('MCLI')).toEqual(1151);
    expect(service.str2num('MDCLXVI')).toEqual(1666);
    expect(service.str2num('MMMIII')).toEqual(3003);
    expect(service.str2num('MMMCMXCIX')).toEqual(3999);
    // expect(service.str2num('mmmcmxcMxCMXCIX')).toEqual(3999999);
  });

  it('str2num function invalid', function () {
    expect(function () { service.str2num('') }).toThrow();
    expect(function () { service.str2num('IIV') }).toThrow();
    expect(function () { service.str2num('VX') }).toThrow();
    expect(function () { service.str2num('VB') }).toThrow();
    expect(function () { service.str2num('IL') }).toThrow();
    expect(function () { service.str2num('CMM') }).toThrow();
    expect(function () { service.str2num('VV') }).toThrow();
    expect(function () { service.str2num('VIIII') }).toThrow();
    expect(function () { service.str2num('IVI') }).toThrow();
  });

  it('num2str function', function () {
    // expect(service.num2str(0)).toEqual('');
    expect(service.num2str(1)).toEqual('I');
    expect(service.num2str(2)).toEqual('II');
    expect(service.num2str(3)).toEqual('III');
    expect(service.num2str(4)).toEqual('IV');
    expect(service.num2str(5)).toEqual('V');
    expect(service.num2str(6)).toEqual('VI');
    expect(service.num2str(7)).toEqual('VII');
    expect(service.num2str(8)).toEqual('VIII');
    expect(service.num2str(9)).toEqual('IX');
    expect(service.num2str(74)).toEqual('LXXIV');
    expect(service.num2str(99)).toEqual('XCIX');
    expect(service.num2str(502)).toEqual('DII');
    expect(service.num2str(515)).toEqual('DXV');
    expect(service.num2str(576)).toEqual('DLXXVI');
    expect(service.num2str(900)).toEqual('CM');
    expect(service.num2str(1151)).toEqual('MCLI');
    expect(service.num2str(1666)).toEqual('MDCLXVI');
    expect(service.num2str(3003)).toEqual('MMMIII');
    expect(service.num2str(3999)).toEqual('MMMCMXCIX');
    // expect(service.num2str(3999999)).toEqual('mmmcmxcMxCMXCIX');
  });

  it('num2str function invalid', function () {
    expect(function () { service.num2str(0) }).toThrow();
    expect(function () { service.num2str(4000) }).toThrow();
  });
});

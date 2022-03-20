// ! node modules import syntax

const {calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci } = require('./math');

// ! es6 module syntax

// import {calculateTotal,celsiusToFahrenheit,fahrenheitToCelsius,fibonacci } from './math';

describe("::fahrenheitToCelsius",()=>{
    // define tests
    it('should exist', ()=>{
          // test code aşağıya beklentimizi yazıyoruz
      expect(fahrenheitToCelsius).toBeDefined();
    })
    it('should convert 32F to 0C', ()=>{
        expert(fahrenheitToCelsius(32).tobe(0))
    })
})
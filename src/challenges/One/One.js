import React, { Component } from 'react';

import { FUELREQ } from '../../constants/One';

export default class One extends Component {
  constructor() {
    super();
    this.state = {
      fuelReq: '[ERROR]',
    };
  }

  fuelMath = value => {
    return Math.floor(value / 3) - 2;
  };

  calcFuelReq = () => {
    let perModuleFuel = 0;

    for (const [index, value] of FUELREQ.entries()) {
      let result = this.fuelMath(value);
      let fuelArray = [];
      fuelArray.push(result);
      do {
        result = this.fuelMath(result);
        if (result > 0) {
          fuelArray.push(result);
        }
      } while (result > 0);
      for (const [index, value] of fuelArray.entries()) {
        perModuleFuel += value;
      }
    }

    return this.setState({ fuelReq: perModuleFuel });
  };

  render() {
    return (
      <div>
        <h1>--- Day 1: The Tyranny of the Rocket Equation ---</h1>
        <div>{this.state.fuelReq} fuels required.</div>
        <button onClick={() => this.calcFuelReq()}>
          Calculate Fuel Requirements
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react'

import './App.css';
import Props from '../Components/Props/Props';
import utils, { CalculateProduct, CalculateSum} from '../Components/utils/utils'

export default class  extends Component {
  render() {
    const total = CalculateSum(2, utils.total);
    const product = CalculateProduct(2,2);
    return (
      <div className="App">
        <header className="App-header">
          
          <Props
          name={'Jamirah'}
          skills={'Engineer'}
          user={ { name: "Jamirah", skills: "Engineer"}}
          CalculateProduct={this.CalculateProduct}
          />
          <p>
            Hello Uganda
          </p>
        
        </header>
      </div>
    );
  }
}


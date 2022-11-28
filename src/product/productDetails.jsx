import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import laptop from "../img/speakers.jpeg";

export default class productDetails extends Component {
  render() {
    return (
      <div>
        <h1>productDetails</h1>
        <p>Hi everyone here this is your favourite car on the market</p>
        <div className="row">
          <div className="col-md-4">
        
          <img src={laptop} alt="product" style={{width: "100%"}} />
          </div>
        </div>
        <Link to="ShoppingCart"></Link>
      </div>
      
    )
  }
}

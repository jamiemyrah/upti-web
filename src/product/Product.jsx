import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../ecommerce/MainLayout";

export default class Product extends Component {
  render() {
    return (
      <div className="card ">
        <img
          src={this.props.product.image}
          alt=""
          style={{ height: "200px", width: "250px" }}
        />
        <div className="card-body" style={{ justifyContent: "center" }}>
          <h5 className="card-title centerd">{this.props.product.name}</h5>
          {this.props.children}
          <h6 className="card-title">{this.props.product.description}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            className="btn btn-primary"
            to={`Product-details/${this.props.product.id}/${this.props.product.name}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "150px",
            }}
          >
            Go somewhere
          </Link>
        </div>
      </div>
    );
  }
}

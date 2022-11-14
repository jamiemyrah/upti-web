import React, { Component } from 'react';
import { Link} from "react-router-dom";

export default class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="card">
                < img src={this.props.product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    {this.props.children}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary" to={'/MainLayout'}>Go somewhere</Link>
                </div>
            </div >
        )
    }
}

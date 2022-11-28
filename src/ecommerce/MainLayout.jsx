import React, { Component } from 'react';
import MasterDetail from './MasterDetail';
import './styles.css';
import Searchbar from './SearchBar';
import Product from '../product/Product';
import ChildrenTest from './ChildrenTest';
import { products } from '../product/ProductsData';




export default class MainLayout extends Component {
    

    state = {
        activeCategory: 'Electronic',
        searchTerm: null,
        productsToDisplay: products.filter((product) => product.category === 'Electronic'),
        
    };

    refreshProducts = (activeTab, name) => {
        let productsToDisplay = [];
        if (name && name.trim()) {
            productsToDisplay = products.filter((product) => (product.category === activeTab && product.name.toLowerCase().includes(name)));
        } else {
            productsToDisplay = products.filter((product) => product.category === activeTab);
        }
        this.setState({ productsToDisplay, activeCategory: activeTab, searchTerm: name });
    }

    handleFilter = (name) => {
        this.refreshProducts(this.state.activeCategory, name);
    }

    handleActiveTabChange = (activeTab) => {
        this.refreshProducts(activeTab, this.state.searchTerm);
    }

    render() {
        return (
            <React.Fragment>
            <div className='container-fluid content'>
                <div className="row ">
                    <div className="col-md-3">
                        <MasterDetail onActiveCategoryChange={(activeTab) => this.handleActiveTabChange(activeTab)} />
                    </div>
                    <div className="col-md-9">
                        <Searchbar onFilter={this.handleFilter} />
                        <div className='row'>
                            {
                               this.state.productsToDisplay.map((product, index) => <div key={index} className="col-md-4 product"> 
                               <Product product={product} children={ChildrenTest}/>
                                {/* <ChildrenTest /> */}
                                {/* </Product> */}
                                </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
    
        </React.Fragment>
        );
        
    }
}

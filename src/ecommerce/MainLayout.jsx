import React, { Component } from 'react';
import Navbar from './Navbar';
// import Hooks from './Hooks';
import MasterDetail from './MasterDetail';
import './styles.css';
import Searchbar from './SearchBar';
import Product from '../product/Product';
import electroicImage from '../img/product.png';
import ChildrenTest from './ChildrenTest';

export default class MainLayout extends Component {
       
    products = [
        {
            id: 1,
            name: 'Sumsung Led Tv set',
            category: 'Electronic',
            description: 'Elegant and HD colr picture with a green screen',
            image: electroicImage
        },
        {
            id: 2,
            name: 'Core i5 Hp Laptop',
            category: 'Electronic',
            description: 'Elegant and HD colr picture with a green screen',
            image: electroicImage
        },
        {
            id: 3,
            name: 'White sneakers',
            category: 'Foot Ware',
            description: 'Nice shoe with rubber sole',
            image: electroicImage
        },
        {
            id: 4,
            name: 'Speakers',
            category: 'Entertainment',
            description: 'Good Quality HD Sound',
            image: electroicImage
        },
        {
            id: 5,
            name: 'Robbot',
            category: 'Entertainment',
            description: 'Good Quality HD Sound',
            image: electroicImage
        },
        {
            id: 6,
            name: 'Princess Diana Necklace',
            category: 'Jewellry',
            description: 'Good Quality Royal Necklace',
            image: electroicImage
        },

        {
            id: 7,
            name: 'Royal Bungles',
            category: 'Jewellry',
            description: 'Good Quality Bungles',
            image: electroicImage
        },
        {
            id: 8,
            name: 'Canvas Shoes',
            category: 'Foot Ware',
            description: 'Super white shoes',
            image: electroicImage
        },
        {
            id: 9,
            name: 'Desktop Computer',
            category: 'Electronic',
            description: 'Super fast computers',
            image: electroicImage
        },
        {
            id: 10,
            name: 'Micro phoones',
            category: 'Entertainment',
            description: 'Good sound',
            image: electroicImage
        }
    ];

    state = {
        activeCategory: 'Electronic',
        searchTerm: null,
        productsToDisplay: this.products.filter((product) => product.category === 'Electronic')
    };

    refreshProducts = (activeTab, name) => {
        let productsToDisplay = [];
        if (name && name.trim()) {
            productsToDisplay = this.products.filter((product) => (product.category === activeTab && product.name.toLowerCase().includes(name)));
        } else {
            productsToDisplay = this.products.filter((product) => product.category === activeTab);
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
        return <div>
            {/* <Hooks/> */}
            {/* <Navbar /> */}
            
            <div className='container-fluid content'>
                <div className="row ">
                    <div className="col-md-3">
                        <MasterDetail onActiveCategoryChange={(activeTab) => this.handleActiveTabChange(activeTab)} />
                    </div>
                    <div className="col-md-9">
                        <Searchbar onFilter={this.handleFilter} />
                        <div className='row'>
                        
                            {
                               this.state.productsToDisplay.map((product, index) => <div key={index} className="col-md-4 product"> <Product product={product}>
                                  <ChildrenTest/>
                                </Product>
                               
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

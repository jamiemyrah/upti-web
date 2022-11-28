import React, { Component } from 'react';
import MasterDetail from './MasterDetail';
import './styles.css';
import Searchbar from './SearchBar';
import Product from '../product/Product';
import ChildrenTest from './ChildrenTest'
import sumsagTvsetImage from '../img/sam.jpeg';
import laptop from '../img/loop.jpeg';
import canvas from '../img/canvas.jpeg';
import bungle from '../img/bungle.jpeg'
import robot from "../img/rob.jpeg";
import necklace from '../img/necklace.jpeg';
import snickers from '../img/snickers.jpeg';
import desktop from '../img/desktop.jpeg';
import microphone from '../img/microphone.jpeg';
import speakers from '../img/speakers.jpeg';



export default class MainLayout extends Component {
    products = [
        {
            id: 1,
            name: 'Sumsung Led Tv set',
            category: 'Electronic',
            description: 'Elegant and HD color picture',
            image: sumsagTvsetImage,
        },
        {
            id: 2,
            name: 'Core i5 Hp Laptop',
            category: 'Electronic',
            description: 'Flexible and affordable',
            image: laptop,
        },
        {
            id: 3,
            name: 'White sneakers',
            category: 'Foot Ware',
            description: 'Nice shoe with rubber sole',
            image: snickers,
        },
        {
            id: 4,
            name: 'Speakers',
            category: 'Entertainment',
            description: 'Good Quality HD Sound',
            image: speakers,
        },
        {
            id: 5,
            name: 'Robbot',
            category: 'Entertainment',
            description: 'Good Quality HD Sound',
            image: robot,
        },
        {
            id: 6,
            name: 'Princess Diana Necklace',
            category: 'Jewellry',
            description: 'Good Quality Royal Necklace',
            image: necklace,
        },
    
        {
            id: 7,
            name: 'Royal Bungles',
            category: 'Jewellry',
            description: 'Good Quality Bungles',
            image: bungle,
        },
        {
            id: 8,
            name: 'Canvas Shoes',
            category: 'Foot Ware',
            description: 'Super white shoes',
            image: canvas,
        },
        {
            id: 9,
            name: 'Desktop Computer',
            category: 'Electronic',
            description: 'Super fast computers',
            image: desktop,
        },
        {
            id: 10,
            name: 'Micro phones',
            category: 'Entertainment',
            description: 'Good sound',
            image: microphone,
        }
    ];    

    state = {
        activeCategory: 'Electronic',
        searchTerm: null,
        productsToDisplay: this.products.filter((product) => product.category === 'Electronic'),
        
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

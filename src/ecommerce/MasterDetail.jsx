import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
// import electroicImage from '../img/product.png';


export default class MasterDetail extends Component {
    state = {
        activeItem: 'Electronic',
        categories: [
            {
                name: 'Electronic',
                numberOfItemsInStock: 3,
                image: ''
            },
            {
                name: 'Foot Ware',
                numberOfItemsInStock: 2,
                image: ''
            },
            {
                name: 'Jewellry',
                numberOfItemsInStock: 2,
                image: ''
            },
            {
                name: 'Entertainment',
                numberOfItemsInStock: 3,
                image: ''
            },
            
        ]


    }

    handleChildClick = (id, isActive) => {
        let activeItem = null;
        if (isActive) {
            activeItem = id;
        }
        this.setState({ activeItem });
        this.props.onActiveCategoryChange(activeItem);
    }

    render() {
        return (
            <ol className="list-group">
                {
                    this.state.categories.filter(category => category.numberOfItemsInStock > 0).map((category) => {
                        return <CategoryListItem
                            key={category.name}
                            id={category.name}
                            category={category}
                            numberOfItemsInStock={category.numberOfItemsInStock}
                            onChildClick={this.handleChildClick}
                            activeItem={this.state.activeItem} />
                    })}
            </ol>
        )
    }
}

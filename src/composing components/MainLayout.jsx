import React, { Component } from 'react'
import Navbar from './Navbar'
import MasterDetail from './MasterDetail'
import SearchBar from './SearchBar';
import './styles.css';
import Product from './Product';
import product from './Product';



export default class MainLayout extends Component {
  products = [
    {
    id: 1,
    name: 'sumsung Led Tv set',
    category: 'Electronic',
    description: 'Elegant and HD color picture with a green screen'
    },
    {
      id: 2,
      name: 'Core i5 Hp Laptop',
      category: 'Electronic',
      description: 'Elegant and HD color picture with a green screen'
      },
      {
        id: 3,
        name: 'White sneakers',
        category: 'Foot Ware',
        description: 'Elegant and HD color picture with a green screen'
        },
        {
          id: 4,
          name: 'Speakers',
          category: 'Entertainment',
          description: 'Elegant and HD color picture with a green screen'
          },
          {
            id: 5,
            name: 'Robot',
            category: 'Entertainment',
            description: 'Elegant and HD color picture with a green screen'
            },
            {
              id: 6,
              name: 'princess Diana necklace',
              category: 'Jewellry',
              description: 'Good Quality Royal necklace'
              },
              {
                id: 7,
                name: 'Royal Bungles',
                category: 'Jewellry',
                description: 'Good Quality Bungles'
                },
                {
                  id: 8,
                  name: 'canvas shoe',
                  category: 'Foot Ware',
                  description: 'super white shoes'
                  },
                  {
                    id: 9,
                    name: 'Desktop computer',
                    category: 'Electronic',
                    description: 'super white shoes'
                    },
                    {
                      id: 10,
                      name: 'Microphone',
                      category: 'Foot Ware',
                      description: 'super white shoes'
                      }


                    ];
                    
                    state = {
                    productsToDisplay: this.products.filter((product) => product.category === 'Electronic')
                  };
                  
    
    handleActiveTabChange = (activeTab) => {
      const productsToDisplay = this.products.filter((product)=>product.category === activeTab)
      this.setState({productsToDisplay})

    }
  render() {
    return <div>
      <Navbar/>
      <div className=" container-fluid">
      <div className="row content">
     <div className="col-md-3">
        <MasterDetail onAciveCategoryChange={this.handleActiveTabChange}/>
        </div>
        <div className="col-md-9">
            <SearchBar/>
            <div className="row">
                { this.state.productsToDisplay.map((product, index) => <div className="col-md-4"><Product name={product.name}/></div>)}
                
            </div>
        </div>
      </div>
      </div>
      
      
      </div>
    
  }
}

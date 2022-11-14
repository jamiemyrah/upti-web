import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
// import productDetails from '../product/productDetails';
import MainLayout from '../ecommerce/MainLayout';
import Navbar from '../ecommerce/Navbar';
export default class MainLayoutRouter extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<MainLayout />}></Route>
            <Route path="/productDetails" element={<productDetails/>}/>
        </Routes>
      </div>
    )
  }
}

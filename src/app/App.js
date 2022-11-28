import React, { Component } from 'react'

import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import './App.css';
// import Props from '../Components/Props/Props';
import Navbar from '../ecommerce/Navbar';
import MainLayout from '../ecommerce/MainLayout';
import DashboardHome from "../Dashboard/DashboardHome";
import Login from "../Dashboard/Login";
import ShoppingCart from "../Cart/ShoppingCart";
import MainLayoutRouter from '../product/MainLayoutRouter';
// import productDetails from '../product/productDetails';
import { ChildRoutes } from '../ecommerce/ChildRoutes';


export default class App extends Component {
  render() {
   return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={"MainLayout"}/>} />
      <Route path="/mainLayout" element={<MainLayoutRouter/>} children={ChildRoutes()}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashboardHome/>}/>
      <Route path="/ShoppingCArt" element={<ShoppingCart/>}/>
      <Route path="/MainLayout/Product-details" element={<MainLayout/>}></Route>
    </Routes>
    </BrowserRouter>
   
   );
    
  }
}


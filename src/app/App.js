import React, { Component } from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import './App.css';
import Props from '../Components/Props/Props';
// import utils, { CalculateProduct, CalculateSum} from '../Components/utils/utils'
import MainLayout from '../ecommerce/MainLayout';
import DashboardHome from "../Dashboard/DashboardHome";
import Login from "../Dashboard/Login";
import MainLayoutRouter from '../product/MainLayoutRouter';
import productDetails from '../product/productDetails';


export default class  extends Component {
  render() {
   return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={"MainLayout"}/>} />
      <Route path="/MainLayout" element={<MainLayoutRouter/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/login/main" element={<Login/>}/> */}
      <Route path="/dashboardHome" element={<DashboardHome/>}/>
      <Route path="/product" element={<productDetails/>}/>
    </Routes>
    </BrowserRouter>
   
   );
    
  }
}


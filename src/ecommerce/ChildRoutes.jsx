import React from 'react';
import ProductDetails from '../product/productDetails';
import MainLayout from './MainLayout';
import ShoppingCart from '../Cart/ShoppingCart';
import { Route } from 'react-router-dom';
export const ChildRoutes = () => {
  return (
    <React.Fragment>
       <Route index element={<MainLayout/>}></Route>
      <Route path="product-details" element={<ProductDetails/>}></Route>
      <Route path="Cart" element={<ShoppingCart/>}></Route>
    </React.Fragment>
  )
}

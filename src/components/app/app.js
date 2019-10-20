import React from 'react';
import './app.css';
import { Switch, Route } from "react-router-dom";
import Header from '../header';
import Cart from '../cart';
import {   HomePage,  CartPage } from  '../pages';

const App = () => {
  return (
    <div>
    <Header  numGoods={0} total={0} />
    <Switch>
    <Route
      path="/"
      component={ HomePage }
      exact />
      <Route
        path="/cart"
        component={ CartPage }
         />
    </Switch>
    <Cart />
    </div>
  );
};

export default App;

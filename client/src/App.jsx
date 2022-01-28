import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Products from './pages/Product'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from "react";


const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        
        <Route exact path="/products">
          <ProductList/>
        </Route>
        <Route exact path="/products/:category">
          <ProductList/>
        </Route>
        <Route   path="/product/:id">
          <Products/>
        </Route>
        <Route  path="/">
          <Home/>
        </Route>
        <Route exact path="/Register">
        {user ? <Redirect to="/Register"/> : <Register/>}
        </Route>
        <Route exact path="/login">
        {user ? <Redirect to="/login"/> : <Login/>}
        </Route>
      </Switch>
  </Router>
  
  
  );
};

export default App;
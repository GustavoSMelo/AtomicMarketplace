import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../views/main'
import Login from '../views/login'
import signup from '../views/signup'
import AdminLogin from '../views/AdminLogin'
import SalesmanLogin from '../views/SalesmanLogin'
import SalesmanSignup from '../views/SalesmanSignup'
import UserProfile from '../views/userProfile'
import Search from '../views/search/index'
import ProductDetails from '../views/productDetails'
import Cart from '../views/cart'
import CreateProduct from '../views/createProduct'
import FollowProduct from '../views/FollowProducts'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/product/details' component={ProductDetails} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={signup} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/salesman/login' component={SalesmanLogin} />
        <Route exact path='/salesman/signup' component={SalesmanSignup} />
        <Route exact path='/salesman/create/product' component={CreateProduct} />
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/follow/product' component={FollowProduct} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

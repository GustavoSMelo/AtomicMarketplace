import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../views/main'
import Login from '../views/login'
import signup from '../views/signup'

import AdminLogin from '../views/AdminLogin'
import SalesmanLogin from '../views/SalesmanLogin'
import SalesmanSignup from '../views/SalesmanSignup'
import SalesmanSignupAddress from '../views/SalesmanSignupAddress'
import SalesmanHub from '../views/SalesmanHub'

import UserProfile from '../views/userProfile'
import Search from '../views/search/index'
import BuyHistoric from '../views/BuyHistoric'
import Cart from '../views/cart'
import ConfirmBuying from '../views/confirmBuying'
import EditUser from '../views/EditUser'

import ProductDetails from '../views/productDetails'
import CreateProduct from '../views/createProduct'
import DeleteProduct from '../views/DeleteProduct'
import EditProduct from '../views/EditProducts'
import FollowProduct from '../views/FollowProducts'
import BuyedProductDetail from '../views/BuyedProductDetail'
import FavoritedProducts from '../views/FavoritedProducts'
import EditSalesman from '../views/editSalesman'

import Greetings from '../views/greetings'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/product/details/:id' component={ProductDetails} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={signup} />

        <Route exact path='/search' component={Search} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/confirm/buy/:id' component={ConfirmBuying}/>

        <Route exact path='/salesman/login' component={SalesmanLogin} />
        <Route exact path='/salesman/signup' component={SalesmanSignup} />
        <Route exact path='/salesman/signupaddress' component={SalesmanSignupAddress} />
        <Route exact path='/salesman/create/product' component={CreateProduct} />
        <Route exact path='/salesman/delete/product' component={DeleteProduct} />
        <Route exact path='/salesman/edit/product/:id' component={EditProduct} />
        <Route exact path='/salesman/hub' component={SalesmanHub} />
        <Route exact path='/edit/salesman' component={EditSalesman} />

        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/follow/product' component={FollowProduct} />
        <Route exact path='/buy/product/detail' component={BuyedProductDetail} />
        <Route exact path='/buy/historic' component={BuyHistoric} />
        <Route exact path='/favorites' component={FavoritedProducts} />
        <Route exact path='/edit/user' component={EditUser} />

        <Route exact path='/greetings' component={Greetings} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

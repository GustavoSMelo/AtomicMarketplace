import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../views/main'
import Login from '../views/login'

import ProductDetails from '../views/productDetails'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/product/details' component={ProductDetails} />
        <Route exact path='/login' component={Login} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes

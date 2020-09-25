/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import UserController from '../app/Controllers/Http/UsersController'
import SessionController from '../app/Controllers/Http/SessionController'
import ProductsController from '../app/Controllers/Http/ProductsController'
import SalesmanController from '../app/Controllers/Http/SalesmenController'

Route.get('/', async () => {
  return { hello: 'world' }
})

//User routes
Route.post('/user', new UserController().Store).middleware('newUser')
Route.get('/user', new UserController().Index).middleware('Auth')
Route.put('/user', new UserController().Update).middleware('editUser')
Route.delete('/user', new UserController().Destroy).middleware('deleteShowUser')
Route.post('/user/show', new UserController().Show).middleware('deleteShowUser')

//Session User
Route.post('/user/session', new SessionController().Store).middleware('UserSession')

//Salesman
Route.post('/salesman', new SalesmanController().Store)

//Products
Route.post('/products', new ProductsController().Store)

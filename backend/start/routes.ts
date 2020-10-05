import Route from '@ioc:Adonis/Core/Route'

import UserController from '../app/Controllers/Http/UsersController'
import SessionController from '../app/Controllers/Http/SessionController'
import ProductsController from '../app/Controllers/Http/ProductsController'
import SalesmanController from '../app/Controllers/Http/SalesmenController'
import FavoritesController from '../app/Controllers/Http/FavoritesController'
import CommentaryController from '../app/Controllers/Http/CommentariesController'
import VendaController from '../app/Controllers/Http/VendasController'
import SessionSalesmenController from '../app/Controllers/Http/SessionSalesmenController'
import SearchNewProductsController from '../app/Controllers/Http/SearchNewProductsController'
import SeachProductByCategoriesController from '../app/Controllers/Http/SearchProductByCategoriesController'

Route.get('/', async () => {
  return { hello: 'world' }
})

//User routes
Route.post('/user', new UserController().Store).middleware('newUser')
Route.get('/user', new UserController().Index)
Route.put('/user', new UserController().Update).middleware('editUser')
Route.delete('/user', new UserController().Destroy).middleware('deleteShowUser')
Route.post('/user/show', new UserController().Show).middleware('deleteShowUser')

//Session User
Route.post('/user/session', new SessionController().Store).middleware('UserSession')
Route.post('/salesman/session', new SessionSalesmenController().Store).middleware('UserSession')

//Salesman - Checked
Route.post('/salesman', new SalesmanController().Store)
Route.get('/salesman', new SalesmanController().Index)
Route.put('/salesman', new SalesmanController().Update).middleware('Auth')
Route.get('/salesman/show', new SalesmanController().Show)

//Products - checked
Route.post('/products', new ProductsController().Store).middleware('Auth')
Route.get('/products', new ProductsController().Index)
Route.post('/products/show', new ProductsController().Show)
Route.put('/products', new ProductsController().Update).middleware('Auth')
Route.delete('/products', new ProductsController().Destroy)
Route.get('/products/show/salesman', new ProductsController().ShowSalesmanOnly)
Route.get('/products/show/only', new ProductsController().ShowOnlyProduct)
Route.post('/products/search/category', new SeachProductByCategoriesController().Index)
Route.get('/new/products', new SearchNewProductsController().Index)

// Favorites - checked
Route.post('/favorites', new FavoritesController().Store).middleware('Auth')
Route.get('/favorites', new FavoritesController().Index).middleware('Auth')
Route.delete('/favorites', new FavoritesController().Destroy).middleware('Auth')

// Venda - checked
Route.post('/venda', new VendaController().Store).middleware('Auth')
Route.get('/venda', new VendaController().Index).middleware('Auth')

// commentary - checked
Route.post('/commentary', new CommentaryController().Store).middleware('Auth')
Route.put('/commentary', new CommentaryController().Update).middleware('Auth')
Route.get('/commentary', new CommentaryController().Show)
Route.delete('/commentary', new CommentaryController().Destroy).middleware('Auth')
Route.get('/commentaries', new CommentaryController().Index)

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserModel from '../../Models/User'
import ProductModel from '../../Models/Product'
import FavoriteModel from '../../Models/Favorite'

export default class FavoritesController {
  public async Store ({request, response} : HttpContextContract){
    const {userid, productid} = request.request.headers

    const user = await UserModel.find(Number(userid))
    if(!user){
      response.status(401).json({Error: 'User not found'})
    }

    const product = await ProductModel.find(Number(productid))

    if(!product){
      response.status(401).json({Error: 'User not found'})
    }

    const favoriteAlreadyExist = await FavoriteModel.query().
      where('id_user', Number(userid)).
      where('id_product', Number(productid))

    if(favoriteAlreadyExist){
      return response.status(400).json({Error: 'you already favorited this product'})
    }

    const favorite = new FavoriteModel()
    //eslint-disable-next-line
    favorite.id_user = Number(userid)
    //eslint-disable-next-line
    favorite.id_product = Number(productid)

    await favorite.save()

    return response.json({Success: 'Favorite inserted with success'})
  }

  public async Index ({request, response} : HttpContextContract){
    const {userid} = request.request.headers

    const user = await UserModel.find(userid)

    if(!user){
      return response.status(401).json({Error: 'User does not exists'})
    }

    const favorites = await FavoriteModel.all()

    return favorites
  }

  public async Destroy ({request, response} : HttpContextContract){
    const {favoriteid} = request.request.headers

    const favorite = await FavoriteModel.find(favoriteid)

    if(!favorite){
      return response.status(401).json({Error: 'Favorite does not exist'})
    }

    await favorite.delete()

    return response.json({Success: 'favorite removed with success'})
  }
}

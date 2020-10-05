import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserModel from '../../Models/User'
import ProductModel from '../../Models/Product'
import VendasModel from '../../Models/Vendas'

export default class VendasController {
  public async Store ({request, response} : HttpContextContract){
    //eslint-disable-next-line
    const {userid, productid} = request.request.headers
    //eslint-disable-next-line
    const {payment_form, price_sale} = request.all()

    const user = await UserModel.find(userid)

    if(!user){
      return response.status(401).json({Error: 'user not found'})
    }

    const product = await ProductModel.find(productid)

    if(!product){
      return response.status(401).json({Error: 'prodduct not found'})
    }

    product.amount -= 1

    await product.save()

    const venda = new VendasModel()

    //eslint-disable-next-line
    venda.id_product = Number(productid)
    //eslint-disable-next-line
    venda.id_user = Number(userid)
    venda.payment_form = payment_form
    venda.price_sale = price_sale

    await venda.save()

    return response.json({Success: 'successful transaction '})
  }

  public async Index({request, response} : HttpContextContract) {
    const {userid} = request.request.headers

    const user = await UserModel.find(userid)

    if(!user){
      return response.status(401).json({Error: 'this user does not exists'})
    }

    const allSales = await VendasModel.query().where('id_user', Number(userid))

    if(!allSales){
      return response.json({Error: 'This user does not have any sale yet'})
    }

    return allSales
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductModel from '../../Models/Product'

export default class SearchProductByCategoriesController {
  public async Index ({ request } : HttpContextContract) {
    const {category} = request.all()

    const products = await ProductModel.query().where('kind_prod', category)

    const filtredProducts = products.filter(prod => prod.amount > 0)

    return products
  }
}

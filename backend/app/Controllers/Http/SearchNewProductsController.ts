// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductModel from '../../Models/Product'

export default class SearchNewProductsController {
  public async Index () {
    let qntd = 0
    const product = await ProductModel.query().select('*').orderBy('created_at')
    const filtredProduct = product.map(item => {
      if(qntd <= 15 && item.amount > 0) {
        qntd++
        return item
      }
    })

    return filtredProduct
  }
}

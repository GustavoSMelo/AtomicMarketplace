import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsModel from '../../Models/Product'
import Application from '@ioc:Adonis/Core/Application'
import bcrypt from 'bcryptjs'
import SalesmanModel from '../../Models/Salesmen'

export default class ProductsController {
  public async Store ({request, response} : HttpContextContract) {
    // eslint-disable-next-line
    const { product_name, kind_prod, brand, amount, product_price } = request.all()
    // eslint-disable-next-line
    const product_image = request.file('product_image')
    // eslint-disable-next-line
    const { salesman_id } = request.request.headers

    const salesman = SalesmanModel.findOrFail(salesman_id)

    if(!salesman){
      return response.json({Error: 'Salesman does not exist'})
    }

    // eslint-disable-next-line
    let product_image_name = new Date().getTime().toString(16)
    product_image_name += `${(Math.random() * 16).toString(16)}.${product_image?.extname}`

    product_image?.move(Application.tmpPath('uploads'), {
      name: product_image_name,
    })

    const product = new ProductsModel()

    product.kind_prod = kind_prod
    product.product_name = product_name
    product.product_image = product_image_name
    product.salesman_id = Number(salesman_id)
    product.brand = brand
    product.amount = amount
    product.product_price = product_price

    await product.save()
  }
}

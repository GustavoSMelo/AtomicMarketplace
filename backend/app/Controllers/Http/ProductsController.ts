import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsModel from '../../Models/Product'
import Application from '@ioc:Adonis/Core/Application'
import SalesmanModel from '../../Models/Salesmen'
import path from 'path'

export default class ProductsController {
  public async Store ({request, response} : HttpContextContract) {
    // eslint-disable-next-line
    const { product_name, kind_prod, brand, amount, product_price, description } = request.all()
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

    await product_image?.move(Application.tmpPath('../public/uploads'), {
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
    product.description = description

    await product.save()
  }

  public async Update({request, response} : HttpContextContract) {
    const data = request.all()
    const { searchid } = request.request.headers
    const product = await ProductsModel.findOrFail(searchid)

    if(data.kind_prod) {
      product.kind_prod = data.kind_prod
    }
    if(data.product_name){
      product.product_name = data.product_name
    }
    if(data.brand){
      product.brand = data.brand
    }
    if(data.amount){
      product.amount = data.amoutn
    }

    if(data.description) {
      product.description = data.description
    }

    //eslint-disable-next-line
    const product_image = request.file('product_image')

    if(product_image){
      //eslint-disable-next-line
      let product_image_name = new Date().getTime().toString(16)
      product_image_name += `${(Math.random() * 16).toString(16)}.${product_image?.extname}`
      product_image.move(Application.tmpPath('../public/uploads'))

      product.product_image = product_image_name
    }

    await product.save()
  }

  public async Index () {
    const allProducts = await ProductsModel.all()

    return allProducts
  }

  public async Show ({ request } : HttpContextContract){
    const {product_name} = request.all()
    const allProducts = await ProductsModel.query().where('product_name', 'like', `%${product_name}%`)

    return allProducts
  }

  public async Destroy ({request, response} : HttpContextContract){
    const {searchid} = request.request.headers

    const product = await ProductsModel.find(searchid)

    if(!product){
      return response.status(401).json({Error: 'product not found'})
    }

    await product.delete()

    return response.json({Success: 'product deleted with success'})
  }

  public async ShowSalesmanOnly ({request} : HttpContextContract){
    const {salesman_id} = request.request.headers

    const products = await ProductsModel.query().where('salesman_id', salesman_id)

    return products
  }
}

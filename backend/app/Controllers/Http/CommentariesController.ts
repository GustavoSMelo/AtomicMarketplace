import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductModel from '../../Models/Product'
import UserModel from '../../Models/User'
import VendaModel from '../../Models/Vendas'
import CommentaryModel from '../../Models/Commentary'

export default class CommentariesController {
  public async Store ({request, response} : HttpContextContract) {
    const {commentary, rating} = request.all()
    const {userid, productid} = request.request.headers

    const user = await UserModel.find(userid)

    if(!user){
      return response.status(401).json({Error: 'User not found'})
    }

    const product = await ProductModel.find(productid)

    if(!product){
      return response.status(401).json({Error: 'User not found'})
    }

    const venda = await VendaModel.query().where('id_product', Number(productid)).where('id_user', Number(userid))

    if(!venda){
      return response.json({Error: 'you dont buy this product, so, you cant comment in this product'})
    }

    const comment = new CommentaryModel()

    comment.commentary = commentary
    comment.id_product = productid
    comment.id_user = userid
    comment.rating = rating
    await comment.save()

    return response.json({Success: 'Commentary made with successful'})
  }

  public async Update ({request, response} : HttpContextContract) {
    const {commentary, rating} = request.all()
    const {commentid} = request.request.headers

    const comment = await CommentaryModel.find(commentid)

    if(!comment) {
      return response.status(404).json({Error: 'Commentary not found'})
    }

    commentary ? comment.commentary = commentary : comment.commentary = comment.commentary

    rating ? comment.rating = rating : comment.rating = comment.rating

    comment.commentary = commentary

    await comment.save()

    return response.json({Success: 'commentary updated'})
  }

  public async Show ({request, response} : HttpContextContract) {
    const {productid} = request.request.headers

    const product = await ProductModel.find(productid)

    if(!product){
      return response.status(404).json({Error: 'this product does not exists '})
    }

    const allCommentaries = await CommentaryModel.query().where('id_product', Number(productid))

    return allCommentaries
  }

  public async Destroy ({request, response} : HttpContextContract){
    const {commentaryid} = request.request.headers

    const comment = await CommentaryModel.find(commentaryid)

    if(!comment){
      return response.status(404).json({Error: 'commentary does not exist'})
    }

    await comment.delete()

    return response.json({Success: 'Commentary deleted with success'})
  }
}

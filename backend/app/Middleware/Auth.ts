import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../config/auth'

export default class Auth {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    const { authorization } = ctx.request.request.headers

    if(!authorization){
      return ctx.response.status(401).json({Error: 'token not passed'})
    }

    const [, token] = authorization?.split(' ')

    try{
      await promisify(jwt.verify)(token, authConfig.secret)
    }catch(err){
      return ctx.response.status(400).json({Error: 'Token expired'})
    }
    await next()
  }
}

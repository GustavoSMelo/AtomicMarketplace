import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {celebrate, Joi, Segments} from 'celebrate'

export default class Session {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    })

    await next()
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {celebrate, Joi, Segments} from 'celebrate'

export default class DeleteShowUserValidator {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        userid:  Joi.number().required(),
      }),
    })

    await next()
  }
}

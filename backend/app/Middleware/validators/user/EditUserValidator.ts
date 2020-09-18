import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { celebrate, Joi, Segments } from 'celebrate'

export default class EditUserValidator {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        user: Joi.number().required(),
        name: Joi.string(),
        email: Joi.string().email(),
        cep: Joi.string().max(9),
        password: Joi.string(),
        address: Joi.string(),
        address_number: Joi.string().max(4),
      }),
    })
    await next()
  }
}

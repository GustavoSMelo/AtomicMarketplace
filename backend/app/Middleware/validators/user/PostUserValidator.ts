import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { celebrate, Segments, Joi } from 'celebrate'

export default class UserValidator {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        cep: Joi.string().required().max(9),
        password: Joi.string().required(),
        address: Joi.string().required(),
        address_number: Joi.string().required().max(4),
      }),
    })
    await next()
  }
}

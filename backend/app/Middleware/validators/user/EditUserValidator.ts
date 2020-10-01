import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { celebrate, Joi, Segments } from 'celebrate'

export default class EditUserValidator {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        address: Joi.string().required(),
        address_number: Joi.string().max(4),
        cep: Joi.string().max(9).required(),
        cellphone: Joi.string().max(11).required(),
        state: Joi.string().required(),
        neighborhood: Joi.string().required(),
      }),
    })
    await next()
  }
}

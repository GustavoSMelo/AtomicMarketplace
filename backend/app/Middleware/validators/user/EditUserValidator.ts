import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { celebrate, Joi, Segments } from 'celebrate'

export default class EditUserValidator {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        cep: Joi.string().max(9).required(),
        password: Joi.string().min(8).required(),
        address: Joi.string(),
        address_number: Joi.string().max(4),
        state: Joi.string().required(),
        neighborhood: Joi.string().required(),
        cellphone: Joi.string().max(11).required()
      }),
    })
    await next()
  }
}

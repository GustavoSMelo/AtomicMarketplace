import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserModel from '../../Models/User'

export default class UsersController {
  public async Store ({ request } : HttpContextContract){
    const data = request.all()

    const user = new UserModel()

    user.name = data.name
    user.email = data.email
    user.address = data.address
    user.address_number = data.address_number
    user.password = data.passoword
    user.cep = data.cep

    await user.save()

    return user
  }
}

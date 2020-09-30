import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserModel from '../../Models/User'
import bcrypt from 'bcryptjs'

export default class UsersController {
  public async Store({ request }: HttpContextContract) {
    const data = request.all()

    const user = new UserModel()

    const passwordHash = await bcrypt.hash(data.password, 8)

    user.name = data.name
    user.email = data.email
    user.address = data.address
    user.address_number = data.address_number
    user.password = passwordHash
    user.cep = data.cep
    user.cellphone = data.cellphone
    user.state = data.state
    user.neighborhood = data.neighborhood

    await user.save()

    return user
  }

  public async Index({ request, response }: HttpContextContract) {
    const allUsers = await UserModel.all()

    return response.json({ users: allUsers })
  }

  public async Update({ request }: HttpContextContract) {
    const newdatas = request.all()
    const { searchid } = request.request.headers

    const user = await UserModel.findOrFail(searchid)
    const passwordHash = await bcrypt.hash(newdatas.password, 8)
    user.name = newdatas.name
    user.email = newdatas.email
    user.cep = newdatas.cep
    user.password = passwordHash
    user.address = newdatas.address
    user.address_number = newdatas.address_number
    user.cellphone = newdatas.cellphone
    user.state = newdatas.state
    user.neighborhood = newdatas.neighborhood


    return await user.save();
  }

  public async Destroy({ request, response }: HttpContextContract) {
    const { searchid } = request.request.headers

    try {
      const user = await UserModel.findOrFail(searchid)
      await user.delete()

      return response.status(200)
    } catch (err) {
      return response.status(500).json({ Error: 'Error in delete user, please try again' })
    }
  }

  public async Show({ request, response }: HttpContextContract) {
    const { searchid } = request.all()

    try {
      const user = UserModel.findOrFail(searchid)
      return user
    } catch (err) {
      return response.status(404).json({ Error: 'user not found' })
    }
  }
}

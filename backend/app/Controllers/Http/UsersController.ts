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

    return allUsers
  }

  public async Update({ request, response }: HttpContextContract) {

    const newdata = request.all()
    const { searchid } = request.request.headers

    const user = await UserModel.findOrFail(searchid)

    if (newdata.name) {
      user.name = newdata.name
    }

    if (newdata.email) {
      user.email = newdata.email
    }

    if (newdata.password) {
      const passwordHash = await bcrypt.hash(newdata.password, 8)
      user.password = passwordHash
    }

    if (newdata.address) {
      user.address = newdata.address
    }

    if (newdata.address_number) {
      user.address_number = newdata.address_number
    }

    if (newdata.cep) {
      user.cep = newdata.cep
    }

    if (newdata.cellphone) {
      user.cellphone = newdata.cellphone
    }

    if (newdata.state) {
      user.state = newdata.state
    }

    if (newdata.neighborhood) {
      user.neighborhood = newdata.neighborhood
    }




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

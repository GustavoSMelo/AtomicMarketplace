import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserModel from '../../Models/User'
import bcrypt from 'bcryptjs'

export default class UsersController {
  public async Store ({ request } : HttpContextContract){
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

  public async Index ({request, response} : HttpContextContract){
    const allUsers = await UserModel.all()

    return response.json({users: allUsers})
  }

  public async Update ({ request } : HttpContextContract) {
    const newdatas = request.all()
    const { searchid } = request.request.headers

    const user = await UserModel.findOrFail(searchid)

    if(newdatas.password !== '' || newdatas.password !== undefined || newdatas.password !== null){
      const passwordHash = await bcrypt.hash(newdatas.password, 8)
      user.password = passwordHash
    }else{
      user.password = user.password
    }

    user.name = (newdatas.name !== '' || newdatas.name !== undefined || newdatas.name !== null ?
      newdatas.name:user.name)

    user.email = (newdatas.email !== '' || newdatas.email !== undefined || newdatas.email !== null
      ? newdatas.email:user.email)

    user.cep = (newdatas.cep !== '' || newdatas.cep !== undefined || newdatas.cep !== null
      ? newdatas.cep:user.cep)

    user.address_number = (newdatas.address_number !== '' ||
      newdatas.address_number !== undefined ||
      newdatas.address_number !== null
      ? newdatas.address_number:user.address_number)

    user.address = (newdatas.address !== '' || newdatas.address !== undefined || newdatas.address !== null
      ? newdatas.address:user.address)

    user.cellphone = (newdatas.cellphone !== '' || newdatas.cellphone !== undefined || newdatas.cellphone !== null
      ? newdatas.cellphone:user.cellphone)

    user.state = (newdatas.state !== '' || newdatas.state !== undefined || newdatas.state !== null
      ? newdatas.state:user.state)

    user.neighborhood = (newdatas.neighborhood !== '' ||
    newdatas.neighborhood !== undefined ||
    newdatas.neighborhood !== null
      ? newdatas.neighborhood:user.neighborhood)

    return user
  }

  public async Destroy ({request, response} : HttpContextContract){
    const { searchid } = request.request.headers

    try{
      const user = await UserModel.findOrFail(searchid)
      await user.delete()

      return response.status(200)
    }catch(err){
      return response.status(500).json({Error: 'Error in delete user, please try again'})
    }
  }

  public async Show ({request,response} : HttpContextContract){
    const { searchid } = request.all()

    try{
      const user = UserModel.findOrFail(searchid)
      return user
    }catch(err){
      return response.status(404).json({Error: 'user not found'})
    }
  }
}

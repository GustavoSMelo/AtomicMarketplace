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

    await user.save()

    return user
  }

  public async Index (){
    const allUsers = await UserModel.all()

    return allUsers
  }

  public async Update ({ request } : HttpContextContract) {
    const newdatas = request.all()
    const user = await UserModel.findOrFail(newdatas.user)

    if(newdatas.password !== '' || newdatas.password !== undefined || newdatas.  password !== null){
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

    return user
  }

  public async Destroy ({request, response} : HttpContextContract){
    const {userid} = request.all()

    try{
      const user = await UserModel.findOrFail(userid)
      await user.delete()

      return response.status(200)
    }catch(err){
      return response.status(500).json({Error: 'Error in delete user, please try again'})
    }
  }

  public async Show ({request,response} : HttpContextContract){
    const {userid} = request.all()

    try{
      const user = UserModel.findOrFail(userid)
      return user
    }catch(err){
      return response.status(404).json({Error: 'user not found'})
    }
  }
}

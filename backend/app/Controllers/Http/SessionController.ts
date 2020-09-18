import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UserModel from '../../Models/User'
import authConfig from '../../../config/auth'

export default class SessionController {
  public async Store ({ request, response } : HttpContextContract) {
    const { email, password } = request.all()

    const user = await UserModel.findBy('email', email)

    if(!user){
      return response.status(401).json({Error: 'user not found'})
    }

    const passwordChecked = await bcrypt.compare(password, user.password)

    if(!passwordChecked){
      return response.status(401).json({Error: 'password does not match with this email'})
    }

    return response.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

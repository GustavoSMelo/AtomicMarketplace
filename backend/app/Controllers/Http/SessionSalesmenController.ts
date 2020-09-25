import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import Salesman from '../../Models/Salesmen'
import bcrypt from 'bcryptjs'
import tokenConfig from '../../../config/auth'

export default class SessionSalesmenController {
  public async Store({request, response} : HttpContextContract){
    const {email, password} = request.all()

    if(!email || !password){
      return response.status(401).json({Error: 'Complete all fields to continue '})
    }

    const saleman = await Salesman.findBy('email', email)

    if(!saleman){
      return response.status(404).json({Error: 'Account not found'})
    }

    const passwordChecked = await bcrypt.compare(password, saleman.password)

    if(!passwordChecked){
      return response.status(401).json({Error: 'password invalid '})
    }

    return response.json({
      salesman: {
        id: saleman.id,
        name: saleman.company_name,
        email: saleman.email
      },
      token: jwt.sign({id: saleman.id}, tokenConfig.secret, {
        expiresIn: tokenConfig.expiresIn,
      }),
    })
  }
}

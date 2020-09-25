import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesmenModel from '../../Models/Salesmen'
import bcrypt from 'bcryptjs'

export default class SalesmenController {
  public async Store ({ request, response } : HttpContextContract) {
    const data = request.all()
    const Salesman = new SalesmenModel()

    const passwordHashed = await bcrypt.hash(data.password, 8)

    Salesman.email = data.email
    Salesman.password = passwordHashed
    Salesman.cnpj = data.cnpj
    Salesman.company_name = data.company_name
    Salesman.address = data.address

    await Salesman.save()

    return response.status(200).json({success: 'Salesman created with success '})
  }

  public async Update ({request, response} : HttpContextContract){
    const newdatas = request.all()
    const {searchid} = request.request.headers

    const Salesman = await SalesmenModel.findOrFail(searchid)

    if(newdatas.password){
      const newPasswordHashed = await bcrypt.hash(newdatas.password, 8)
      Salesman.password = newPasswordHashed
    }

    Salesman.email = (newdatas.email !== '' || newdatas.email !== undefined || newdatas.email !== null ?
      newdatas.email:Salesman.email)

    Salesman.company_name = (newdatas.company_name !== '' ||
      newdatas.company_name !== undefined ||
      newdatas.company_name !== null ?
      newdatas.company_name:Salesman.company_name)

    Salesman.address = (newdatas.address !== '' ||
      newdatas.address !== undefined ||
      newdatas.address !== null ?
      newdatas.address:Salesman.address)

    Salesman.cnpj = (newdatas.address !== '' ||
      newdatas.address !== undefined ||
      newdatas.address !== null ?
      newdatas.address:Salesman.address)

    await Salesman.save()

    return response.status(200)
  }

  public async Index () {
    const allSalesman = await SalesmenModel.all()

    return allSalesman
  }

  public async Show ({request} : HttpContextContract) {
    const { searchid } = request.request.headers
    const salesman = await SalesmenModel.findOrFail(searchid)
    return salesman
  }
}

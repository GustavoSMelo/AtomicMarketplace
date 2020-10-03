import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesmenModel from '../../Models/Salesmen'
import bcrypt from 'bcryptjs'

export default class SalesmenController {
  public async Store({ request, response }: HttpContextContract) {
    const data = request.all()
    const Salesman = new SalesmenModel()

    const passwordHashed = await bcrypt.hash(data.password, 8)

    Salesman.email = data.email
    Salesman.password = passwordHashed
    Salesman.cnpj = data.cnpj
    Salesman.company_name = data.company_name
    Salesman.address = data.address

    await Salesman.save()

    return response.status(200).json({ success: 'Salesman created with success ' })
  }

  public async Update({ request, response }: HttpContextContract) {
    const newdata = request.all()
    const { searchid } = request.request.headers

    const Salesman = await SalesmenModel.findOrFail(searchid)


    if (newdata.email) {
      Salesman.email = newdata.email
    }

    if (newdata.password) {
      const passwordHash = await bcrypt.hash(newdata.password, 8)
      Salesman.password = passwordHash
    }

    if (newdata.address) {
      Salesman.address = newdata.address
    }

    if (newdata.company_name) {
      Salesman.company_name = newdata.company_name
    }

    if (newdata.cnpj) {
      Salesman.cnpj = newdata.cnpj
    }




    await Salesman.save()

    return response.status(200)
  }

  public async Index() {
    const allSalesman = await SalesmenModel.all()

    return allSalesman
  }

  public async Show({ request }: HttpContextContract) {
    const { searchid } = request.request.headers
    const salesman = await SalesmenModel.findOrFail(searchid)
    return salesman
  }
}

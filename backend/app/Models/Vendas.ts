import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Vendas extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price_sale : number

  @column()
  public payment_form : string

  @column()
  public id_user : number

  @column()
  public id_product : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Product from './Product'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price_sale : number

  @column()
  public payment_form : string

  @hasMany(() => User)
  public id_user : HasMany<typeof User>

  @hasMany(() => Product)
  public id_product : HasMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

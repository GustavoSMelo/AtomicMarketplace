import { DateTime } from 'luxon'
import { BaseModel, HasMany , column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Salesman from './Salesmen'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_name: string

  @column()
  public product_image: string

  @column()
  public kind_prod : string

  @column()
  public brand : string

  @column()
  public amount : number

  @column()
  public product_price : number

  @column()
  public salesman_id : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

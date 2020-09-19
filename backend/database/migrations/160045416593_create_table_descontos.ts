import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Descontos extends BaseSchema {
  protected tableName = 'discounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('price_promotion').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

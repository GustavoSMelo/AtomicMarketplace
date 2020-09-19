import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('salesman_id').references('id').inTable('salesman')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign('salesman_id')
    })
  }
}

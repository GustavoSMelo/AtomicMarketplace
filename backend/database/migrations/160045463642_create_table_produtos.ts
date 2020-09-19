import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('kind_prod').notNullable()
      table.string('brand').notNullable()
      table.integer('amount').notNullable()
      table.string('product_name').notNullable()
      table.string('product_image').notNullable()
      table.float('product_price').notNullable()
      table.integer('salesman_id').unsigned().notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

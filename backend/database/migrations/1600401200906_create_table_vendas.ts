import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableVendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('price_sale').notNullable()
      table.string('payment_form').notNullable()
      table.integer('id_user').unsigned().notNullable()
      table.integer('id_product').unsigned().notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

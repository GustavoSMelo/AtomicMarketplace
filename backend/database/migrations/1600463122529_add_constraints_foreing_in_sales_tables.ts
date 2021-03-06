import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sales extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('id_user').references('id').inTable('users')
      table.foreign('id_product').references('id').inTable('products')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign('id_user')
      table.dropForeign('id_product')
    })
  }
}

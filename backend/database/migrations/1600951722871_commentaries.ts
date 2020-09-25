import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Commentaries extends BaseSchema {
  protected tableName = 'commentaries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_user').unsigned().notNullable()
      table.integer('id_product').unsigned().notNullable()
      table.float('rating').notNullable()
      table.text('commentary').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

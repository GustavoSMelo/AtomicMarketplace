import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUserTables extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').unique()
      table.string('password')
      table.string('address')
      table.integer('address_number')
      table.string('cep')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

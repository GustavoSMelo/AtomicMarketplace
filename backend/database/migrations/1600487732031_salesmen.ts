import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Salesmen extends BaseSchema {
  protected tableName = 'salesmen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email').notNullable()
      table.string('address').notNullable()
      table.string('password').notNullable()
      table.string('cnpj').notNullable()
      table.string('company_name').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

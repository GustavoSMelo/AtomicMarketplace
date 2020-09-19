import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUserTables extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.string('address').notNullable()
      table.integer('address_number').notNullable()
      table.string('cep').notNullable()
      table.string('cellphone').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

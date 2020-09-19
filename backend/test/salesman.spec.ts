import test from 'japa'
import execa from 'execa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:3333`

test.group('tests about salesman', (group) =>{
  group.before(async () =>{
    await execa.node('ace', ['migration:run'], {stdio: 'inherit'})
  })

  test('should register salesman in database after to pass datas', async () => {
    await supertest(BASE_URL).post('/salesman').send({
      email: 'salesman@test.com',
      address: 'rua da empresa',
      password: 'salesman',
      cnpj: '9999999',
      company_name: 'name of company',
    }).expect(200)
  })

  test('should get all users in database', async (assert) =>{
    const { body } = await supertest(BASE_URL).get('/salesman')

    if(body.lenght < 0){
      assert.fail()
    }
  })

  test('should register one salesman and modify a column of this same salesman, and save a new data in db',
    async (assert) => {
      const { body } = await supertest(BASE_URL).get('/salesman')

      const response =
      await supertest(BASE_URL).put('/salesman').send({company_name: 'company name'}).field('searchid', body.id)

      if(body.company_name === response.body.company_name){
        assert.fail()
      }
    }
  )

  test('should delete one salesman user', async () => {
    await supertest(BASE_URL).delete('/').expect(200)
  })

  group.after(async () => {
    await execa.node('ace', ['migration:rollback'], {stdio: 'inherit'})
  })
})

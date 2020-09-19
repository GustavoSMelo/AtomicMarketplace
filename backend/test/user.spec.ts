import execa from 'execa'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Tests about user', (group) =>{
  group.before(async () => {
    await execa.node('ace', ['migration:run'], {stdio: 'inherit'})
  })

  test('Insert user in database', async () => {
    await supertest(BASE_URL).post('/user').send({
      name: 'test',
      email: 'test@mail.com',
      password: 'test',
      cep: '999999',
      address: 'rua test',
      address_number: '999',
      cellphone: '11-993791209',
    }).expect(200)
  })

  test('get all users in database', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/user')

    assert.exists(body)
  })

  test.skip('edit user in database', async (assert) =>{
    const { body } = await supertest(BASE_URL).get('/user')

    const response =
     await supertest(BASE_URL).put('/user').send({user: 1, name: 'test2'}).field('searchid', 1)

    if(body.name === response.body.name){
      assert.fail()
    }
  })

  test('remove user in database', async () => {
    await (await supertest(BASE_URL).delete('/user')).headers.searchid
  })

  test.skip('return only user', async (assert)=>{
    const {body} = await supertest(BASE_URL).post('/user/show').field('searchid', 1)

    console.log(body)

    if(body.lenght < 0 || body.lenght > 1){
      assert.fail()
    }
  })

  group.after(async () => {
    await execa.node('ace', ['migration:rollback'], {stdio: 'inherit'})
  })
})

import execa from 'execa'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:3333`

test.group('Test about user session', (group) => {
  group.before(async () => {
    await execa.node('ace', ['migration:run'], {stdio: 'inherit'})
  })

  test('Should return a jwt structure after complete all the fields and do login', async (assert) =>{
    const {body} = await supertest(BASE_URL).post('/user').send({
      name: 'test',
      email: 'test@mail.com',
      password: 'test',
      cep: '999999',
      address: 'rua test',
      address_number: '999',
      cellphone: '11-999999',
    })

    const jwt = await supertest(BASE_URL).post('/user/session').send({
      email: 'test@mail.com',
      password: 'test',
    })

    if(jwt.body.user.id &&
      jwt.body.user.name &&
      jwt.body.user.email &&
      jwt.body.token){
      assert.ok('jwt passed with success')
    }else{
      assert.fail()
    }
  })

  group.after(async () => {
    await execa.node('ace', ['migration:rollback'], {stdio: 'inherit'})
  })
})

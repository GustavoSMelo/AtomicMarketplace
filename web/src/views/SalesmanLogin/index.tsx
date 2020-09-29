import React, { useEffect, useState } from 'react'

import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import logo from '../../assets/images/salesman-login-image.png'
import { FaSignInAlt } from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'
import PopupCard from '../../components/popupStatusCard'
import api from '../../api'
import { useHistory } from 'react-router-dom'

const SalesmanLogin: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(<></>)
  const history = useHistory()

  const makeLogin = async () => {
    try {
      const response = await api.post('/salesman/session', { email, password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('salesmanid', response.data.salesman.id)
      localStorage.setItem('salesmanname', response.data.salesman.name)
      localStorage.setItem('salesmanemail', response.data.salesman.email)
      history.push('/salesman/hub')
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Campos invalidos, tente novamente'/>)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    },3000)
  }, [status])

  return (
    <>
      <Navbar />
      <div className="container-salesman-login">
        <section className="form">
          <img src={logo} alt="image login" />
          <form data-testid="form">
            <h1>
              Bem vindo,
              <br />
              <span>Faça seu login vendedor</span>
            </h1>
            <Input value={email} onTextChanged={setEmail} data-testid="login-input" type="text" placeholder="Seu Email" />
            <Input value={password} onTextChanged={setPassword} data-testid="password-input" type="password" placeholder="Sua Senha" />

            <Button type="button" value="Entrar" onClickFunction={() => makeLogin()}/> <br /> <br />
            <Link data-testid="registry-button" className="link-register" to="/salesman/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link>
          </form>
        </section>
      </div>
      {status}
    </>
  )
}

export default SalesmanLogin

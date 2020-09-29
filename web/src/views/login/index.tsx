import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import logo from '../../assets/images/logo.png'
import { FaSignInAlt } from 'react-icons/fa'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import api from '../../api'
import PopupCard from '../../components/popupStatusCard'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(<></>)
  const history = useHistory()

  const DoLogin = async () => {
    try {
      const response = await api.post('/user/session', { email, password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('iduser', response.data.user.id)
      localStorage.setItem('emailuser', response.data.user.email)
      localStorage.setItem('nameuser', response.data.user.name)
      localStorage.setItem('isLogged', 'true')
      history.push('/')
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Falha ao realizar login, por favor, tente novamente' />)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  return (
    <>
      <Navbar />
      <div className="container-login">
        <section className="form">
          <img src={logo} alt="image login" />
          <form data-testid="form">
            <h1>
              Bem vindo,
              <br />
              <span>Faça seu login para continuar</span>
            </h1>
            <Input value={email} onTextChanged={setEmail} data-testid="login-input" type="email" placeholder="E-mail" />

            <Input value={password} onTextChanged={setPassword} data-testid="password-input" type="password" placeholder="Senha" />

            <Button type="button" value="Entrar" onClickFunction={() => DoLogin()}/> <br /> <br />
            <Link data-testid="registry-button" className="link-register" to="/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link> <br /> <br />

            <Link data-testid="registry-button" className="link-register" to="/salesman/signup">
              <FaSignInAlt fontSize={15} /> Ou seja um vendedor
            </Link>
          </form>
        </section>
      </div>
      {status}
    </>
  )
}

export default Login

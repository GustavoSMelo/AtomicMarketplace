import React from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import logo from '../../assets/images/logo.png'
import { FaSignInAlt } from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'

const login = () => {
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
            <Input data-testid="login-input" type="email" placeholder="E-mail" />
            <Input data-testid="password-input" type="password" placeholder="Senha" />

            <Button type="button" value="Entrar" /> <br /> <br />
            <Link data-testid="registry-button" className="link-register" to="/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link> <br /> <br />

            <Link data-testid="registry-button" className="link-register" to="/salesman/signup">
              <FaSignInAlt fontSize={15} /> Ou seja um vendedor
            </Link>


          </form>
        </section>
      </div>
    </>
  )
}

export default login

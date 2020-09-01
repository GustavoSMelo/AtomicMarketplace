import React from 'react'

import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import logo from '../../assets/images/salesman-login-image.png'
import { FaSignInAlt } from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'

const SalesmanLogin: React.FC = () => {
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
            <Input data-testid="login-input" type="text" placeholder="Seu ID" />
            <Input data-testid="password-input" type="password" placeholder="Sua Senha" />

            <Button type="button" value="Entrar" /> <br /> <br />
            <Link data-testid="registry-button" className="link-register" to="/salesman/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link>
          </form>
        </section>
      </div>
    </>
  )
}

export default SalesmanLogin

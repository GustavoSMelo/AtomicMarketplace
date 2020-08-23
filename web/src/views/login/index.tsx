import React from 'react'
import Navbar from '../../components/navbar'
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
          <form>
            <h1>
              Bem vindo,
              <br />
              <span>Faça seu login para continuar</span>
            </h1>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />

            <button type="button" className="btn-entrar"> Entrar</button> <br />
            <Link className="link-register" to="/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link>
          </form>
        </section>
      </div>
    </>
  )
}

export default login

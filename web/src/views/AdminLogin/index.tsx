import React from 'react'
import Input from '../../components/input'
import Button from '../../components/button'

import logo from '../../assets/images/admin-login-image.png'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './style.css'
const AdminLogin: React.FC = () => {
  return (
    <>

      <div className="container-admin-login">
        <section className="form">
          <img src={logo} alt="image login" />
          <form data-testid="form">
            <h1>
              Bem vindo Admin,
              <br />
              <span>Faça seu login para continuar</span>
            </h1>
            <Input data-testid="login-input" type="email" placeholder="E-mail" />
            <Input data-testid="password-input" type="password" placeholder="Senha" />

            <Button type="button" value="Entrar" /> <br />
            <Link data-testid="registry-button" className="link-register" to="admin/signup">
              <FaSignInAlt fontSize={15} /> Realizar Cadastro
            </Link>
          </form>
        </section>
      </div>
    </>
  )
}

export default AdminLogin

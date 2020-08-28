import React from 'react'
import Input from '../../components/input'
import Button from '../../components/button'

import logo from '../../assets/images/admin-login-image.png'

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
            <Input data-testid="password-input" type="text" placeholder="Seu id" />

            <Button type="button" value="Entrar" /> <br />

          </form>
        </section>
      </div>
    </>
  )
}

export default AdminLogin

import React from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/singup.png'
import { FaArrowLeft } from 'react-icons/fa'
import './style.css'

const signup = () => {
  return (
    <>
      <Navbar />
      <div className="container-signup">
        <section className="form">
          <Link to="/login" className="arrow-back" >
            <FaArrowLeft fontSize={20} />
          </Link>
          <img src={logo} alt="image signup" />
          <form>
            <h1>
              Bem vindo,
              <br />
              <span>Se registre-se para usufruir do nosso site</span>
            </h1>
            <Input type="text" placeholder="Seu nome" />
            <Input type="text" placeholder="Seu endereço" />
            <Input type="email" placeholder="Seu melhor E-mail" />
            <Input type="password" placeholder="Sua Senha" />
            <br />
            <Button type="button" value="Registrar" />

          </form>
        </section>
      </div>
    </>
  )
}

export default signup

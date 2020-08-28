import React from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/salesman-signup-image.png'
import { FaArrowLeft } from 'react-icons/fa'
import './style.css'

const SalesmanSignup: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container-salesman-signup">
        <section className="form">
          <Link to="/salesman/login" className="arrow-back" >
            <FaArrowLeft fontSize={20} />
          </Link>
          <img src={logo} alt="image signup" />
          <form>
            <h1>
              Bem vindo,
              <br />
              <span>Se registre-se e comece vender seus produtos</span>
            </h1>
            <Input type="text" placeholder="Nome da Empresa" />
            <Input type="text" placeholder="Seu CPNJ" />
            <Input type="text" placeholder="Seu Endereço" />
            <Input type="email" placeholder="Seu E-mail para contato" />
            <Input type="password" placeholder="Sua Senha" />
            <br />
            <Button type="button" value="Registrar" />

          </form>
        </section>
      </div>
    </>
  )
}

export default SalesmanSignup

import React from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/salesman-signup-image.png'
import { FaArrowLeft } from 'react-icons/fa'
import './style.css'

const SalesmanSignupAddress: React.FC = () => {
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
              Falta pouco para você ter acesso a plataforma.

            </h1>
            <Input type="text" placeholder="CEP" />
            <Input type="text" placeholder="Nome da Rua" />
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Estado" />


            <br />
            <Button type="button" value="Registrar" />

          </form>
        </section>
      </div>
    </>
  )
}

export default SalesmanSignupAddress

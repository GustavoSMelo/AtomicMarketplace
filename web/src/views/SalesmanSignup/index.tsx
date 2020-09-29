import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/salesman-signup-image.png'
import { FaArrowLeft } from 'react-icons/fa'
import './style.css'
import { useHistory } from 'react-router-dom'
import PopupCard from '../../components/popupStatusCard'
import api from '../../api'

const SalesmanSignup: React.FC = () => {
  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState(<></>)

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  const makeRegistre = async () => {
    try {
      await api.post('/salesman', { company_name: name, cnpj, email, password, address })
      setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='Vendedor criado com sucesso'/>)
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Falha ao criar vendedor, verifique os campos e tente novamente'/>)
    }
  }

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
            <Input value={name} onTextChanged={setName} type="text" placeholder="Nome da Empresa" />
            <Input value={cnpj} onTextChanged={setCnpj} type="text" placeholder="Seu CPNJ" />
            <Input value={email} onTextChanged={setEmail} type="email" placeholder="Seu E-mail para contato" />
            <Input value={address} onTextChanged={setAddress} type='text' placeholder='Endereço da sua empresa'/>
            <Input value={password} onTextChanged={setPassword} type="password" placeholder="Sua Senha" />
            <br />
            <Button type="button" value="Registrar" onClickFunction={() => makeRegistre()}/>

          </form>
        </section>
      </div>
      {status}
    </>
  )
}

export default SalesmanSignup

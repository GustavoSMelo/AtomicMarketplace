import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/singup.png'
import { FaArrowLeft } from 'react-icons/fa'
import './style.css'
import api from '../../api'
import PopupStatusCard from '../../components/popupStatusCard'

const Signup = () => {
  const [status, setStatus] = useState(<></>)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [address_number, setAddress_number] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [state, setState] = useState('')
  const [cellphone, setCellphone] = useState('')

  const returnStatus = async () => {
    try {
      await api.post('/user', { name, email, password, cep, address, address_number, neighborhood, state, cellphone })

      setStatus(<PopupStatusCard backgroundcolor='#51B556' textcolor='#295C2C' content='Usuario criado com sucesso'/>)
    } catch (err) {
      setStatus(<PopupStatusCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Falha a criar usuario, verifique os campos e tente novamente'/>)

      console.log(err)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 5000)
  }, [status])

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
            <Input value={name} onTextChanged={setName} type="text" placeholder="Seu nome" />
            <Input value={email} onTextChanged={setEmail} type="email" placeholder="Seu melhor E-mail" />
            <Input value={password} onTextChanged={setPassword} type="password" placeholder="Sua Senha" />
            <Input value={cep} onTextChanged={setCep} type="text" placeholder="CEP" />
            <Input value={address} onTextChanged={setAddress} type="text" placeholder="Endereço" />
            <Input value={address_number} onTextChanged={setAddress_number} type="text" placeholder="Número" />
            <Input value={cellphone} onTextChanged={setCellphone} type="text" placeholder="Celular" />
            <Input value={neighborhood} onTextChanged={setNeighborhood} type="text" placeholder="Bairro" />
            <Input value={state} onTextChanged={setState} type="text" placeholder="Estado" />
            <br />
            <Button type="button" value="Registrar" onClickFunction={() => returnStatus()} />
          </form>
        </section>
      </div>
      {status}
    </>
  )
}

export default Signup

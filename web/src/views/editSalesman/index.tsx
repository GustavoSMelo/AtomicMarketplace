import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import api from '../../api'
import SalesmanInterface from '../../interfaces/SalesmanInterface'
import Input from '../../components/input'
import PopupCard from '../../components/popupStatusCard'

const EditSalesman = () => {
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [company_name, setCompany_name] = useState('')
  const [status, setStatus] = useState(<></>)

  const getDataByAPI = async () => {
    const response = await api.get<SalesmanInterface>('/salesman/show', {
      headers: {
        searchid: localStorage.getItem('salesmanid')
      }
    })

    setEmail(response.data.email)
    setAddress(response.data.address)
    setCnpj(response.data.cnpj)
    setCompany_name(response.data.company_name)
  }

  const EditUser = async () => {
    try {
      await api.put('/salesman', { email, address, company_name, cnpj, password }, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          searchid: localStorage.getItem('salesmanid')
        }
      })

      setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='Vendedor editado com sucesso'/>)
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Falha ao editar vendedor, verifique todos os campos e tente novamente'/>)
    }
  }

  useEffect(() => {
    getDataByAPI()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 5000)
  }, [status])

  return (
    <>
      <Container>
        <h1>Editar perfil de vendedor: </h1>
        <form>
          <span>
            <label>Email: </label>
            <Input value={email} onTextChanged={setEmail} placeholder='Insira seu email aqui' type='email' />
          </span>

          <span>
            <label>Endereço: </label>
            <Input value={address} onTextChanged={setAddress} placeholder='Insira seu address aqui' type='text' />
          </span>

          <span>
            <label>CNPJ: </label>
            <Input value={cnpj} onTextChanged={setCnpj} placeholder='Insira seu cnpj aqui' type='text' />
          </span>

          <span>
            <label>Nome da empresa: </label>
            <Input value={company_name} onTextChanged={setCompany_name} placeholder='Insira o nome da sua empresa aqui' type='email' />
          </span>

          <span>
            <label>Senha: </label>
            <Input value={password} onTextChanged={setPassword} placeholder='Insira sua senha aqui' type='password' />
          </span>
        </form>
        <button type='button' onClick={() => EditUser()}>Editar</button>
      </Container>
      {status}
    </>
  )
}

export default EditSalesman

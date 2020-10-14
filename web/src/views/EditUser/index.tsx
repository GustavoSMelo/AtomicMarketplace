import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import api from '../../api'
import UserInterface from '../../interfaces/UserInterface'
import Input from '../../components/input'
import Navbar from '../../components/navbar'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import PopupCard from '../../components/popupStatusCard'

const EditUser:React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [address_number, setAddress_number] = useState(0)
  const [cep, setCep] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [state, setState] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(<></>)
  const history = useHistory()

  const getDataByAPI = async () => {
    const response = await api.post<UserInterface>('/user/show', { searchid: localStorage.getItem('iduser') })

    setName(response.data.name)
    setEmail(response.data.email)
    setAddress(response.data.address)
    setAddress_number(response.data.address_number)
    setCep(response.data.cep)
    setCellphone(response.data.cellphone)
    setState(response.data.state)
    setNeighborhood(response.data.neighborhood)
  }

  const handleEditUser = async () => {
    try {
      await api.put('/user', { name, email, address, address_number, cep, cellphone, state, neighborhood, password }, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          searchid: Number(localStorage.getItem('iduser'))
        }
      })

      history.push('/user/profile')
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Erro ao favoritar produto '/>)
      console.log({ Error: err })
    }
  }

  useEffect(() => {
    getDataByAPI()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3500)
  }, [status])

  return (
    <>
      <Navbar />
      <Container>
        <form>
          <h1>Editar usuario: </h1>
          <FaArrowLeft size={30} style={{ margin: 15 }} onClick={() => history.goBack()}/>
          <span>
            <label>Nome: </label><Input placeholder='insert your name here' type='text' value={name} onTextChanged={setName}/>
          </span>
          <span>
            <label>Nome: </label><Input placeholder='insert your email here' type='text' value={email} onTextChanged={setEmail}/>
          </span>
          <span>
            <label>Endereço: </label><Input placeholder='insert your address here' type='text' value={address} onTextChanged={setAddress}/>
          </span>
          <span>
            <label>Numero da casa: </label><Input placeholder='insert your address number here' type='text' value={address_number} onTextChanged={setAddress_number}/>
          </span>
          <span>
            <label>CEP: </label><Input placeholder='insert your cep here' type='text' value={cep} onTextChanged={setCep}/>
          </span>
          <span>
            <label>Celular: </label>
            <Input placeholder='insert your cellphone here' type='text' value={cellphone} onTextChanged={setCellphone}/>
          </span>
          <span>
            <label>Estado: </label>
            <Input placeholder='insert your state here' type='text' value={state} onTextChanged={setState}/>
          </span>
          <span>
            <label>Bairro: </label>
            <Input placeholder='insert your neighborhood here' type='text' value={neighborhood} onTextChanged={setNeighborhood}/>
          </span>

          <span>
            <label>Password: </label><Input placeholder='insert your password here' type='password' value={password} onTextChanged={setPassword}/>
          </span>

          <button type='button' onClick={() => handleEditUser()}>Editar</button>
        </form>
      </Container>
      {status}
    </>
  )
}

export default EditUser

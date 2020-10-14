import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import api from '../../api'
import UserInterface from '../../interfaces/UserInterface'
import Input from '../../components/input'

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

  const getDataByAPI = async () => {
    const response = await api.post<UserInterface>('/user/show', {}, {
      headers: {
        searchid: localStorage.getItem('iduser')
      }
    })

    setName(response.data.name)
    setEmail(response.data.email)
    setAddress(response.data.address)
    setAddress_number(response.data.address_number)
    setCep(response.data.cep)
    setCellphone(response.data.cellphone)
    setState(response.data.state)
    setNeighborhood(response.data.neighborhood)
  }

  useEffect(() => {
    getDataByAPI()
  }, [])
  return (
    <Container>
      <form>
        <Input placeholder='insert your name here' type='text' value={name} onTextChanged={setName}/>
        <Input placeholder='insert your address here' type='text' value={address} onTextChanged={setAddress}/>
        <Input placeholder='insert your address number here' type='text' value={address_number} onTextChanged={setAddress_number}/>
        <Input placeholder='insert your cep here' type='text' value={cep} onTextChanged={setCep}/>
        <Input placeholder='insert your cellphone here' type='text' value={cellphone} onTextChanged={setCellphone}/>
        <Input placeholder='insert your state here' type='text' value={state} onTextChanged={setState}/>
        <Input placeholder='insert your neighborhood here' type='text' value={neighborhood} onTextChanged={setNeighborhood}/>
      </form>
    </Container>
  )
}

export default EditUser

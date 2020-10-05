import React from 'react'
import { Container } from './styled'
import { FaCheckCircle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Greetings = () => {
  const history = useHistory()

  return <Container>
    <h1>Compra realizada com sucesso</h1>
    <h2>Estamos muito feliz em ter lhe ajudado</h2>
    <small>Clique no botao verde para voltar a pagina inicial </small>
    <FaCheckCircle onClick={() => history.push('/')} className='iconCheck' color='#44E652' size={46} />
  </Container>
}

export default Greetings

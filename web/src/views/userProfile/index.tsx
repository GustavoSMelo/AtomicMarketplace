import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaWallet, FaRegUserCircle, FaPencilAlt, FaTruckLoading, FaHeart, FaClock, FaPowerOff} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../api'
import { useHistory } from 'react-router-dom'

const UserProfile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [address_number, setAddress_number] = useState('')
  const history = useHistory()

  const getUserDataByApi = async () => {
    const response = await api.post('/user/show', { searchid: localStorage.getItem('iduser') })
    console.log(response.data)
    setName(response.data.name)
    setEmail(response.data.email)
    setState(response.data.state)
    setNeighborhood(response.data.neighborhood)
    setCellphone(response.data.cellphone)
    setCep(response.data.cep)
    setAddress(response.data.address)
    setAddress_number(response.data.address_number)
  }

  const handlerLogoutButtonClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('iduser')
    localStorage.removeItem('emailuser')
    localStorage.removeItem('nameuser')
    localStorage.setItem('isLogged', 'false')
  }

  useEffect(() => {
    getUserDataByApi()
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <aside>
          <ul>
            {/*<Link className='Link' to='/follow/product'><li> <FaTruckLoading /> Acompanhe seus pedidos</li></Link>*/}
            <Link className='Link' to='/buy/historic'><li> <FaClock /> Historico de pedidos</li></Link>
            <Link className='Link' to='/favorites'><li> <FaHeart /> Produtos favoritados</li></Link>
            <Link className='Link' onClick={() => handlerLogoutButtonClick()} to='/'><li> <FaPowerOff /> Logout(Sair) </li></Link>
          </ul>
        </aside>
        <article>
          <section className='WalletContainer'>
            <span>
            </span>
            <span>
              <section className='RowContainerAlignRight'>
                <h2>{name}</h2>
              </section>
              <figure>
                <FaRegUserCircle size={84} />
              </figure>
            </span>
          </section>

          <h1>Dados sobre {name}</h1>
          <div>
            <span>
              <h2>Nome completo: </h2> <h3>{name}</h3>
            </span>

            <span>
              <h2>Email: </h2> <h3>{email}</h3>
            </span>

            <span>
              <h2>Endereço:  </h2> <h3>{address}</h3>
            </span>

            <span>
              <h2>Numero: </h2> <h3>{address_number}</h3>
            </span>

            <span>
              <h2>CEP: </h2> <h3>{cep}</h3>
            </span>

            <span>
              <h2>celular: </h2> <h3>{cellphone}</h3>
            </span>

            <span>
              <h2>estado: </h2> <h3>{state}</h3>
            </span>

            <span>
              <h2>bairro: </h2> <h3>{neighborhood}</h3>
            </span>

            <button type="button"><FaPencilAlt /> Editar</button>
          </div>
        </article>
      </Container>
    </>
  )
}

export default UserProfile

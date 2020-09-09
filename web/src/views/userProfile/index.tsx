import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaWallet, FaRegUserCircle, FaPencilAlt } from 'react-icons/fa'

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <Container>
        <aside>
          <ul>
            <li>Acompanhe seus pedidos</li>
            <li>Historico de pedidos</li>
            <li>Produtos favoritados</li>
            <li>Logout(Sair) </li>
          </ul>
        </aside>
        <article>
          <section className='WalletContainer'>
            <span>
              <FaWallet size={42} />
              <h1>120.00 BRL</h1>
            </span>
            <span>
              <section className='RowContainerAlignRight'>
                <h2>Name of user</h2>
              </section>
              <figure>
                <FaRegUserCircle size={84} />
              </figure>
            </span>
          </section>

          <h1>Dados sobre Name of user</h1>
          <div>
            <span>
              <h2>Nome completo: </h2> <h3>Gustavo Santos Melo</h3>
            </span>

            <span>
              <h2>Email: </h2> <h3>gustavo@mail.com</h3>
            </span>

            <span>
              <h2>Endereço:  </h2> <h3>Rua das palmeiras</h3>
            </span>

            <span>
              <h2>Numero: </h2> <h3>999</h3>
            </span>

            <span>
              <h2>CEP: </h2> <h3>999999-999</h3>
            </span>

            <span>
              <h2>Senha: </h2> <h3>***********</h3>
            </span>

            <button type="button"><FaPencilAlt /> Editar</button>
          </div>
        </article>
      </Container>
    </>
  )
}

export default UserProfile

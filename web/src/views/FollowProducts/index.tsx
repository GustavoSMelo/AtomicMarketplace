import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import Image from '../../assets/images/bannershoes2.png'
import { FaTruckLoading } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AnyProductPurchased from '../../assets/images/package.svg'
const FollowProducts = () => {
  return (
    <>
      <Navbar />
      <Container hasProduct={true}>
        <h1> Esses sao os pedidos a caminho: </h1>

        <article className='Card'>
          <figure>
            <img src={Image} alt="product" />
          </figure>
          <section>
            <h1>Name of product</h1>
            <h2>120.00 BRL</h2>
            <span>
              <Link className='LinkButton' to='/buy/product/detail'><button type="button">Visualizar pedido</button></Link>
              <article>
                <FaTruckLoading /> Status da entrega
              </article>
            </span>
          </section>
        </article>

        <section className='AnyProduct'>
          <figure>
            <img src={AnyProductPurchased} alt='Any product purchased' />
          </figure>
          <h1>Não temos nenhum registrado produto para ser entregue</h1>
        </section>
      </Container>
    </>
  )
}

export default FollowProducts

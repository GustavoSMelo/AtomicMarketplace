import React from 'react'
import { Container } from './styled'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import EmptyShoppingCart from '../../assets/images/empty-shopping-cart.png'
import { RiShip2Line } from 'react-icons/ri'
import ImageTest from '../../assets/images/bannershoes2.png'

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container data-testid='Container' haveProduct={true}>
        <section data-testid='without-product'>
          <img data-testid='image-alert' src={EmptyShoppingCart} alt='Empty shopping cart' />
          <h1>Você não tem produtos na sacola ainda ;-;</h1>
          <h2>Navegue na nossa loja para encontrar produtos</h2>
          <button data-testid='btn-navigate' type='button'>
            <RiShip2Line color={'#fff'} fontSize={26} /> Navegar
          </button>
        </section>
        <article data-testid='with-product'>
          <ul data-testid='list'>
            <li>
              <figure>
                <img src={ImageTest} />
              </figure>
              <span>
                <h1>Name of product</h1>
                <h2>price of product</h2>
                <h2>brand</h2>
              </span>
            </li>
          </ul>
        </article>
      </Container>
      <Footer />
    </>
  )
}

export default Cart

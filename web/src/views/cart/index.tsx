import React from 'react'
import { Container } from './styled'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import EmptyShoppingCart from '../../assets/images/empty-shopping-cart.png'
import { RiShip2Line } from 'react-icons/ri'
import { FaRegTrashAlt, FaArrowRight } from 'react-icons/fa'
import ImageTest from '../../assets/images/bannershoes2.png'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container data-testid='Container' haveProduct={true}>
        <section data-testid='without-product'>
          <img data-testid='image-alert' src={EmptyShoppingCart} alt='Empty shopping cart' />
          <h1>Você não tem produtos na sacola ainda</h1>
          <h2>Navegue na nossa loja para encontrar produtos</h2>
          <button data-testid='btn-navigate' type='button'>
            <Link className='link' to='/search'>
              <RiShip2Line color={'#fff'} fontSize={26} /> Navegar
            </Link>
          </button>
        </section>
        <article data-testid='with-product'>
          <h1>Valor total da sacola: 120.00 BRL</h1>
          <ul data-testid='list'>
            <li>
              <figure>
                <img src={ImageTest} />
              </figure>
              <span>
                <h1>Name of product</h1>
                <h2>120.00 BRL</h2>
                <h2>Nike</h2>

                <button type='button'>
                  <FaRegTrashAlt /> Remove
                </button>
              </span>
            </li>
          </ul>
          <button type="button">Continuar compra <FaArrowRight size={16} style={{ margin: 10 }} /></button>
        </article>
      </Container>
      <Footer />
    </>
  )
}

export default Cart

import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'

const BuyHistoric = () => {
  return (
    <>
      <Navbar />
      <Container>
        <FaArrowLeft className='btnReturn' size={36} color={'#000'} />
        <h1>Historico de compras realizadas: </h1>
        <ul>
          <li>
            <figure>
              <img src={Image} alt='Shoes image' />
              <figcaption>Name of product</figcaption>
            </figure>
            <section>
              <p>120.00 BRL</p>
              <p>01/01/2020</p>
              <p><FaCreditCard size={16} /></p>
            </section>
          </li>

          <li>
            <figure>
              <img src={Image} alt='Shoes image' />
              <figcaption>Name of product</figcaption>
            </figure>
            <section>
              <p>120.00 BRL</p>
              <p>01/01/2020</p>
              <p><FaCreditCard size={16} /></p>
            </section>
          </li>

          <li>
            <figure>
              <img src={Image} alt='Shoes image' />
              <figcaption>Name of product</figcaption>
            </figure>
            <section>
              <p>120.00 BRL</p>
              <p>01/01/2020</p>
              <p><FaCreditCard size={16} /></p>
            </section>
          </li>

          <li>
            <figure>
              <img src={Image} alt='Shoes image' />
              <figcaption>Name of product</figcaption>
            </figure>
            <section>
              <p>120.00 BRL</p>
              <p>01/01/2020</p>
              <p><FaCreditCard size={16} /></p>
            </section>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default BuyHistoric

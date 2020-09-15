import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'
import Searching from '../../assets/images/searching.svg'

const BuyHistoric = () => {
  return (
    <>
      <Navbar />
      <Container hasProduct={true}>
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
        <section className='WithoutProducts'>
          <figure>
            <img src={Searching} alt='Searching purchases'/>
          </figure>
          <h1>Não encontramos nenhuma compra feita anteriormente</h1>
        </section>
      </Container>
    </>
  )
}

export default BuyHistoric

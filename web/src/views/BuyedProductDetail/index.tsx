import React from 'react'
import { Container } from './styled'
import { FaArrowLeft, FaTruckLoading } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'
import Navbar from '../../components/navbar'

const BuyedProductDetail = () => {
  return (<>
    <Navbar />
    <Container>
      <FaArrowLeft className='btnReturn' size={36} color={'#000'}/>
      <section>
        <h1>Name of product</h1>
        <img src={Image} alt='Shoe' />
        <h3>
          <FaTruckLoading size={30} color={'#000'}/> Saindo da loja
        </h3>
        <strong>Informações da compra: </strong>
        <article className='RowContainer'>
          <h2>120.00 BRL</h2>
          <h2>Puma</h2>
        </article>
        <h2>Endereço: Rua das palmeiras 999</h2>
        <h2>CEP: 999999-1</h2>
        <h2>Meio de pagamento: Credit Card</h2>
        <h2>Data: 01/01/2020</h2>
      </section>
    </Container>
  </>
  )
}

export default BuyedProductDetail

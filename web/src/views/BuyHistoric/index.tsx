import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaArrowLeft, FaCreditCard, FaMoneyBill } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'
import Searching from '../../assets/images/searching.svg'
import api from '../../api'
import VendaInterface from '../../interfaces/VendasInterface'
import ProductInterface from '../../interfaces/ProductInterface'
import {useHistory} from 'react-router-dom'

interface History {
  product: ProductInterface,
  price: number,
  payment_form: string,
  created_at: Date,
}

const BuyHistoric = () => {
  const [buys, setBuys] = useState([])
  const [products, setProducts] = useState<History[]>([])
  const history = useHistory()

  const getDataByAPI = async () => {
    const response_buy = await api.get<VendaInterface[]>('/venda', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        userid: localStorage.getItem('iduser')
      }
    })

    const response_product = await api.get<ProductInterface[]>('/products')

    setBuys(response_buy.data)
    const allProducts = []

    response_product.data.map(prod => {
      response_buy.data.map(buy => {
        if (buy.id_product === prod.id) {
          allProducts.push([prod, buy.price_sale, buy.payment_form, buy.created_at])
        }
      })
    })
    setProducts(allProducts)
    console.log(allProducts)
  }
  useEffect(() => {
    getDataByAPI()
  }, [])

  return (
    <>
      <Navbar />
      <Container hasProduct={true}>
        <FaArrowLeft className='btnReturn' size={36} color={'#000'} onClick={() => history.goBack()} />
        <h1>Historico de compras realizadas: </h1>
        <ul>
          {products.map(prod => (
            <li key={prod[0].id}>
              <figure>
                <img src={`http://localhost:3333/uploads/${prod[0].product_image}`} alt='Shoes image' />
                <figcaption>{prod[0].product_name}</figcaption>
              </figure>
              <section>
                <p>{prod[1]} BRL</p>
                <p>{prod[3].substring(0, 10)}</p>
                <p>{prod[2] === 'Boleto' ? <span>Boleto <FaMoneyBill /> </span> : <span>{prod[2]} <FaCreditCard /> </span>}</p>
              </section>
            </li>
          ))}
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

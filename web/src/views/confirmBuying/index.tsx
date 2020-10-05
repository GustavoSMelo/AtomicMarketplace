import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { RouteComponentProps } from 'react-router-dom'
import api from '../../api'
import ProductInterface from '../../interfaces/ProductInterface'
import { useHistory } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import PopupCard from '../../components/popupStatusCard'

const ConfirmBuying: React.FC <RouteComponentProps> = ({ match }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [idProduct, setIdProduct] = useState(0)
  const [payment_form, setPayment_form] = useState('')
  const history = useHistory()
  const [status, setStatus] = useState(<></>)

  const getDataByAPI = async () => {
    const { id } = match.params as any

    setIdProduct(id)
    const product = await api.get<ProductInterface>('/products/show/only', {
      headers: {
        id
      }
    })

    setName(product.data.product_name)
    setPrice(product.data.product_price)
    setImage(product.data.product_image)
    setBrand(product.data.brand)
  }

  const buyProduct = async () => {
    if (payment_form === '') {
      return setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Escolha um metodo de pagamento para continuar '/>)
    } else {
      try {
        await api.post('/venda', { payment_form, price_sale: price }, {
          headers: {
            userid: localStorage.getItem('iduser'),
            productid: idProduct,
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        const cart = localStorage.getItem('cart')
        let splitCart = cart ? cart.split(',') : []
        splitCart = splitCart.filter(item => Number(item) === idProduct)

        localStorage.setItem('cart', splitCart.toString())
        history.push('/greetings')
      } catch (err) {
        setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Ocorreu um erro ao realizar a compra, tente novamente mais tarde'/>)
      }
    }
  }

  useEffect(() => {
    getDataByAPI()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 5000)
  })

  return (
    <>
      <Navbar />
      <Container>
        <FaArrowLeft color='#000'
          size={42}
          onClick={() => history.goBack()}
          style={{ marginTop: 100, marginLeft: 30 }}
        />
        <h1>Confirme o seu Pedido: </h1>
        <article>
          <figure>
            <img src={`http://localhost:3333/uploads/${image}`} />
          </figure>
          <section>
            <h2>{name}</h2>
            <h2>Preço: {price} BRL</h2>
            <h2>Marca: {brand}</h2>
            <span>
              <label>Escolha o meio de pagamento: </label>
              <select onChange={e => setPayment_form(e.target.value)}>
                <option></option>
                <option value='cartao de credito'>cartão de credito</option>
                <option value='cartao de debito'>cartão de debito</option>
                <option value='boleto'>Boleto</option>
              </select>
            </span>
          </section>
        </article>
        <section>
          <button type='button' onClick={() => buyProduct()}>Fechar compra</button>
        </section>
      </Container>
      {status}
    </>
  )
}

export default ConfirmBuying

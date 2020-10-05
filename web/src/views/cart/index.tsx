import React, { useState, useEffect } from 'react'
import { Container } from './styled'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import EmptyShoppingCart from '../../assets/images/empty-shopping-cart.png'
import { RiShip2Line } from 'react-icons/ri'
import { FaRegTrashAlt, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../api'
import ProductsInterface from '../../interfaces/ProductInterface'
import PopupCard from '../../components/popupStatusCard'

const Cart = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([])
  const [productsInCart, setProductsInCard] = useState([])
  const [haveProducts, setHaveProducts] = useState(false)
  const [status, setStatus] = useState(<></>)

  const getDataByAPI = async () => {
    const productsInCart = localStorage.getItem('cart')
    const arryProductsInCart = productsInCart ? productsInCart.split(',') : []

    setProductsInCard(arryProductsInCart)
    if (arryProductsInCart.length <= 0) {
      setHaveProducts(false)
    } else {
      setHaveProducts(true)
    }

    const response = await api.get<ProductsInterface[]>('/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getDataByAPI()
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  const removeItemFromCart = (productid:Number) => {
    const productsInCart = localStorage.getItem('cart')
    let arryProductsInCart = productsInCart ? productsInCart.split(',') : []
    arryProductsInCart = arryProductsInCart.filter(item => Number(item) !== productid)
    console.log(arryProductsInCart)
    localStorage.setItem('cart', arryProductsInCart.toString())
    setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='Produto removido do carrinho com sucesso' />)
  }

  return (
    <>
      <Navbar />
      <Container data-testid='Container' haveProduct={haveProducts}>
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
          <h1>Aqui esta seu carrinho de produtos: </h1>
          <ul data-testid='list'>
            {/*productsInCart.map(prd => products.find(product => product.id === prd))*/}

            {products.map(product => productsInCart.find(prd => product.id === Number(prd)) ? (
              <li>
                <figure>
                  <img src={`http://localhost:3333/uploads/${product.product_image}`} />
                </figure>
                <span>
                  <h1>{product.product_name}</h1>
                  <h2>{product.product_price}BRL</h2>
                  <h2>{product.brand}</h2>

                  <button className='buy' type='button'>
                    <Link to={`/confirm/buy/${product.id}`}>
                      Continuar para compra <FaArrowRight />
                    </Link>
                  </button>

                  <button className='remove' type='button' onClick={() => removeItemFromCart(product.id)}>
                    <FaRegTrashAlt /> Remover do carrinho
                  </button>
                </span>
              </li>) : <></>)}
          </ul>

        </article>
      </Container>
      <Footer />
      {status}
    </>
  )
}

export default Cart

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Input from '../../components/input'
import { Container } from './styled'
import { FaSearch, FaHeart, FaShoppingBag, FaStream, FaRegHeart } from 'react-icons/fa'
import NovosItens from '../../assets/images/icons/novos-itens.svg'
import RoupaCasual from '../../assets/images/icons/roupa-casual.svg'
import RoupaEsportiva from '../../assets/images/icons/roupa-esportiva.svg'
import RoupaSocial from '../../assets/images/icons/roupa-social.svg'
import SapatoCasual from '../../assets/images/icons/sapato-casual.svg'
import SapatoEsportivo from '../../assets/images/icons/sapato-esportivo.svg'
import SapatoSocial from '../../assets/images/icons/sapato-social.svg'
import SapatosFemininosSocial from '../../assets/images/icons/sapatos-feminino-social.svg'
import Vestidos from '../../assets/images/icons/vestidos.svg'
import ProductInterface from '../../interfaces/ProductInterface'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
import api from '../../api'
import FavoriteInterface from '../../interfaces/FavoriteInterface'
import PopupCard from '../../components/popupStatusCard'

const Search = () => {
  const [needHelp, setNeedHelp] = useState(true)
  const [product_name, setProduct_name] = useState('')
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [favorites, setFavorites] = useState<FavoriteInterface[]>([])
  const [status, setStatus] = useState(<></>)

  const handleSearchProduct = async () => {
    try {
      const response = await api.post('/products/show', {
        product_name
      })

      const response_favorite = await api.get<FavoriteInterface[]>('/favorites', {
        headers: {
          userid: localStorage.getItem('iduser'),
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setProducts(response.data)
      setNeedHelp(false)
      setFavorites(response_favorite.data)
    } catch (err) {
      console.log({Error: err})
    }
  }

  const addProductInCart = (productid : Number) => {
    const cart = localStorage.getItem('cart')
    const arryCart = cart ? cart.split(',') : []

    if (arryCart.find(index => Number(index) === productid)) {
      return setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Produto já inserido dentro do carrinho '/>)
    } else {
      arryCart.push(productid.toString())
      localStorage.setItem('cart', arryCart.toString())

      return setStatus(<PopupCard backgroundcolor='#51B556' textcolor='#295C2C' content='produto inserido no carrinho com sucesso '/>)
    }
  }

  const insertFavorite = async (productid : Number) => {
    try {
      await api.post('/favorites', {}, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          userid: localStorage.getItem('iduser'),
          productid
        }
      })
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Erro ao favoritar produto '/>)
    }
  }

  const deleteFavorite = async (favoriteid: Number) => {
    try {
      await api.delete('/favorites', {
        headers: {
          favoriteid,
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    } catch (err) {
      setStatus(<PopupCard backgroundcolor='#FA6450' textcolor='#5C241D' content='Erro ao remover favorito do produto'/>)
    }
  }

  useEffect(() => {
    const getFavoritesUpdate = async () => {
      const response_favorite = await api.get<FavoriteInterface[]>('/favorites', {
        headers: {
          userid: localStorage.getItem('iduser'),
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setFavorites(response_favorite.data)
    }
    getFavoritesUpdate()
  }, [favorites])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  })

  return (
    <>
      <Navbar />
      <Container data-testid='container' needHelp={needHelp}>
        <article className='InputSearch'>
          <Input value={product_name} onTextChanged={setProduct_name} type='text' placeholder='Qual produto você procura ?' />
          <button data-testid='search-button' onClick={() => handleSearchProduct()}>
            <FaSearch />
          </button>
        </article>
        <section className='HelpSearch'>
          <h1>
            Precisa de ajuda para encontrar o que deseja ?
            <br />
            Alguns tópicos para lhe auxiliar :)
          </h1>
          <ul data-testid='list'>
            <li onClick={() => setNeedHelp(false)}>
              <figure>
                <img src={NovosItens} />
                <figcaption>Novos itens</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaCasual} />
                <figcaption>Roupas Casuais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaEsportiva} />
                <figcaption>Roupas Esportivas</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatosFemininosSocial} />
                <figcaption>Sapatos Sociais femininos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoEsportivo} />
                <figcaption>Sapatos esportivos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoSocial} />
                <figcaption>Sapatos sociais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={Vestidos} />
                <figcaption>Vestidos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaSocial} />
                <figcaption>Roupas Sociais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoCasual} />
                <figcaption>Sapatos casuais</figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <article className='SearchContainer'>
          <section className='RowContainer'>
            <h2>Resultados da pesquisa: Novos Itens</h2>
            <small>{products.length} Item(ns) encontrado(s) na sua pesquisa</small>
          </section>
          <ul className='SearchProducts'>
            {products.map(product => <li key={product.id}>
              <span className='HeaderContainer'>
                {favorites.find(fav => fav.id_product === product.id && fav.id_user === Number(localStorage.getItem('iduser'))) ?
                  <FaHeart onClick={() => deleteFavorite(favorites.find(fav => fav.id_user === Number(localStorage.getItem('iduser')) &&
                  fav.id_product === product.id).id)} size={20} color='#f00' /> :
                  <FaRegHeart onClick={() => insertFavorite(product.id)} size={20} color='#f00' />}

              </span>
              <figure>
                <img src={`http://localhost:3333/uploads/${product.product_image}`} alt='Product' />
              </figure>
              <small>{product.product_name}</small>
              <h1>{product.product_price} BRL</h1>
              <section className='Controls'>
                <FaShoppingBag className='Bag' size={30} onClick={() => addProductInCart(product.id)} />
                <Link className='ButtonLink' to={`/product/details/${product.id}`}>
                  <button><FaStream /> {'  '}Details</button>
                </Link>
              </section>
            </li>)}
          </ul>
        </article>
      </Container>
      <Footer />
      {status}
    </>
  )
}

export default Search

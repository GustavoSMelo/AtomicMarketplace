import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { FaRegHeart, FaStream, FaStar, FaShoppingBag, FaHeart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Banner, Cart } from './styled'
import blueshoes from '../../assets/images/bannershoes2.png'
import redshoes from '../../assets/images/shoesvermelhos.png'
import purpleshoes from '../../assets/images/purpleshoes.png'
import brownshoes from '../../assets/images/brownshoes.png'
import Footer from '../../components/footer'
import ProductInterface from '../../interfaces/ProductInterface'
import api from '../../api'
import CommentaryInterface from '../../interfaces/CommentaryInterface'
import FavoriteInterface from '../../interfaces/FavoriteInterface'
import PopupCard from '../../components/popupStatusCard'

const Main = () => {
  const [colorBanner, setColorBanner] = useState('#6970DF')
  const [imageBanner, setImageBanner] = useState(blueshoes)
  const [titleBanner, setTitleBanner] = useState('Tênis Air Jordan XXXIII')
  const [descriptionBanner, setDescriptionBanner] = useState('Temos sapatos perfeitos para a sua caminhada ou academia')
  const [Product, setProduct] = useState<ProductInterface[]>([])
  const [Commentaries, setCommentaries] = useState<CommentaryInterface[]>([])
  const [favorites, setFavorites] = useState<FavoriteInterface[]>([])
  const [status, setStatus] = useState(<></>)

  const getDataByAPI = async () => {
    const response = await api.get('/products')

    setProduct(response.data)

    const commentaries_response = await api.get<CommentaryInterface[]>('/commentaries')
    setCommentaries(commentaries_response.data)

    const favorite_response = await api.get<FavoriteInterface[]>('/favorites', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        userid: localStorage.getItem('iduser')
      }
    })
    setFavorites(favorite_response.data)
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

  useEffect(() => {
    getDataByAPI()
  }, [favorites])

  useEffect(() => {
    setTimeout(() => {
      setStatus(<></>)
    }, 3000)
  }, [status])

  const changeColor = (color: string) => {
    setColorBanner(color)

    if (color === '#6970DF') {
      setImageBanner(blueshoes)
      setTitleBanner('Tênis Air Jordan XXXIII')
      setDescriptionBanner('Temos sapatos perfeitos para a sua caminhada ou academia')
    } else if (color === '#CC5A62') {
      setImageBanner(redshoes)
      setTitleBanner('Tenis Air Jordan mid one')
      setDescriptionBanner('Perfeito para dar um show nas quadras ')
    } else if (color === '#7159ac') {
      setImageBanner(purpleshoes)
      setTitleBanner('Nike SB Dunk Low')
      setDescriptionBanner('Precisa ir para um encontro casual esse tenis se encaixa perfeitamente')
    } else if (color === '#824C3B') {
      setImageBanner(brownshoes)
      setTitleBanner('Sapatenis West Coat')
      setDescriptionBanner('Em uma situação mais formal, sempre é bom ter uma roupa adequada')
    }
  }
  return (
    <>
      <Navbar />
      <Banner color={colorBanner}>
        <section>
          <h1>
            {titleBanner}
          </h1>
          <small>
            {descriptionBanner}
          </small>

          <button type='button'>
            Clique para pesquisar <FaSearch />
          </button>

          <ul>
            <li style={{ backgroundColor: '#6970DF' }} onClick={() => changeColor('#6970DF')}>
            </li>
            <li style={{ backgroundColor: '#824C3B' }} onClick={() => changeColor('#824C3B')}>
            </li>
            <li style={{ backgroundColor: '#CC5A62' }} onClick={() => changeColor('#CC5A62')}>
            </li>
            <li style={{ backgroundColor: '#7159ac' }} onClick={() => changeColor('#7159ac')}>
            </li>
          </ul>
        </section>
        <article>
          <img src={imageBanner} />
        </article>
      </Banner>
      <Container>
        <ul data-testid='product-list'>
          {Product.map(prod => (
            <li data-testid='product' className='list-card' key={prod.id}>
              <span className='IconContainer'>

                {favorites.find(fav => fav.id_user === Number(localStorage.getItem('iduser')) &&
                fav.id_product === prod.id) ?
                  <span className='heart'>
                    <FaHeart color={'#f00'} onClick={() => deleteFavorite(favorites.find(fav => fav.id_user === Number(localStorage.getItem('iduser')) &&
                fav.id_product === prod.id).id)} />
                  </span> :
                  <span className='heart' onClick={() => insertFavorite(prod.id)}>
                    <FaRegHeart color={'#f00'} />
                  </span>
                }
              </span>
              <figure>
                <img src={`http://localhost:3333/uploads/${prod.product_image}`} alt='product image' />
              </figure>
              <h3>{prod.product_name}</h3>
              <h1>BRL {prod.product_price}</h1>
              <section className="RowContainer">
                <Cart type='button' background={'#fff'} color={'#67D651'} onClick={() => addProductInCart(prod.id)}>
                  <FaShoppingBag />
                </Cart>
                <Link to={`/product/details/${prod.id}`} className='Details'>
                  <FaStream /> Detalhes
                </Link>
              </section>
            </li>
          ))}
        </ul>
      </Container>
      <Footer />
      {status}
    </>
  )
}

export default Main

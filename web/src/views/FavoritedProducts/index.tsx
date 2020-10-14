import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaHeart, FaStar } from 'react-icons/fa'
import HeartImage from '../../assets/images/icons/coracao.svg'
import HeartBroken from '../../assets/images/sadImage.png'
import api from '../../api/index'
import FavoriteInterface from '../../interfaces/FavoriteInterface'
import ProductsInterface from '../../interfaces/ProductInterface'
import { FaStream } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FavoritedProducts = () => {
  const [products, setProducts] = useState<ProductsInterface []>([])
  const [favorites, setFavorites] = useState<FavoriteInterface []>([])
  const token = localStorage.getItem('token')

  const getProductsByAPI = async () => {
    const product_response = await api.get<ProductsInterface[]>('/products')
    setProducts(product_response.data)

    const favorite_response = await api.get<FavoriteInterface[]>('/favorites', {
      headers: {
        authorization: `Bearer ${token}`,
        userid: localStorage.getItem('iduser')
      }
    })

    console.log(products)
    setFavorites(favorite_response.data)

    const product = []
    product_response.data.map(prod => {
      favorite_response.data.map(fav => {
        if (fav.id_product === prod.id && fav.id_user === Number(localStorage.getItem('iduser'))) {
          product.push(prod)
        }
      })
    })

    setProducts(product)
  }

  useEffect(() => {
    getProductsByAPI()
  }, [])
  return (
    <>
      <Navbar />
      <Container hasFavorites={true}>

        <span className='title'>
          <figure>
            <img src={HeartImage} alt='Heart' />
          </figure>
          <h1>Aqui estão os produtos que você favoritou </h1>
        </span>
        {products.map(prod => <section key={prod.id}>
          <article className='Card'>
            <span className='HeaderCard'>
              <span>
                <FaHeart color='#f00' size={20} />
              </span>
              <span>
                <FaStar color='#FFF36B' size={20} /> 4.0
              </span>
            </span>

            <figure>
              <img src={`http://localhost:3333/uploads/${prod.product_image}`} alt='Favorited Product' />
            </figure>
            <h2>{prod.product_name}</h2>
            <button> <Link to={`/product/details/${prod.id}`}><FaStream /> Detalhes</Link></button>
          </article>
        </section>)}
        <article>
          <figure>
            <img src={HeartBroken} alt='Heart broken' />
          </figure>
          <h1>Você não tem nenhum item favoritado</h1>
        </article>
      </Container>
    </>
  )
}

export default FavoritedProducts

import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaHeart, FaStar } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'
import HeartImage from '../../assets/images/icons/coracao.svg'
import HeartBroken from '../../assets/images/sadImage.png'

const FavoritedProducts = () => {
  return (
    <>
      <Navbar />
      <Container hasFavorites={false}>
        <span className='title'>
          <figure>
            <img src={HeartImage} alt='Heart' />
          </figure>
          <h1>Aqui estão os produtos que você favoritou </h1>
        </span>
        <section>
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
              <img src={Image} alt='Favorited Product' />
            </figure>
            <h2>Name of product</h2>
            <button>Detalhes</button>
          </article>

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
              <img src={Image} alt='Favorited Product' />
            </figure>
            <h2>Name of product</h2>
            <button>Detalhes</button>
          </article>

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
              <img src={Image} alt='Favorited Product' />
            </figure>
            <h2>Name of product</h2>
            <button>Detalhes</button>
          </article>

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
              <img src={Image} alt='Favorited Product' />
            </figure>
            <h2>Name of product</h2>
            <button>Detalhes</button>
          </article>
        </section>
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

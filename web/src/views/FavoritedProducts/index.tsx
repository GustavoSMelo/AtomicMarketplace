import React,{useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import { FaHeart, FaStar } from 'react-icons/fa'
import Image from '../../assets/images/bannershoes2.png'
import HeartImage from '../../assets/images/icons/coracao.svg'
import HeartBroken from '../../assets/images/sadImage.png'
import api from '../../api/index'

const FavoritedProducts = () => {
  const [favorites, setFavorites] = useState([]);
const token = localStorage.getItem("token")
  useEffect(()=>{
    api.get('favorites',{
      headers:{
        Authorization: token,
      },
    })
    .then((res)=>{
      setFavorites(res.data)
    })
  },[token])
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
        {favorites.map((favorite)=>(
        <section key={favorite.id}>
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
            <h2>{favorite.name}</h2>
            <button>{favorite.details}</button>
          </article>






        </section>
        ))}
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

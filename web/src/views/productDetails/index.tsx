import React, {useState, useEffect} from 'react'
import './style.css'
import Header from '../../components/navbar'
import { FaShoppingBag, FaRegHeart, FaStar, FaHeart } from 'react-icons/fa'
import { RouteComponentProps } from 'react-router-dom'
import api from '../../api'
import ProductInterface from '../../interfaces/ProductInterface'
import CommentaryInterface from '../../interfaces/CommentaryInterface'
import UserInterface from '../../interfaces/UserInterface'
import UserProfileIcon from '../../assets/images/profile.svg'
import FavoriteInterface from '../../interfaces/FavoriteInterface'
import PopupCard from '../../components/popupStatusCard'

const Details:React.FC<RouteComponentProps> = ({ match }) => {
  const [product_name, setProduct_name] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [product_image, setProduct_image] = useState('')
  const [product_price, setProduct_price] = useState(0)
  const [product_id, setProduct_id] = useState(0)
  const [Commentary, setCommentary] = useState<CommentaryInterface []>([])
  const [User, setUser] = useState<UserInterface[]>([])
  const [status, setStatus] = useState(<></>)
  const [favorites, setFavorites] = useState<FavoriteInterface []>([])

  const getDataByAPI = async () => {
    const { id } = match.params as any
    try {
      const response = await api.get<ProductInterface>('/products/show/only', { headers: {
        id
      }})

      setProduct_name(response.data.product_name)
      setDescription(response.data.description)
      setAmount(response.data.amount)
      setProduct_image(response.data.product_image)
      setProduct_price(response.data.product_price)

      setProduct_id(id)

      const commentary_response = await api.get<CommentaryInterface[]>('/commentary', {
        headers: {
          productid: id
        }
      })
      setCommentary(commentary_response.data)

      const user_response = await api.get<UserInterface[]>('/user')
      setUser(user_response.data)

      const favorite_response = await api.get<FavoriteInterface[]>('/favorites', {
        headers: {
          userid: Number(localStorage.getItem('iduser')),
          productid: Number(product_id),
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setFavorites(favorite_response.data)
    } catch (err) {
      console.log({ Error: err })
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
      console.log({Error: err})
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
    getDataByAPI()
  }, [favorites])

  return (
    <>
      <Header />
      <main className='container' data-testid='product'>
        <article className='product'>
          <figure data-testid='photo' className='photo'>
            <img src={`http://localhost:3333/uploads/${product_image}`} alt='photo_product' />
          </figure>
          <aside className='informations'>
            <article className='information-title'>
              <section className='title' data-testid='name'>
                <h1>{product_name}</h1>
              </section>
              <span className='heart'>
                {favorites.find(fav =>
                  fav.id_user === Number(localStorage.getItem('iduser')) &&
                  fav.id_product === Number(product_id))
                  ? <FaHeart onClick={() => deleteFavorite(favorites.find(fav =>
                    fav.id_user === Number(localStorage.getItem('iduser')) &&
                    fav.id_product === Number(product_id)).id)} color='#f00' size={32} />

                  : <FaRegHeart onClick={() => insertFavorite(product_id)} color='#f00' size={32}/>}
              </span>
            </article>
            <p data-testid='description'>
              {description}
            </p>
            <section className='RowContainer'>
              <h1 data-testid='price'>BRL {product_price}</h1> <h2 data-testid='amount'>{amount} restantes</h2>
            </section>
            <button type='button' className='cart' data-testid='cart'>
              <FaShoppingBag /> Adiciona na sacola
            </button>
          </aside>
        </article>
        <h1 data-testid='rating-product'>Reviews:
          <br />
          {Commentary.length <= 0 ? 0 : Commentary.filter(comment => comment.id_product !== product_id).map(comment => {
            let sum = 0
            sum += comment.rating
            sum /= Commentary.length

            return sum
          })}<FaStar color={'#C7BD61'} />
        </h1>
        <ul className='ReviewContainer' data-testid='commentaries'>
          {Commentary.map(comment => (
            <li className='Review' key={comment.id}>
              <section className='RowContainer'>
                <figure>
                  <img src={UserProfileIcon } alt='avatar' />
                </figure>
                <h1 data-testid='nameUser'>{User.find(usr => usr.id === comment.id_user).name}</h1>
              </section>
              <p className='commentary' data-testid='commentary'>
                {comment.commentary}
              </p>
              <small data-testid='rating-commentary'> {comment.rating} <FaStar color={'#C7BD61'} /></small>
            </li>))}
        </ul>
      </main>
      {status}
    </>
  )
}

export default Details

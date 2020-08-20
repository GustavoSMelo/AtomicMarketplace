import React from 'react'
import Header from '../../components/navbar'
import './style.css'
import { FaRegHeart, FaCartPlus, FaStream, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Clock from '../../assets/images/icons/relogio.svg'
import Tshirt from '../../assets/images/icons/camiseta.svg'
import Shoe from '../../assets/images/icons/sapato.svg'
import Sneakers from '../../assets/images/icons/tenis.svg'
import Social from '../../assets/images/icons/gravata.svg'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <section className='menu'>
          <aside>
            <ul>
              <li className='list-card'>
                <img src={Clock} />  Novos produtos
              </li>

              <li className='list-card'>
                <img src={Shoe} /> Sapatos
              </li>

              <li className='list-card'>
                <img src={Sneakers} /> Ténis
              </li>

              <li className='list-card'>
                <img src={Tshirt} /> Camisetas
              </li>

              <li className='list-card'>
                <img src={Social} /> Social
              </li>
            </ul>
          </aside>
          <article>

          </article>
        </section>
        <ul data-testid='product-list'>
          <li data-testid='product' className='list-card'>
            <span className='IconContainer'>
              <span className='heart'>
                <FaRegHeart color={'#f00'} />
              </span>
              <span>
                4.3 <FaStar color={'#C7BD61'} />
              </span>
            </span>
            <h3>All-star</h3>
            <figure>
              <img src='https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png' alt='product image' />
            </figure>
            <h1>R$ 100.00</h1>
            <button type='button' className='Cart'>
              <FaCartPlus /> Carrinho
            </button>
            <Link to='/product/details' className='Details'>
              <FaStream /> Detalhes
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Main

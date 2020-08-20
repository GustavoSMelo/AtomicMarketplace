import React from 'react'
import Header from '../../components/navbar'
import './style.css'
import { FaRegHeart, FaCartPlus, FaStream, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <ul data-testid='product-list'>
          <li data-testid='product'>
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

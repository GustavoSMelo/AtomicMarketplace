import React from 'react'
import './style.css'
import Header from '../../components/navbar'
import { FaCartPlus, FaRegHeart, FaStar } from 'react-icons/fa'

const Details = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <article className='product'>
          <figure data-testid='photo' className='photo'>
            <img src='https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png' alt='photo product' />
          </figure>
          <aside className='informations'>
            <section className='title'>
              <h1>All-star</h1>
              <span className='heart'>
                <FaRegHeart color={'#f00'} />
              </span>
            </section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga eaque delectus amet harum similique unde excepturi architecto nihil officia, ea voluptatibus illo necessitatibus iste enim! Nihil ipsa tenetur non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, impedit exercitationem, fugiat aliquid laudantium iure expedita eius rem ratione neque non nemo, deserunt repellendus? Facere quidem nisi a error molestias.
            </p>
            <section className='RowContainer'>
              <h1>BRL 120.00</h1> <h2>15 restantes</h2>
            </section>
            <button type='button' className='cart'>
              <FaCartPlus /> Add in cart
            </button>
          </aside>
        </article>
        <section className='commentaryContainer'>
          <h1>Reviews:
            <br />
            4.3 <FaStar color={'#C7BD61'} />
          </h1>
          <section className='commentary'>
          </section>
        </section>
      </main>
    </>
  )
}

export default Details

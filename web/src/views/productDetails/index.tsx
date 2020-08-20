import React from 'react'
import './style.css'
import Header from '../../components/navbar'
import { FaCartPlus, FaRegHeart, FaStar } from 'react-icons/fa'

const Details = () => {
  return (
    <>
      <Header />
      <main className='container' data-testid='product'>
        <article className='product'>
          <figure data-testid='photo' className='photo'>
            <img src='https://cdn.pixabay.com/photo/2013/07/12/18/20/chucks-153310_960_720.png' alt='photo_product' />
          </figure>
          <aside className='informations'>
            <section className='title' data-testid='name'>
              <h1>All-star</h1>
              <span className='heart' data-testid='favorite'>
                <FaRegHeart color={'#f00'} />
              </span>
            </section>
            <p data-testid='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga eaque delectus amet harum similique unde excepturi architecto nihil officia, ea voluptatibus illo necessitatibus iste enim! Nihil ipsa tenetur non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, impedit exercitationem, fugiat aliquid laudantium iure expedita eius rem ratione neque non nemo, deserunt repellendus? Facere quidem nisi a error molestias.
            </p>
            <section className='RowContainer'>
              <h1 data-testid='price'>BRL 120.00</h1> <h2 data-testid='amount'>15 restantes</h2>
            </section>
            <button type='button' className='cart' data-testid='cart'>
              <FaCartPlus /> Add in cart
            </button>
          </aside>
        </article>
        <h1 data-testid='rating-product'>Reviews:
          <br />
          4.3 <FaStar color={'#C7BD61'} />
        </h1>
        <ul className='ReviewContainer' data-testid='commentaries'>
          <li className='Review'>
            <section className='RowContainer'>
              <figure>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt='avatar' />
              </figure>
              <h1 data-testid='nameUser'>Name of person</h1>
            </section>
            <p className='commentary' data-testid='commentary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus atque exercitationem, dolore earum aliquam mollitia facilis! Nesciunt, blanditiis ducimus animi veritatis labore, quam impedit consequatur magnam nulla enim cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis provident pariatur perspiciatis, temporibus sequi error molestias minima aliquid ratione, nisi dolorum dignissimos beatae nemo molestiae quidem consequatur dicta ad voluptate?
            </p>
            <small data-testid='rating-commentary'> 3.0 <FaStar color={'#C7BD61'} /></small>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Details

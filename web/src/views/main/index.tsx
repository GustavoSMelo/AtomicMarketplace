import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import { FaRegHeart, FaCartPlus, FaStream, FaStar, FaShoppingBag, FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Banner, Cart } from './styled'
import blueshoes from '../../assets/images/bannershoes2.png'
import redshoes from '../../assets/images/shoesvermelhos.png'
import purpleshoes from '../../assets/images/purpleshoes.png'
import brownshoes from '../../assets/images/brownshoes.png'
import Footer from '../../components/footer'

const Main = () => {
  const [colorBanner, setColorBanner] = useState('#00f')
  const [imageBanner, setImageBanner] = useState(blueshoes)
  const [titleBanner, setTitleBanner] = useState('Sapatos de corrida Adidas')
  const [descriptionBanner, setDescriptionBanner] = useState('Temos sapatos perfeitos para a sua caminhada ou academia')

  const changeColor = (color: string) => {
    setColorBanner(color)

    if (color === '#00f') {
      setImageBanner(blueshoes)
      setTitleBanner('Sapatos de corrida Adidas')
      setDescriptionBanner('Temos sapatos perfeitos para a sua caminhada ou academia')
    } else if (color === '#CC5A62') {
      setImageBanner(redshoes)
      setTitleBanner('Tenis de Basquete Nike')
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

          <h2>120.00 BRL</h2>
          <button type='button'>
            Adicione na sacola <FaShoppingBag />
          </button>

          <ul>
            <li style={{ backgroundColor: '#00f' }} onClick={() => changeColor('#00f')}>
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
            <section className="RowContainer">
              <Cart type='button' background={'#fff'} color={'#67D651'}>
                <FaShoppingBag />
              </Cart>
              <Link to='/product/details' className='Details'>
                <FaStream /> Detalhes
              </Link>
            </section>
          </li>
        </ul>
      </Container>
      <Footer />
    </>
  )
}

export default Main

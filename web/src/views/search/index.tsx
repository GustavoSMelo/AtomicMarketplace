import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Input from '../../components/input'
import { Container } from './styled'
import { FaSearch, FaHeart, FaStar, FaShoppingBag, FaStream, FaSteam } from 'react-icons/fa'

import NovosItens from '../../assets/images/icons/novos-itens.svg'
import RoupaCasual from '../../assets/images/icons/roupa-casual.svg'
import RoupaEsportiva from '../../assets/images/icons/roupa-esportiva.svg'
import RoupaSocial from '../../assets/images/icons/roupa-social.svg'
import SapatoCasual from '../../assets/images/icons/sapato-casual.svg'
import SapatoEsportivo from '../../assets/images/icons/sapato-esportivo.svg'
import SapatoSocial from '../../assets/images/icons/sapato-social.svg'
import SapatosFemininosSocial from '../../assets/images/icons/sapatos-feminino-social.svg'
import Vestidos from '../../assets/images/icons/vestidos.svg'

import Footer from '../../components/footer'
import Image from '../../assets/images/bannershoes2.png'
import { Link } from 'react-router-dom'

const Search = () => {
  const [needHelp, setNeedHelp] = useState(true)

  return (
    <>
      <Navbar />
      <Container data-testid='container' needHelp={needHelp}>
        <article className='InputSearch'>
          <Input type='text' placeholder='Qual produto você procura ?' />
          <button data-testid='search-button'>
            <FaSearch />
          </button>
        </article>
        <section className='HelpSearch'>
          <h1>
            Precisa de ajuda para encontrar o que deseja ?
            <br />
            Alguns tópicos para lhe auxiliar :)
          </h1>
          <ul data-testid='list'>
            <li onClick={() => setNeedHelp(false)}>
              <figure>
                <img src={NovosItens} />
                <figcaption>Novos itens</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaCasual} />
                <figcaption>Roupas Casuais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaEsportiva} />
                <figcaption>Roupas Esportivas</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatosFemininosSocial} />
                <figcaption>Sapatos Sociais femininos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoEsportivo} />
                <figcaption>Sapatos esportivos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoSocial} />
                <figcaption>Sapatos sociais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={Vestidos} />
                <figcaption>Vestidos</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={RoupaSocial} />
                <figcaption>Roupas Sociais</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src={SapatoCasual} />
                <figcaption>Sapatos casuais</figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <article className='SearchContainer'>
          <section className='RowContainer'>
            <h2>Resultados da pesquisa: Novos Itens</h2>
            <small>4 Itens encontrado na sua pesquisa</small>
          </section>
          <ul className='SearchProducts'>
            <li>
              <span className='HeaderContainer'>
                <FaHeart size={20} color='#f00' />
                <span>
                  <FaStar size={20} color='#FFF36B'/> 4.0
                </span>
              </span>
              <figure>
                <img src={Image} alt='Product' />
              </figure>
              <small>Name of product</small>
              <h1>120.00 BRL</h1>
              <section className='Controls'>
                <FaShoppingBag className='Bag' size={30} />
                <Link className='ButtonLink' to='/product/details'>
                  <button><FaStream /> {'  '}Details</button>
                </Link>
              </section>
            </li>

            <li>
              <span className='HeaderContainer'>
                <FaHeart size={20} color='#f00' />
                <span>
                  <FaStar size={20} color='#FFF36B'/> 4.0
                </span>
              </span>
              <figure>
                <img src={Image} alt='Product' />
              </figure>
              <small>Name of product</small>
              <h1>120.00 BRL</h1>
              <section className='Controls'>
                <FaShoppingBag className='Bag' size={30} />
                <Link className='ButtonLink' to='/product/details'>
                  <button><FaStream /> {'  '}Details</button>
                </Link>
              </section>
            </li>

            <li>
              <span className='HeaderContainer'>
                <FaHeart size={20} color='#f00' />
                <span>
                  <FaStar size={20} color='#FFF36B'/> 4.0
                </span>
              </span>
              <figure>
                <img src={Image} alt='Product' />
              </figure>
              <small>Name of product</small>
              <h1>120.00 BRL</h1>
              <section className='Controls'>
                <FaShoppingBag className='Bag' size={30} />
                <Link className='ButtonLink' to='/product/details'>
                  <button><FaStream /> {'  '}Details</button>
                </Link>
              </section>
            </li>

            <li>
              <span className='HeaderContainer'>
                <FaHeart size={20} color='#f00' />
                <span>
                  <FaStar size={20} color='#FFF36B'/> 4.0
                </span>
              </span>
              <figure>
                <img src={Image} alt='Product' />
              </figure>
              <small>Name of product</small>
              <h1>120.00 BRL</h1>
              <section className='Controls'>
                <FaShoppingBag className='Bag' size={30} />
                <Link className='ButtonLink' to='/product/details'>
                  <button><FaStream /> {'  '}Details</button>
                </Link>
              </section>
            </li>
          </ul>
        </article>
      </Container>
      <Footer />
    </>
  )
}

export default Search

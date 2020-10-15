import React, { useState, useEffect } from 'react'
import api from '../../api'
import { Container } from './styled'
import EditProfileIcon from '../../assets/images/icons/config_profile.svg'
import AddProductIcon from '../../assets/images/icons/plus.svg'
import Trash from '../../assets/images/icons/trash.svg'
import Shutdown from '../../assets/images/icons/shutdown.svg'
import { Link } from 'react-router-dom'
import ProductInterface from '../../interfaces/ProductInterface'
import { FaEye, FaPencilAlt } from 'react-icons/fa'

const SalesmanHub = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])

  const getDataByApi = async () => {
    const response_salesman = await api.get<ProductInterface[]>('/salesman/show', {
      headers: {
        searchid: localStorage.getItem('salesmanid') }
    })

    const response_products = await api.get('/products/show/salesman', {
      headers: {
        salesman_id: localStorage.getItem('salesmanid')
      }
    })

    setProducts(response_products.data)
  }

  const Logout = () => {
    localStorage.removeItem('salesmanname')
    localStorage.removeItem('salesmanemail')
    localStorage.removeItem('salesmanid')
    localStorage.removeItem('token')
  }

  useEffect(() => {
    getDataByApi()
  })
  return (
    <Container>
      <h1>Seja bem vindo vendedor</h1>
      <h2>O que deseja fazer ?</h2>
      <section>
        <Link className='link' to='/edit/salesman'>
          <figure>
            <img src={EditProfileIcon} alt='profile config icon' />
            <figcaption>Editar perfil</figcaption>
          </figure>
        </Link>
        <Link className='link' to='/salesman/create/product'>
          <figure>
            <img src={AddProductIcon} alt='add product' />
            <figcaption>Adicionar produto</figcaption>
          </figure>
        </Link>
        <Link className='link' to='/salesman/delete/product'>
          <figure>
            <img src={Trash} alt='remove product'/>
            <figcaption>Remover produto(s)</figcaption>
          </figure>
        </Link>

        <Link className='link' to='/' onClick={() => Logout()}>
          <figure>
            <img src={Shutdown} alt='Shutdown button'/>
            <figcaption>Desligar</figcaption>
          </figure>
        </Link>
      </section>
      <h1 className='product-title'>Este são os produtos adicionados por você: </h1>
      <article>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <figure>
                  <img src={`http://localhost:3333/uploads/${product.product_image}`} />
                  <figcaption>
                    <strong>Nome: </strong>{product.product_name}<br/>
                    <strong>Marca: </strong>{product.brand}<br/>
                    <strong>Tipo: </strong>{product.kind_prod}<br/>
                    <strong>Quantidade: </strong>{product.amount}<br/>
                  </figcaption>
                </figure>
                <span>
                  <Link to={`/product/details/${product.id}`}><FaEye color='#0f0' size={36} /> </Link>
                  <Link to={`/salesman/edit/product/${product.id}`}><FaPencilAlt color='#FBE743' size={36} /></Link>
                </span>
              </li>
            )
          })}
        </ul>
      </article>
    </Container>
  )
}

export default SalesmanHub

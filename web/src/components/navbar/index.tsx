import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Navbar = () => {
  return (
    <header>
      <figure>
        <h1>logo</h1>
      </figure>
      <nav>
        <Link className='Link' to='/'>
          <h2>
            Camisas
          </h2>
        </Link>
        <Link className='Link' to='/'>
          <h2>
            Sapatos
          </h2>
        </Link>

        <Link className='Link' to='/'>
          <h2>Cadastre-se</h2>
        </Link>
        <Link className='Button' to='/'>
          <h2>Login</h2>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar

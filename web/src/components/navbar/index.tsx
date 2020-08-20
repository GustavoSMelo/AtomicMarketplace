import React from 'react'
import { Link } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'
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
      </nav>

      <section>
        <Link className='search' to='/'>
          <FaSearch />
        </Link>
        <Link className='Button' to='/'>
          <h2>Login</h2>
        </Link>
      </section>
    </header>
  )
}

export default Navbar

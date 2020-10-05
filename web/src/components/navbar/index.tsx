import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaRegUserCircle, FaShoppingBag } from 'react-icons/fa'
import './style.css'
import isLogged from '../../utils/VerifyLogin'

const Navbar = () => {
  const [log, setLog] = useState(false)

  const userHaveLogin = async () => {
    const response = await isLogged()
    setLog(response)
  }
  useEffect(() => { userHaveLogin() }, [log])

  const Layout = () => {
    if (log) {
      return (
        <>
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
              <Link className='Touchable' to='/search'>
                <FaSearch />
              </Link>
              <Link className='Touchable Bag' to='/cart'>
                <FaShoppingBag />
              </Link>
              <Link className='Touchable' to='/user/profile'>
                <FaRegUserCircle color='#000' /> <h1></h1>
              </Link>
            </section>
          </header>
        </>
      )
    } else {
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
            <Link className='Touchable' to='/search'>
              <FaSearch />
            </Link>
            <Link className='Button' to='/login'>
              <h2>Login</h2>
            </Link>
          </section>
        </header>
      )
    }
  }

  return Layout()
}

export default Navbar

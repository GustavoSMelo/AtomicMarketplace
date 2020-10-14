import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaSearch, FaRegUserCircle, FaShoppingBag } from 'react-icons/fa'
import './style.css'
import isLogged from '../../utils/VerifyLogin'
import Logo from '../../assets/images/icons/logo.png'

const Navbar = () => {
  const [log, setLog] = useState(false)
  const history = useHistory()

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
            <figure onClick={() => history.push('/')}>
              <img className='logo' src={Logo} alt='logo'/>
            </figure>

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
            <img className='logo' src={Logo} alt='logo'/>
          </figure>

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

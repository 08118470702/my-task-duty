import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {

  console.log(cart.length);
  return (
    <>
      <nav className='nav-container'>
        <h2>Eggys</h2>
        <ul>
          <li>
            <Link className='text-white' to="/">Home </Link>
          </li>

          <li>
            <Link className='text-white' to="fetch">About</Link>
          </li>
          <li>
            <Link className='text-white' to="form">Form</Link>
          </li>

        </ul>
        <h2>cart({cart.length})</h2>
      </nav>
    </>
  )
}

export default Navbar
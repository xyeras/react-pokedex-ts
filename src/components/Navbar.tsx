import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary d-flex'>
        <Link className='navbar-brand' to='/'>
          Pokedex
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar navbar-expand-lg d-flex'>
            <Link className='nav-link text-white' to='/'>
              Dashboard
            </Link>
            <Link className='nav-link text-white' to='/pokemon/:pokemonId'>
              Pokemon
            </Link>

          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
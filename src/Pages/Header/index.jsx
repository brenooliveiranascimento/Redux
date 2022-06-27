import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './styles.css'
import logo from '../../assets/logo.svg'

function Header() {

  const reserveSize = useSelector(reducer => reducer.reserva)

    return (
      <header className='container'>
        <Link to={'/'}>
          <img className="imageLogo" src={logo} alt="Aviãozinho"/>
        </Link>

        <Link to={'Reservas'}>
          <div className='reserva'>
            <strong>Minhas reservas</strong>
            <span>{reserveSize.length} reservas</span>
          </div>
        </Link>
      </header>
    )
}

export default Header;

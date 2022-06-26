import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.svg'

class Header extends React.Component {
  render() {
    return (
      <header className='container'>
        <Link to={'/'}>
          <img className="imageLogo" src={logo} alt="Aviãozinho"/>
        </Link>

        <Link to={'Reservas'}>
          <div className='reserva'>
            <strong>Minhas reservas</strong>
            <span>0 reservas</span>
          </div>
        </Link>
      </header>
    )
  }
}

export default Header;

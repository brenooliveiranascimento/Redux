import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <p>Home</p>
        </Link>     

        <Link to={'/Reservas'}>
          <p>Home</p>
        </Link>        
      </div>
    )
  }
}

export default Header;

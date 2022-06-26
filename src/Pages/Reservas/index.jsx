import React from 'react';
import './style.css'

class Reservas extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>Você solicitou 1 reservas!</h1>

        <div className='reservas'>
          <img
            src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg'
            alt='maceio'
            />
            <strong>Viagem maceio 7 idas</strong>
            <span>quantidade 2</span>
            <button
              type='button'
              onClick={() => {}}>
              <span>
                deletar
              </span>
            </button>
        </div>
      </div>
    )
  }
}

export default Reservas;

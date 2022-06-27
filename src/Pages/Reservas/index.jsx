import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

function Reservas() {

  const myReserves = useSelector( reducers => reducers.reserva )
  
    return (
      <div>
        <h1 className='title'>Você solicitou {myReserves.length} reservas!</h1>
      {
        myReserves.map((reserva) => (
          <div key={reserva.id} className='reservas'>
          <img
            src={reserva.image}
            alt={reserva.title}
            />
            <strong>{reserva.title}</strong>
            <span>quantidade 2</span>
            <button
              type='button'
              onClick={() => {}}>
              <span>
                deletar
              </span>
            </button>
        </div>
        ))
      }
       
      </div>
    )
}

export default Reservas;

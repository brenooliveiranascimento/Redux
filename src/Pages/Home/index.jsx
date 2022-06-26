import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css'

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const getTrips = async () => {
      const response = await api.get('trips')
      setTrips(response.data);
      console.log(response.data);
    }
    getTrips();
  }, [])
    return (
      <div>
        <div className='box'>
          {
            trips.map(trip => (
              <li key={trip.id}>
                <img src={trip.image} alt={trip.title}/>
                <strong>{trip.title}</strong>
                <span>status: { trip.status ? 'disponivél' : 'indisponivel' }</span>
                <button
                  onClick={() => {}}>
                    <span>SOLICITAR RESERVA</span>
                </button>
              </li>
            ))
          }
        </div>
      </div>
    )
}

export default Home;

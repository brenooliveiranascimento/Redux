import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import './style.css'

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  const handleTrip = (trip) => {
    dispatch({
      type: 'ADD_RESERVA',
      trip
    })
  }

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
                  onClick={() => handleTrip(trip)}>
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

import React from 'react';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './Pages/Header';

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App;

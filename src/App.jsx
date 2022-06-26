import React from 'react';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './Pages/Header';
import { Provider } from 'react-redux';
import store from './store/index'

function App() {
  return(
    <Provider
      store={store}>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;

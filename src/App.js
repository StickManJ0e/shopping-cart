import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Main cartItems={cartItems} setCartItems={setCartItems} />
    </BrowserRouter>
  )
}

export default App;

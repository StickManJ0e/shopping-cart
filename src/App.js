import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { CartItemsProvider } from './components/CartItemsContext';


const App = () => {
  return (
    <CartItemsProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </CartItemsProvider>
  )
}

export default App;

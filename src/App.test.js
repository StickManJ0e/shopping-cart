import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Cart component', () => {
  const user = userEvent.setup();

  it('Dispay cart is empty when empty', async () => {
    render(<App />);
    const cartButton = screen.getByText('Cart');
    await user.click(cartButton);

    expect(screen.getByText('Your bag is empty')).toBeTruthy();
  })

  it('Change checkout button when cart is empty', async () => {
    render(<App />);
    const cartButton = screen.getByText('Cart');
    await user.click(cartButton);

    expect(screen.getByRole('link', { name: 'Browse Products' })).toBeTruthy();
  })

  it('Display Cart Items', async () => {
    render(<App />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);
    const addToCart = screen.getAllByRole('button', { name: 'Add To Cart' })[0];
    await user.click(addToCart);
    const cartButton = screen.getByText('Cart');
    await user.click(cartButton);
    expect(screen.queryByText('Your bag is empty')).toBeFalsy();
  })

  it('Chnages checkout button when cart has items', async () => {
    render(<App />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);
    const addToCart = screen.getAllByRole('button', { name: 'Add To Cart' })[0];
    await user.click(addToCart);
    const cartButton = screen.getByText('Cart');
    await user.click(cartButton);
    expect(screen.queryByRole('link', { name: 'Browse Products' })).toBeFalsy();
  })
})

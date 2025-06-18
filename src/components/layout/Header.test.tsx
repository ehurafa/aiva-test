import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders the logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logo = screen.getByText('Aiva Shop');
    expect(logo).toBeInTheDocument();

    const clothesLink = screen.getByText('Clothes');
    const electronicsLink = screen.getByText('Electronics');
    const shoesLink = screen.getByText('Shoes');

    expect(clothesLink).toBeInTheDocument();
    expect(electronicsLink).toBeInTheDocument();
    expect(shoesLink).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Buscar produtos...');
    expect(searchInput).toBeInTheDocument();
  });
});

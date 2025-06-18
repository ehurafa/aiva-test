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

    // Verifica se o logo está presente
    const logo = screen.getByText('Aiva Shop');
    expect(logo).toBeInTheDocument();

    // Verifica os links de navegação
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

    // Verifica o input de busca
    const searchInput = screen.getByPlaceholderText('Buscar produtos...');
    expect(searchInput).toBeInTheDocument();
  });
});

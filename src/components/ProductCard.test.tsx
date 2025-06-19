import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useCartAndFavoritesStore } from '../store/useCartAndFavoritesStore';
import ProductCard from './ProductCard';
import { act } from '@testing-library/react';

jest.mock('../store/useCartAndFavoritesStore', () => {
  const actualZustand = jest.requireActual('zustand');

  const store = actualZustand.create(() => ({
    addToCart: jest.fn(),
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
    favorites: [],
  }));

  return {
    ...actualZustand,
    useCartAndFavoritesStore: store,
  };
});

describe('ProductCard Component', () => {
  const product = {
    id: 1,
    title: 'Product 1',
    price: 99.99,
    images: ['https://via.placeholder.com/150'],
  };

  beforeEach(() => {
    const store = useCartAndFavoritesStore as jest.MockedFunction<typeof useCartAndFavoritesStore>;

    act(() => {
      store.setState({
        addToCart: jest.fn(),
        addToFavorites: jest.fn(),
        removeFromFavorites: jest.fn(),
        favorites: [],
      });
    });
  });

  it('calls addToCart when the "Adicionar ao Carrinho" button is clicked', () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    const button = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(button);

    const store = useCartAndFavoritesStore as jest.MockedFunction<typeof useCartAndFavoritesStore>;
    expect(store.getState().addToCart).toHaveBeenCalledWith(product);
  });

  it('toggles favorite status when the "Favoritar/Desfavoritar" button is clicked', () => {
    const store = useCartAndFavoritesStore as jest.MockedFunction<typeof useCartAndFavoritesStore>;

    act(() => {
      store.setState({
        favorites: [product],
      });
    });

    const { rerender } = render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    const unfavoriteButton = screen.getByText('Desfavoritar');
    fireEvent.click(unfavoriteButton);
    expect(store.getState().removeFromFavorites).toHaveBeenCalledWith(product.id);

    act(() => {
      store.setState({
        favorites: [],
      });
    });

    rerender(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    const favoriteButton = screen.getByText('Favoritar');
    fireEvent.click(favoriteButton);
    expect(store.getState().addToFavorites).toHaveBeenCalledWith(product);
  });
});

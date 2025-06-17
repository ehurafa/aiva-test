import React from 'react'
import { useCartAndFavoritesStore } from '../store/useCartAndFavoritesStore'
import type { Product } from '../types/Product'
import { Card, Image, Title, Price, Actions, Button } from './ProductCard.styles'

type ProductCardProps = {
  product: Product;
  showAddToCart?: boolean;
  showFavorite?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showAddToCart = true,
  showFavorite = true,
}) => {
  const { addToCart, addToFavorites, removeFromFavorites, favorites } =
    useCartAndFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <Card>
      <Image src={product?.images[0]} alt={product.title} />

      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>

      <Actions>
        {showFavorite && (
          <Button
            variant={isFavorite ? 'favoriteActive' : 'favorite'}
            onClick={() =>
              isFavorite ? removeFromFavorites(product.id) : addToFavorites(product)
            }
          >
            {isFavorite ? 'Desfavoritar' : 'Favoritar'}
          </Button>
        )}

        {showAddToCart && (
          <Button variant="cart" onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </Button>
        )}
      </Actions>
    </Card>
  )
}

export default ProductCard

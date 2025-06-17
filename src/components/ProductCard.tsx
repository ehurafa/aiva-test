import React from 'react'
import { Link } from 'react-router-dom'
import { useCartAndFavoritesStore } from '../store/useCartAndFavoritesStore'
import type { Product } from '../types/Product'
import { Card, Image, Title, Price, Actions, Button, CardLink } from './ProductCard.styles'

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
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardLink>
          <Image src={product.images[0]} alt={product.title} />
          <Title>{product.title}</Title>
          <Price>R$ {product.price.toFixed(2)}</Price>
        </CardLink>
      </Link>

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

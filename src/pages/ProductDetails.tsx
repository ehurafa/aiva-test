import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore'
import { useCartAndFavoritesStore } from '../store/useCartAndFavoritesStore'
import { Button } from '../components/Button'
import {
  Container,
  Image,
  InfoContainer,
  Title,
  Price,
  Description,
} from './ProductDetails.styles'

export const ProductDetails: FC = () => {
  const { productId } = useParams()

  const product = useProductStore((state) =>
    state.products.find((product) => product.id === Number(productId))
  )

  const { addToCart } = useCartAndFavoritesStore()

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
    }
  }

  if (!product) {
    return <p>Produto não encontrado</p>
  }

  return (
    <Container>
      <Image src={product.images[0]} alt={product.title} />
      <InfoContainer>
        <Title>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Description>{product.description}</Description>
        <Button
          mode="button"
          size="large"
          variant="primary"
          onClick={() => {
            handleAddToCart()
          }}
        >
          Adicionar ao carrinho
        </Button>
      </InfoContainer>
    </Container>
  )
}

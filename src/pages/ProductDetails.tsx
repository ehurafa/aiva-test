import type { FC } from 'react'
import { useParams } from "react-router-dom"
import { useProductStore } from '../store/useProductStore';
import {
  Container,
  Image,
  InfoContainer,
  Title,
  Price,
  Description,
  Button,
} from './ProductDetails.styles';

export const ProductDetails: FC = () => {
    const { productId } = useParams()

    const product = useProductStore((state) =>
      state.products.find((product) => product.id === Number(productId))
    )

    if (!product) {
      return <p>Produto não encontrado</p>;
    }


  return <Container>
      <Image src={product.images[0]} alt={product.title} />
      <InfoContainer>
        <Title>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Description>{product.description}</Description>
        <Button
          onClick={() => {
            useProductStore.getState().addToCart(product);
          }}
        >
          Adicionar ao carrinho
        </Button>
      </InfoContainer>
    </Container>
}

import { FC, useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';
import { Container, BannerSection, BannerItem, SectionTitle, ProductsGrid, ProductCard, ProductImage, ProductTitle, ProductPrice } from './Home.styles';

export const Home: FC = () => {
  const { products, fetchProducts, isLoading, error } = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, []);

  const featured = products.slice(0, 4);

  return (
    <Container>
      <BannerSection>
        <div>
          {[1, 2, 3, 4].map((i) => (
            <BannerItem key={i}>Banner {i}</BannerItem>
          ))}
        </div>
      </BannerSection>

      <section>
        <SectionTitle>Destaques</SectionTitle>

        {isLoading && <p>Carregando produtos...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && (
          <ProductsGrid>
            {featured.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.images?.[0]} alt={product.title} />
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>R$ {product.price}</ProductPrice>
              </ProductCard>
            ))}
          </ProductsGrid>
        )}
      </section>
    </Container>
  )
}

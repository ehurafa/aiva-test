import { FC, useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { Container, BannerSection, BannerItem, SectionTitle, ProductsGrid, ProductError } from './Home.styles'
import ProductCard from '../components/ProductCard'

export const Home: FC = () => {
  const { products, fetchProducts, isLoading, error } = useProductStore()

  const NUMBER_OF_PRODUCTS_FEATURED = 4

  useEffect(() => {
    fetchProducts(NUMBER_OF_PRODUCTS_FEATURED)
  }, [])

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
        {!error && <ProductError>{error}</ProductError>}

        {!isLoading && !error && (
          <ProductsGrid>
            {products.map((product) => (
    
              <ProductCard
                key={product.id}
                product={
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    images: product.images,
                  }
              }>
              </ProductCard>

            ))}
          </ProductsGrid>
        )}
      </section>
    </Container>
  )
}

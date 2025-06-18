import { FC, useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { Container, BannerSection, BannerItem, SectionTitle, ProductsGrid, ProductError } from './Home.styles'
import ProductCard from '../components/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export const Home: FC = () => {
  const { products, fetchProducts, isLoading, error } = useProductStore()

  const NUMBER_OF_PRODUCTS_FEATURED = 4

  useEffect(() => {
    fetchProducts(NUMBER_OF_PRODUCTS_FEATURED)
  }, [])

  const banners = [
    { id: 1, label: 'Banner 1' },
    { id: 2, label: 'Banner 2' },
    { id: 3, label: 'Banner 3' },
  ]

  return (
    <Container>
      <BannerSection>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          spaceBetween={20}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <BannerItem>
                <h2>{banner.label}</h2>
              </BannerItem>
            </SwiperSlide>
          ))}
        </Swiper>
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

import { FC, useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { useParams } from 'react-router-dom'
import { Container, ProductGrid } from './Category.styles'
import ProductCard from '../components/ProductCard'

export const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const { products, setCategory } = useProductStore()

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId)
    }
  }, [categoryId, setCategory])

  return (
    <Container>
      <h1>{categoryId} Products</h1>
      <ProductGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                images: product.images,
              }}
            ></ProductCard>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ProductGrid>
    </Container>
  )
}

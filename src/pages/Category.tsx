import React, { FC, useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';
import { useParams } from 'react-router-dom';
import { Container, ProductGrid, ProductCard } from './Category.styles';

export const Category = () => {
  const { categoryId } = useParams<{ category: string }>();
  const { products, setCategory } = useProductStore();

  useEffect(() => {
    setCategory(categoryId);
  }, [categoryId, setCategory]);

  return (
    <Container>
      <h1>{categoryId} Products</h1>
      <ProductGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{`$${product.price}`}</p>
            </ProductCard>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ProductGrid>
    </Container>
  );
}

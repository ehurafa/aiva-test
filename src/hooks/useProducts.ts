import { useProductStore } from '../store/useProductStore'

export const useProducts = () => {
  const { products, isLoading, error, fetchProducts, setCategory } =
    useProductStore()

  return {
    products,
    isLoading,
    error,
    fetchProducts,
    setCategory,
  }
}

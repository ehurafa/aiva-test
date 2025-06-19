import axios from 'axios'
import type { Product } from '../types/Product'

const API_BASE_URL = 'https://api.escuelajs.co/api/v1'

export const fetchProducts = async (
  limit: number,
  offset: number
): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(
    `${API_BASE_URL}/products?offset=${offset}&limit=${limit}`
  )
  return data
}

export const fetchProductsByCategory = async (
  categoryId: string
): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(
    `${API_BASE_URL}/categories/${categoryId}/products`
  )
  return data
}

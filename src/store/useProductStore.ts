import { create } from 'zustand'
import { fetchProducts, fetchProductsByCategory } from '../api/products'
import type { Product } from '../types/Product'

type ProductStore = {
  products: Product[]
  cart: Product[]
  isLoading: boolean
  error: string | null
  fetchProducts: (limit?: number, offset?: number) => Promise<void>
  setCategory: (category: string) => Promise<void>
  addToCart: (product: Product) => void
}

const PRODUCTS_PER_PAGE = 20

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentCategoryId: '',
  cart: [],

  isLoading: false,
  error: null,

  fetchProducts: async (limit = PRODUCTS_PER_PAGE, offset = 0) => {
    set({ isLoading: true, error: null })
    try {
      const data = await fetchProducts(limit, offset)
      set({ products: data, isLoading: false })
    } catch (error) {
      set({ error: 'Erro ao carregar produtos', isLoading: false })
    }
  },

  setCategory: async (categoryId: string) => {
    set({ isLoading: true, error: null })
    try {
      const data = await fetchProductsByCategory(categoryId)
      set({ products: data, isLoading: false })
    } catch (error) {
      set({ error: 'Erro ao carregar produtos da categoria', isLoading: false })
    }
  },

  addToCart: (product: Product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}))

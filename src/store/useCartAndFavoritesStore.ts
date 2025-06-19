import { create } from 'zustand'
import type { Product } from '../types/Product'

type CartItem = {
  product: Product
  quantity: number
}

type CartAndFavoritesState = {
  cart: CartItem[]
  favorites: Product[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateCartQuantity: (productId: number, quantity: number) => void
  addToFavorites: (product: Product) => void
  removeFromFavorites: (productId: number) => void
}

export const useCartAndFavoritesStore = create<CartAndFavoritesState>(
  (set, get) => ({
    cart: [],
    favorites: [],

    addToCart: (product, quantity = 1) => {
      set((state) => {
        const existingItem = state.cart.find(
          (item) => item.product.id === product.id
        )
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          }
        }
        return {
          cart: [...state.cart, { product, quantity }],
        }
      })
    },

    removeFromCart: (productId) => {
      set((state) => ({
        cart: state.cart.filter((item) => item.product.id !== productId),
      }))
    },

    updateCartQuantity: (productId, quantity) => {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
      }))
    },

    addToFavorites: (product) => {
      set((state) => {
        if (state.favorites.find((fav) => fav.id === product.id)) {
          return state
        }
        return {
          favorites: [...state.favorites, product],
        }
      })
    },

    removeFromFavorites: (productId) => {
      set((state) => ({
        favorites: state.favorites.filter((fav) => fav.id !== productId),
      }))
    },
  })
)

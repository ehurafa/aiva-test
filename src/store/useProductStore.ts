import { create } from 'zustand';
import axios from 'axios';
import type { Product } from '../types/Product';

type ProductStore = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: (limit?: number, offset?: number) => Promise<void>;
  setCategory: (category: string) => Promise<void>;
}

const PRODUCS_PER_PAGE = 20

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentCategoryId: '',

  isLoading: false,
  error: null,

  fetchProducts: async (limit = PRODUCS_PER_PAGE, offset = 0) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
      set({ products: data, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar produtos', isLoading: false });
    }
  },

  setCategory: async (categoryId: string) => {
    set({ currentCategoryId: categoryId });

    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?limit=${PRODUCS_PER_PAGE}&offset=1`
      );
      set({ products: response.data });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  },
}))

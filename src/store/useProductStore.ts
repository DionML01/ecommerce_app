// store/useProductStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { StaticImageData } from "next/image";

import Img1 from "../Assets/NewArrivalsImg1.png";
import Img2 from "../Assets/NewArrivalsImg2.png";
import Img3 from "../Assets/NewArrivalsImg3.png";
import Img4 from "../Assets/NewArrivalsImg4.png";

export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: StaticImageData;
}

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  isLoading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updated: Partial<Product>) => void;
  removeProduct: (id: number) => void;
  clearProducts: () => void;

  searchProducts: (query: string) => Product[];
}

// ✅ Define default products outside for reuse
const defaultProducts: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    oldPrice: 0,
    discount: 0,
    image: Img1,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    image: Img2,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    oldPrice: 0,
    discount: 0,
    image: Img3,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 240,
    oldPrice: 260,
    discount: 20,
    image: Img4,
  },
  {
    id: 5, // Changed from 1 to 5
    title: "T-shirt with Tape Details",
    price: 120,
    oldPrice: 0,
    discount: 0,
    image: Img1,
  },
  {
    id: 6, // Changed from 2 to 6
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    image: Img2,
  },
  {
    id: 7, // Changed from 3 to 7
    title: "Checkered Shirt",
    price: 180,
    oldPrice: 0,
    discount: 0,
    image: Img3,
  },
  {
    id: 8, // Changed from 4 to 8
    title: "Sleeve Striped T-shirt",
    price: 240,
    oldPrice: 260,
    discount: 20,
    image: Img4,
  },
];

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: defaultProducts, // initial state
      selectedProduct: null,
      isLoading: false,
      error: null,

      fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          const products: Product[] = defaultProducts;
          set({ products });
        } catch (err: unknown) {
          if (err instanceof Error) {
            set({ error: err.message });
          } else {
            set({ error: String(err) });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      fetchProductById: async (id) => {
        set({ isLoading: true, error: null });
        try {
          const product = get().products.find((p) => p.id === id) || null;

          set({ selectedProduct: product });
        } catch (err: unknown) {
          if (err instanceof Error) {
            set({ error: err.message });
          } else {
            set({ error: String(err) });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      addProduct: (product) => {
        set({ products: [...get().products, product] });
      },

      updateProduct: (id, updated) => {
        set({
          products: get().products.map((p) =>
            p.id === id ? { ...p, ...updated } : p
          ),
        });
      },

      removeProduct: (id) => {
        set({ products: get().products.filter((p) => p.id !== id) });
      },

      clearProducts: () => set({ products: [], selectedProduct: null }),

      searchProducts: (query) => {
        const { products } = get();
        return products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );
      },
    }),
    {
      name: "product-storage",

      // ✅ Ensures defaults load if storage is empty or corrupted
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.products = defaultProducts; // replace any old, possibly duplicate products
        }
      },
    }
  )
);

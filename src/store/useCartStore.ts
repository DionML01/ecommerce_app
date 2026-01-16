// store/useCartStore.ts
import { StaticImageData } from "next/image";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import Img1 from "../Assets/CartImg1.png";
import Img2 from "../Assets/CartImg2.png";
import Img3 from "../Assets/CartImg3.png";
import toast from "react-hot-toast";

enum Sizes {
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
  size: string;
  color: string;
}

const defaultCartItems: CartItem[] = [
  {
    id: 10,
    name: "Gradient Graphic T-shirt",
    size: Sizes.Large,
    color: "White",
    price: 145,
    quantity: 1,
    image: Img1,
  },
  {
    id: 11,
    name: "Checkered Shirt",
    size: Sizes.Medium,
    color: "Red",
    price: 180,
    quantity: 1,
    image: Img2,
  },
  {
    id: 12,
    name: "Skinny Fit Jeans",
    size: Sizes.Small,
    color: "Blue",
    price: 240,
    quantity: 1,
    image: Img3,
  },
];

interface CartState {
  items: CartItem[];
  discount: number;
  deliveryFee: number;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void; // 👈 allow quantity
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  getSubtotal: () => number;
  setDiscount: (discount: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [], // <-- Start with empty, let onRehydrateStorage handle defaults
      discount: 0,
      deliveryFee: 15,

      addItem: (item) => {
        const { items } = get();

        // ✅ validate required fields
        if (!item.id || !item.name || typeof item.price !== "number") {
          toast.error("Invalid product data.");
          return;
        }

        const existingItem = items.find((i) => i.id === item.id);
        const qtyToAdd = item.quantity ?? 1;

        try {
          if (existingItem) {
            set({
              items: items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + qtyToAdd } : i
              ),
            });
          } else {
            set({ items: [...items, { ...item, quantity: qtyToAdd }] });
          }
        } catch (error) {
          console.error("Failed to add item to cart:", error);
          toast.error("Couldn't add product to cart. Please try again later.");
          throw error; // ✅ rethrow so caller/UI can react if needed
        }
      },

      removeItem: (id) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        const { items } = get();
        set({
          items: items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;

        const discountAmount = subtotal * (get().discount / 100);
        return subtotal - discountAmount;
      },

      setDiscount(discount) {
        set({
          discount: discount,
        });
      },
    }),
    {
      name: "cart-storage",
      onRehydrateStorage: () => (state) => {
        if (state && state.items.length === 0) {
          state.items = defaultCartItems;
        }
        // Ensure discount does not persist stale values across sessions
        if (state) {
          state.discount = 0;
        }
      },
    }
  )
);

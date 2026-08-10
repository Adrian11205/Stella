import { Product } from "@/api/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartProduct {
  product: Product;
  quantity: number;
}

interface CartStore {
  products: CartProduct[];
  setProduct: (product: CartProduct) => void;
  deleteProduct: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  clearCart: (product: CartProduct) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],

      setProduct: (product) => {
        const existItem = get().products.find(
          (item) => item.product.id === product.product.id);

        if (existItem) {
        }

        return set((state) => ({
          products: [...state.products,product],
        }));
      },

      deleteProduct: () => {},

      incrementQuantity: () => {},

      decrementQuantity: () => {},

      clearCart: () => {},
    }),

    {
      name: "product-cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;

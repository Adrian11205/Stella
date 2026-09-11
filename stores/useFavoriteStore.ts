import { Product } from "@/api/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartProduct {
  productFavorite: Product;
  quantity: number;
}

interface CartStore {
  productsFavorite: CartProduct[];
  setProductFavorite: (product: CartProduct) => void;
  deleteProductFavorite: (productId: string) => void;
}

const useFavoriteStore = create<CartStore>()(
  persist(
    (set, get) => ({
      productsFavorite: [],

      setProductFavorite: (product) => {
        return set((state) => ({
          productsFavorite: state.productsFavorite.some(
            (item) => item.productFavorite.id === product.productFavorite.id,
          )
            ? state.productsFavorite
            : [...state.productsFavorite, product],
        }));
      },

      deleteProductFavorite: (productId) => {
        const newProducts = get().productsFavorite.filter(
          (item) => item.productFavorite.id !== productId,
        );
        return set({ productsFavorite: newProducts });
      },
    }),
    {
      name: "product-favorite",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useFavoriteStore;

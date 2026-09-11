import { create } from "zustand";
import { Product } from "@/api/types";

interface FavoriteStore {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  toggleFavorite: (product) => {
    set((state) => {
      const isFavorite = state.favorites.some((item) => item.id === product.id);

      return {
        favorites: isFavorite
          ? state.favorites.filter((item) => item.id !== product.id)
          : [...state.favorites, product],
      };
    });
  },
}));

export default useFavoriteStore;

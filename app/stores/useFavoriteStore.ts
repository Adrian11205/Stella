import {create} from "zustand";

interface FavoriteStore {
    favoriteNumber: number;
    setFavoriteNumber: () => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
    favoriteNumber: 0,
    setFavoriteNumber: () => {
        return set((state) => ({favoriteNumber: state.favoriteNumber + 1}));
    }
}));

export default useFavoriteStore;
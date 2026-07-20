import { create } from "zustand";

interface CartStore {
    itemsNumber: number;
    setItemsNumber: () => void;
}

const useCartStore = create<CartStore>((set) => ({
    itemsNumber: 0,
    setItemsNumber: () => {
        return set((state) => ({itemsNumber: state.itemsNumber + 1}));
    }
}));


export default useCartStore
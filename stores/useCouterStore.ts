import { create } from "zustand";

interface CounterStore {
  count: number;
  user: string;
  smoking: boolean;
  setCount: () => void;
}

const useCouterStore = create<CounterStore>((set) => ({
  count: 1,
  user: "Misa",
  smoking: true,

  setCount: () => {
    // const count = get().count;
    return set((state) => ({ count: state.count + 1 }));
  },
}));



export default useCouterStore;

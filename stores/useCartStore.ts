import { deleteProduct } from "@/api/requests";
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
  clearCart:() => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],

      setProduct: (product) => {
        const existItem = get().products.find(
          (item) => item.product.id === product.product.id);

        if (existItem) {
         return get().incrementQuantity(product.product.id)
        }

        return set((state) => ({
          products: [...state.products,product],
        }));
      },

      deleteProduct: (productId) => {
        const newProducts = get().products.filter((item) => item.product.id !== productId);
        return set({ products: newProducts });
      },

      incrementQuantity: (productId) => {
        const newProduct = get().products.find((product) => product.product.id === productId);
        if (newProduct === undefined) return
        
        const updatedProduct = {
          ...newProduct, 
          quantity: newProduct?.quantity + 1
        };

        const newArrProducts = get().products.map((product) => {
          if (product.product.id  === productId) {
            return updatedProduct;
          }
          return product;
        });

        return set({ products: newArrProducts });
      },

      decrementQuantity: (productId) => {
        const newProduct = get().products.find((product) => product.product.id === productId);
        if (newProduct === undefined) return

        if (newProduct.quantity <= 1) {
          return get().deleteProduct(productId)
        }

        const updatedProduct = {
          ...newProduct,
          quantity: Math.max(0, newProduct.quantity - 1)
        };

        const newArrProducts = get().products.map((product) => {
          if (product.product.id  === productId) {
            return updatedProduct;
          }
          return product;
        });

        return set({ products: newArrProducts });
      },

      clearCart: () => {
        return set({ products: [] })
      },
    }),

    {
      name: "product-cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;

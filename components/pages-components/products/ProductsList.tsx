"use client";
import { Loader, Grid, Menu, ShoppingCart, CirclePlus, X } from "lucide-react";
import { useEffect, useState  } from "react";
import AddProducts from "./AddProducts";
import ProductCard from "./ProductCard";
import { getProducts } from "@/api/requests";
import { toast } from "sonner";
import { Product, OrderEnum } from "@/api/types";

export default function ProductsList() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllProducts = () => {
    getProducts({
      page: 1,
      take: 25,
      order: OrderEnum.DESC,
    })
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
        setError(err?.response?.data?.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-100 flex items-center justify-center">
        <Loader className="size-12 " />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div>
        <span>Nu sunt produse in stoc</span>
      </div>
    );
  }

  return (
    <div className="p-6 ">
      <div className="text-xl font-bold mb-4 text-gray-800">
        <div className="flex flex-row items-center justify-around  gap-76 pb-3 pr-5 pl-3">
          <div className="flex flex-row items-center gap-4">
            <div className="font-medium ">Products ({products.length}) </div>

            <div className="flex flex-row gap-2">
              <button
                aria-label="Grid View"
                onClick={() => setViewMode("grid")}
              >
                <Grid
                  className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-110 ${
                    viewMode === "grid" ? "text-blue-700" : "text-black"
                  }`}
                />
              </button>
              <button
                aria-label="Menu view"
                onClick={() => setViewMode("list")}
              >
                <Menu
                  className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 ${
                    viewMode === "list" ? "text-blue-700" : "text-black"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className=" flex flex-row gap-7">
            <button
              className="flex items-center justify-center gap-3 h-15 px-4 bg-blue-300
               rounded-lg hover:bg-blue-400 transition-colors duration-300 "
            >
              <ShoppingCart className="w-8 h-8" />
              Go to Cart
            </button>

            <button
              className="flex items-center justify-center gap-3 h-15 px-4 bg-blue-300
               rounded-lg hover:bg-blue-400 transition-colors duration-300 "
              onClick={() => setShowAddProduct(true)}
            >
              <CirclePlus size={30} />
              Add Product
            </button>

            {showAddProduct && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={() => setShowAddProduct(false)}
              >
                <div onClick={(e) => e.stopPropagation()} className="relative">
                  <button
                    onClick={() => setShowAddProduct(false)}
                    className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                  <AddProducts
                    refetchProducts={() => {
                      getAllProducts();
                      setShowAddProduct(false);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-3"
            : "flex flex-col gap-6 mt-5 max-w-5xl pl-10 "
        }
      >
        {products.map((product) => (
          <ProductCard key={product.id} viewMode={viewMode} product={product} />
        ))}
      </div>
    </div>
  );
}

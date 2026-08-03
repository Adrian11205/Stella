import { Heart, ShoppingCart, Trash2, Pencil, X } from "lucide-react";
import { Product } from "@/api/types";
import Image from "next/image";
import { useState } from "react";
import AddProducts from "./AddProducts";

interface ProductCardProps {
  viewMode: "grid" | "list";
  product: Product;
  onDelete: (id: string) => void;
  getAllProducts: () => void;
}

export default function ProductCard({
  viewMode,
  product,
  onDelete,
  getAllProducts,
}: ProductCardProps) {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <>
      <div
        className={
          viewMode === "grid"
            ? "bg-gray-100 p-2 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out rounded-2xl"
            : "bg-gray-100 p-2 flex flex-row items-center gap-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out rounded-2xl"
        }
      >
        {viewMode === "grid" ? (
          <div className="flex flex-col rounded-lg">
            {/* Imagine */}
            <div className="relative h-48 bg-gray-200 overflow-hidden rounded-xl">
              <Image
                src={`https://picsum.photos/seed/${product.id}/400/300`}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            {/* Categorie + Favorite */}
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="text-gray-400 text-xs">{product.category}</div>
              <button aria-label="Add to favorites" onClick={() => {}}>
                <Heart
                  size={18}
                  className="text-black hover:scale-110 transition-all duration-500"
                />
              </button>
            </div>

            {/* Nume */}
            <div className="font-bold mt-1 min-h-12 line-clamp-2">
              {product.name}
            </div>

            {/* Preț */}
            <div className="font-bold text-lg mt-1">{product.price} lei</div>

            {/* Butoane */}
            <div
              onClick={() => {
                setShowAddProduct(true);
              }}
              className="grid grid-cols-3 gap-1.5 mt-3"
            >
              <button className="flex items-center justify-center gap-1 bg-green-800 hover:bg-green-900 text-white rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap">
                <Pencil size={14} />
                <span>Edit</span>
              </button>

              <button className="flex items-center justify-center gap-1 bg-blue-900 hover:bg-blue-950 text-white rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap">
                <ShoppingCart size={14} />
                <span>Add</span>
              </button>

              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Imagine */}
            <div className="relative h-20 w-20 shrink-0 bg-gray-200 overflow-hidden rounded-xl">
              <Image
                src={`https://picsum.photos/seed/${product.id}/200/200`}
                alt={product.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            {/* Nume + categorie */}
            <div className="flex-1 min-w-0">
              <div className="text-gray-400 text-xs">{product.category}</div>
              <div className="font-bold truncate">{product.name}</div>
            </div>

            {/* Preț */}
            <div className="font-bold w-20 text-right shrink-0">
              {product.price} lei
            </div>

            {/* Favorite */}
            <button
              aria-label="Add to favorites"
              onClick={() => {}}
              className="shrink-0"
            >
              <Heart
                size={18}
                className="text-black hover:scale-110 transition-all duration-500"
              />
            </button>

            {/* Butoane */}
            <div
              onClick={() => {
                setShowAddProduct(true);
              }}
              className="flex items-center gap-1.5 shrink-0"
            >
              <button className="flex items-center gap-1 bg-green-800 hover:bg-green-900 text-white rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer">
                <Pencil size={14} />
                <span>Edit</span>
              </button>

              <button className="flex items-center gap-1 bg-blue-900 hover:bg-blue-950 text-white rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer">
                <ShoppingCart size={14} />
                <span>Add</span>
              </button>

              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer"
              >
                <Trash2 size={14} />

                <span>Delete</span>
              </button>
            </div>
          </>
        )}
      </div>

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
              editMode={true}
              product={product}
            />
          </div>
        </div>
      )}
    </>
  );
}

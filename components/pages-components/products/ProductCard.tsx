import {Heart} from "lucide-react"
import {Product} from "@/api/types"
interface ProductCardProps {
  viewMode:"grid" | "list";
  product:Product
}
 

export default function ProductCard ({viewMode , product}:ProductCardProps){
    return (
        <div
            className={
              viewMode === "grid"
                ? "bg-gray-100 p-2 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out rounded-2xl"
                : "bg-gray-100 p-2 flex flex-row items-center gap-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out rounded-2xl"
            }
          >
            <div
              className={
                viewMode === "grid"
                  ? "overflow-hidden rounded-xl"
                  : "overflow-hidden rounded-xl shrink-0"
              }
            >
              
            </div>

            {viewMode === "grid" ? (
              <div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-gray-400 text-xs mt-2">
                    {product.category}
                  </div>
                  <button
                    aria-label="Add to favorites"
                    onClick={() => {
                      // setFavoriteNumber();
                    }}
                  >
                    <Heart className="text-black hover:scale-110 transition-all duration-500" />
                  </button>
                </div>
                <div className="font-bold mt-1 min-h-12">{product.name}</div>
                <div className="flex justify-between items-center mt-4">
                  <div className="font-bold">
                    {product.price} 
                  </div>

                  <button
                    onClick={() => {
                      // setItemsNumber();
                    }}
                    className="bg-black text-white rounded-lg px-3 py-2 text-sm coursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 min-w-0 ">
                  <div className="text-gray-400 text-xs">{product.category}</div>
                  <div className="font-bold truncate">{product.name}</div>
                </div>

                <div className="font-bold w-24 text-right shrink-0">
                  {product.price}
                </div>

                <button
                  aria-label="Add to favorites"
                  onClick={() => {}}
                  className="shrink-0"
                >
                  <Heart className="text-black hover:scale-110 transition-all duration-500" />
                </button>

                <button
                  // onClick={() => setItemsNumber()}
                  className="bg-black text-white rounded-lg px-3 py-2 text-sm shrink-0 cursour-pointer"
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
    )
}
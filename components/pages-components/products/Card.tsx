"use client"


import { Heart, Grid, Menu, ShoppingCart, CirclePlus, X } from "lucide-react";
import { useState } from "react";
import useCartStore from "../../../app/stores/useCartStore";
import useFavoriteStore from "../../../app/stores/useFavoriteStore";
import AddProducts from "./AddProducts";

export default function Card() {
  const { setItemsNumber } = useCartStore();
  const { setFavoriteNumber } = useFavoriteStore();

  const [showAddProduct, setShowAddProduct] = useState(false);

  const arr = [
    {
      id: "prod_004",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKj-R6ljmt5mBx-Hc9TSwy66IqFZ4oW_2gHsxCTcEWw&s",
      brand: "Levi's",
      title: "Denim Original Fit Sweatshirt",
      price: 390.0,
      currency: "RON",
      badge: null,
      stockCount: 15,
      isFavorite: false,
    },
    {
      id: "prod_005",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIygQ7I1uRtS0uA1VUZuIe0HSGGZhu8ZB5rVMm22H7dg&s",
      brand: "Zara",
      title: "Quilted Hoodie",
      price: 320.0,
      currency: "RON",
      badge: "Limited Stock",
      stockCount: 2,
      isFavorite: true,
    },
    {
      id: "prod_009",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsqzYYYwhQkhv5pbhb7T2O4iO8aUwqx59a38v6nyGfw&s",
      brand: "Casio",
      title: "Tech G-Shock Edition Sweatshirt",
      price: 450.0,
      currency: "RON",
      badge: "Top Rated",
      stockCount: 7,
      isFavorite: true,
    },
    {
      id: "prod_010",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4DrAqvqc8dQYVhX0wSjxrxyPQolOu4vBQuCurfeBbQ&s",
      brand: "H&M",
      title: "Cotton Knit Set Sweatshirt",
      price: 45.0,
      currency: "RON",
      badge: "Best Value",
      stockCount: 100,
      isFavorite: false,
    },
    {
      id: "prod_004",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKj-R6ljmt5mBx-Hc9TSwy66IqFZ4oW_2gHsxCTcEWw&s",
      brand: "Levi's",
      title: "Denim Original Fit Sweatshirt",
      price: 390.0,
      currency: "RON",
      badge: null,
      stockCount: 15,
      isFavorite: false,
    },
    {
      id: "prod_005",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIygQ7I1uRtS0uA1VUZuIe0HSGGZhu8ZB5rVMm22H7dg&s",
      brand: "Zara",
      title: "Quilted Hoodie",
      price: 320.0,
      currency: "RON",
      badge: "Limited Stock",
      stockCount: 2,
      isFavorite: true,
    },
    {
      id: "prod_009",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsqzYYYwhQkhv5pbhb7T2O4iO8aUwqx59a38v6nyGfw&s",
      brand: "Casio",
      title: "Tech G-Shock Edition Sweatshirt",
      price: 450.0,
      currency: "RON",
      badge: "Top Rated",
      stockCount: 7,
      isFavorite: true,
    },
    {
      id: "prod_010",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4DrAqvqc8dQYVhX0wSjxrxyPQolOu4vBQuCurfeBbQ&s",
      brand: "H&M",
      title: "Cotton Knit Set Sweatshirt",
      price: 45.0,
      currency: "RON",
      badge: "Best Value",
      stockCount: 100,
      isFavorite: false,
    },
  ];

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="p-6 ">
      <div className="text-xl font-bold mb-4 text-gray-800">
        <div className="flex flex-row items-center justify-around  gap-76 pb-3 pr-5 pl-3">
          <div className="flex flex-row items-center gap-4">
            <div className="font-medium ">Products ({arr.length}) </div>

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
              onClick={() => setShowAddProduct((prev) => !prev)}
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
                  <AddProducts />
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
        {arr.map((element, i) => (
          <div
            key={element.id + i}
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
              <img
                src={element.imageUrl}
                alt={element.title}
                className={
                  viewMode === "grid"
                    ? "w-full h-32 object-cover"
                    : "w-24 h-24 object-cover"
                }
              />
            </div>

            {viewMode === "grid" ? (
              <div>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-gray-400 text-xs mt-2">
                    {element.brand}
                  </div>
                  <button
                    aria-label="Add to favorites"
                    onClick={() => {
                      setFavoriteNumber();
                    }}
                  >
                    <Heart className="text-black hover:scale-110 transition-all duration-500" />
                  </button>
                </div>
                <div className="font-bold mt-1 min-h-12">{element.title}</div>
                <div className="flex justify-between items-center mt-4">
                  <div className="font-bold">
                    {element.price} {element.currency}
                  </div>

                  <button
                    onClick={() => {
                      setItemsNumber();
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
                  <div className="text-gray-400 text-xs">{element.brand}</div>
                  <div className="font-bold truncate">{element.title}</div>
                </div>

                <div className="font-bold w-24 text-right shrink-0">
                  {element.price} {element.currency}
                </div>

                <button
                  aria-label="Add to favorites"
                  onClick={() => {}}
                  className="shrink-0"
                >
                  <Heart className="text-black hover:scale-110 transition-all duration-500" />
                </button>

                <button
                  onClick={() => setItemsNumber()}
                  className="bg-black text-white rounded-lg px-3 py-2 text-sm shrink-0 cursour-pointer"
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import {ShoppingCart, Trash2,Minus,Plus } from "lucide-react"
import AuthGuard from "@/components/layout/AuthGuard";
import Image from "next/image";
import Link from "next/link";

function Cart() {
    return (
        <AuthGuard>
      <div className="p-6 mt-10 max-w-4xl mx-auto w-full">
        <div className="flex flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <ShoppingCart className="w-7 h-7" />
            Cart ({1})
          </h1>

          {0 > 0 && (
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer">
              <Trash2 size={16} />
              Clear cart
            </button>
          )}
        </div>

        {0 === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-gray-500">
            <ShoppingCart className="w-16 h-16" />
            <span>Cosul este gol</span>
            <Link
              href="/products"
              className="bg-blue-900 hover:bg-blue-950 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              Mergi la produse
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {[].map((item) => (
                <div
                  key={item.product.id}
                  className="bg-gray-100 p-3 flex flex-row items-center gap-4 rounded-2xl shadow-lg"
                >
                  <div className="relative h-20 w-20 shrink-0 bg-gray-200 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${item.product.id}/200/200`}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-gray-400 text-xs">
                      {item.product.category}
                    </div>
                    <div className="font-bold truncate">
                      {item.product.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {item.product.price} lei / buc
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-1 bg-blue-900 text-white rounded-lg px-1 py-2 text-sm font-medium shrink-0">
                    <button
                      aria-label="Decrease quantity"
                      className="p-1 rounded hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="min-w-6 text-center">{item.quantity}</span>

                    <button
                      aria-label="Increase quantity"
                      className="p-1 rounded hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="font-bold w-24 text-right shrink-0">
                    {item.product.price * item.quantity} lei
                  </div>

                  <button
                    aria-label="Remove from cart"
                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 transition-colors cursor-pointer shrink-0"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-center justify-between mt-8 border-t border-gray-300 pt-5">
              <Link
                href="/products"
                className="text-blue-900 hover:underline text-sm font-medium"
              >
                Continua cumparaturile
              </Link>

              <div className="text-xl font-bold">Total: 100 lei</div>
            </div>
          </>
        )}
      </div>
    </AuthGuard>


    )
}

export default Cart
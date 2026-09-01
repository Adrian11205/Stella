"use client";
import { ShoppingCart, Trash2, Minus, Plus } from "lucide-react";
import AuthGuard from "@/components/layout/AuthGuard";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/stores/useCartStore";
import { useTranslations } from "next-intl";

function Cart() {
  const t = useTranslations();
  const {
    products,
    clearCart,
    deleteProduct,
    incrementQuantity,
    decrementQuantity,
  } = useCartStore();

  const totalPrice = products.reduce((total, product) => {
    return total + product.product.price * product.quantity;
  }, 0);

  return (
    <AuthGuard>
      <div className="p-6 h-full mt-10 max-w-4xl mx-auto w-full">
        <div className="flex flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <ShoppingCart className="w-7 h-7" />
            {t("cart")} ({products.length})
          </h1>

          {products.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 bg-destructive hover:bg-destructive text-background rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              <Trash2 size={16} />
              {t("clearCart")}
            </button>
          )}
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
            <ShoppingCart className="w-16 h-16" />
            <span>{t("emptyCart")}</span>
            <Link
              href="/products"
              className="bg-blues hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              {t("goToProducts")}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {products.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-card text-card-foreground p-3 flex flex-row items-center gap-4 rounded-2xl shadow-lg"
                >
                  <div className="relative h-20 w-20 shrink-0 bg-muted overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${item.product.id}/200/200`}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-muted-foreground text-xs">
                      {item.product.category}
                    </div>
                    <div className="font-bold truncate">
                      {item.product.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {item.product.price} lei / buc
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-1 bg-blues text-primary-foreground rounded-lg px-1 py-2 text-sm font-medium shrink-0">
                    <button
                      aria-label={t("decreaseQuantity")}
                      onClick={() => decrementQuantity(item.product.id)}
                      className="p-1 rounded hover:bg-primary/80 transition-colors cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="min-w-6 text-center">{item.quantity}</span>

                    <button
                      aria-label={t("increaseQuantity")}
                      onClick={() => incrementQuantity(item.product.id)}
                      className="p-1 rounded hover:bg-primary/80 transition-colors cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="font-bold w-24 text-right shrink-0">
                    {item.product.price * item.quantity} lei
                  </div>

                  <button
                    aria-label={t("removeFromCart")}
                    onClick={() => deleteProduct(item.product.id)}
                    className="flex items-center justify-center bg-destructive hover:bg-destructive/90 text-background rounded-lg p-2 transition-colors cursor-pointer shrink-0"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-center justify-between mt-8 border-t border-border pt-5">
              <Link
                href="/products"
                className="text-primary hover:text-primary/80 hover:underline text-sm font-medium"
              >
                {t("continueShopping")}
              </Link>

              <div className="text-xl font-bold">{t("total")}: {totalPrice} lei</div>
            </div>
          </>
        )}
      </div>
    </AuthGuard>
  );
}

export default Cart;

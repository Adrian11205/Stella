"use client";
import { Heart, Grid, Menu } from "lucide-react";
import AuthGuard from "@/components/layout/AuthGuard";
import Image from "next/image";
import Link from "next/link";
import useFavoriteStore from "@/stores/useFavoriteStore";
import { useState } from "react"
import useCartStore from "@/stores/useCartStore";
import { useTranslations } from "next-intl";

function Favorite() {
    const t = useTranslations();
    const {
        productsFavorite,
        deleteProductFavorite,
    } = useFavoriteStore();
    const { setProduct, products } = useCartStore()

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const totalPrice = productsFavorite.reduce((total, product) => {
        return total + product.productFavorite.price * product.quantity;
    }, 0)

    const favoriteList = (
        <div className="flex flex-row items-center gap-5 mb-6">
            <h1 className="text-2xl font-bold flex items-center  gap-2">
                <Heart className="w-7 h-7" />
                {t("favorites")} ({productsFavorite.length})
            </h1>

            <div className="flex items-center gap-3">
                <button aria-label={t("gridView")} onClick={() => setViewMode("grid")}>
                    <Grid
                        className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-110 ${viewMode === "grid" ? "text-blues" : "text-muted-foreground"
                            }`}
                    />
                </button>
                <button aria-label={t("listView")} onClick={() => setViewMode("list")}>
                    <Menu
                        className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 ${viewMode === "list" ? "text-blues" : "text-muted-foreground"}`}
                    />
                </button>
            </div>
        </div>
    )

    return (
        <AuthGuard>
            <div className="p-6 h-full mt-10 max-w-7xl mx-auto w-full">
                <div>
                    {favoriteList}
                </div>

                {productsFavorite.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
                        <Heart className="w-16 h-16" />
                        <span>{t("emptyFavorites")}</span>
                        <Link
                            href="/products"
                            className="bg-blues hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                        >
                            {t("goToProducts")}
                        </Link>
                    </div>
                ) : (
                    <>
                        <div
                            className={
                                viewMode === "grid"
                                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-3"
                                    : "flex flex-col gap-6 mt-5 max-w-5xl pl-10"
                            }
                        >
                            {productsFavorite.map((item) => {
                                const product = item.productFavorite;
                                const isInCart = products.find(
                                    (cartItem) => cartItem.product.id === product.id,
                                ) !== undefined;
                                const cardClass = viewMode === "grid"
                                    ? "bg-card text-card-foreground p-3 min-w-0 rounded-2xl shadow-lg overflow-hidden"
                                    : "bg-card text-card-foreground p-3 flex flex-row items-center gap-4 rounded-2xl shadow-lg";
                                const imageClass = viewMode === "grid"
                                    ? "relative h-48 w-full bg-muted overflow-hidden rounded-xl"
                                    : "relative h-20 w-20 shrink-0 bg-muted overflow-hidden rounded-xl";
                                const cartButtonClass = `${viewMode === "grid" ? "w-full" : "w-32 shrink-0"} flex items-center justify-center gap-1 bg-blues hover:bg-primary/90 text-primary-foreground rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap`;

                                return (
                                    <div
                                        key={product.id}
                                        className={cardClass}
                                    >
                                        <div className={imageClass}>
                                            <Image
                                                src={`https://picsum.photos/seed/${product.id}/400/300`}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 400px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            {viewMode === "grid" && (
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                                                        {product.category}
                                                    </div>
                                                    <button
                                                        aria-label={t("removeFromFavorites")}
                                                        onClick={() => deleteProductFavorite(product.id)}
                                                    >
                                                        <Heart className="w-6 h-6 text-red-500 fill-red-500 hover:scale-110 transition-transform" />
                                                    </button>
                                                </div>
                                            )}
                                            <div className={viewMode === "grid" ? "font-bold truncate mt-2" : "flex flex-col gap-1"}>
                                                {viewMode === "list" && (
                                                    <div className="w-fit rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                                                        {product.category}
                                                    </div>
                                                )}
                                                <div className="truncate text-base font-semibold">
                                                    {product.name}
                                                </div>
                                            </div>
                                            {viewMode === "grid" && (
                                                <div className="mt-2 text-lg font-bold">
                                                    {product.price} lei
                                                </div>
                                            )}
                                        </div>

                                        {viewMode === "list" && <div className="font-bold w-24 text-right shrink-0">
                                            {product.price * item.quantity} lei
                                        </div>}

                                        {isInCart ? (
                                            <Link
                                                href="/cart"
                                                className={cartButtonClass}
                                            >
                                                {t("goToCart")}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => setProduct({ product, quantity: 1 })}
                                                className={cartButtonClass}
                                            >
                                                {t("addToCart")}
                                            </button>
                                        )}

                                        {viewMode === "list" && (
                                            <button
                                                aria-label={t("removeFromFavorites")}
                                                onClick={() => deleteProductFavorite(product.id)}
                                            >
                                                <Heart className="w-6 h-6 text-red-500 fill-red-500 hover:scale-110 transition-transform" />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-row items-center justify-between mt-8 border-t border-border pt-5">
                            <Link
                                href="/products"
                                className="text-blues hover:underline text-sm font-medium"
                            >
                                {t("continueShopping")}
                            </Link>

                            <div className="text-xl font-bold">{t("total")}: {totalPrice} lei</div>
                        </div>
                    </>
                )}
            </div>
        </AuthGuard>
    )
}

export default Favorite
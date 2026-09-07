"use client";
import { Loader, Grid, Menu, ShoppingCart, CirclePlus, X } from "lucide-react";
import { useState } from "react";
import AddProducts from "./AddProducts";
import ProductCard from "./ProductCard";
import { getProducts, deleteProduct } from "@/api/requests";
import { toast } from "sonner";
import { OrderEnum } from "@/api/types";
import Link from "next/link"
import useCartStore from "@/stores/useCartStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export default function ProductsList() {
  const t = useTranslations();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const queryClient = useQueryClient()

  const { data: productsResponse, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return getProducts({
        page: 1,
        take: 25,
        order: OrderEnum.DESC
      })
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 20

  })

  const products = productsResponse?.data || []


  const { deleteProduct: deleteProductFromCart } = useCartStore()

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,

    onSuccess: (id: string) => {
      toast.success(t("productDeleted"));
      queryClient.invalidateQueries({ queryKey: ["products"] });
      deleteProductFromCart(id)
    }
  })



  if (error) {
    return <div>{error.message}</div>;
  }

  if (isPending) {
    return (
      <div className="w-full h-100 flex items-center justify-center text-muted-foreground">
        <Loader className="size-12 animate-spin" />
      </div>
    );
  }

  const productsListHeader = (
    <div className="text-xl font-bold mb-4 text-foreground">
      <div className="flex flex-row items-center justify-around  gap-76 pb-3 pr-5 pl-3">
        <div className="flex flex-row items-center gap-4">
          <div className="font-medium ">{t("products")} ({products.length}) </div>

          <div className="flex flex-row gap-2">
            <button aria-label={t("gridView")} onClick={() => setViewMode("grid")}>
              <Grid
                className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-110 ${viewMode === "grid" ? "text-brand" : "text-muted-foreground"
                  }`}
              />
            </button>
            <button aria-label={t("listView")} onClick={() => setViewMode("list")}>
              <Menu
                className={`transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 ${viewMode === "list" ? "text-brand" : "text-muted-foreground"
                  }`}
              />
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-7">
          <Link
            className="flex items-center justify-center gap-3 h-15 px-4 bg-secondary text-secondary-foreground
              rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300 "
            href={"/cart"}
          >
            <ShoppingCart className="w-8 h-8" />
            {t("goToCart")}
          </Link>

          <button
            className="flex items-center justify-center gap-3 h-15 px-4 bg-blues text-primary-foreground
              rounded-lg hover:bg-primary/90 transition-colors duration-300 "
            onClick={() => setShowAddProduct(true)}
          >
            <CirclePlus size={30} />
            {t("addProduct")}
          </button>

          {showAddProduct && (
            <div
              className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50"
              onClick={() => setShowAddProduct(false)}
            >
              <div onClick={(e) => e.stopPropagation()} className="relative">
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="absolute -top-3 -right-3 bg-background text-foreground rounded-full p-1 shadow-md hover:bg-muted"
                >
                  <X size={20} />
                </button>
                <AddProducts
                  refetchProducts={() => {
                    queryClient.invalidateQueries({
                      queryKey: ["products"],
                    })
                    queryClient.clear()
                    setShowAddProduct(false);
                  }}
                  editMode={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (products.length === 0) {
    return (
      <div>
        {productsListHeader}
        <span>{t("noProducts")}</span>
      </div>
    );
  }

  return (
    <div className="p-6 ">
      {productsListHeader}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-3"
            : "flex flex-col gap-6 mt-5 max-w-5xl pl-10 "
        }
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            viewMode={viewMode}
            product={product}
            onDelete={deleteMutation.mutate}
            getAllProducts={() => {
              queryClient.invalidateQueries({ queryKey: ["products"] });
            }}
          />
        ))}
      </div>
    </div>
  );
}

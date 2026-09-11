import { Heart, ShoppingCart, Trash2, Pencil, X, Plus, Minus } from "lucide-react";
import { Product } from "@/api/types";
import Image from "next/image";
import { useState } from "react";
import AddProducts from "./AddProducts";
import useCartStore from "@/stores/useCartStore";
import useFavoriteStore from "@/stores/useFavoriteStore";
import { useTranslations } from "next-intl";


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
  const t = useTranslations();
  const [showAddProduct, setShowAddProduct] = useState(false);

  const { decrementQuantity, incrementQuantity, setProduct, products } = useCartStore()
  const {
    productsFavorite,
    setProductFavorite,
    deleteProductFavorite,
  } = useFavoriteStore();
  const isFavorite = productsFavorite.some(
    (item) => item.productFavorite.id === product.id,
  );
  const toggleFavorite = () => {
    if (isFavorite) {
      deleteProductFavorite(product.id);
      return;
    }

    setProductFavorite({ productFavorite: product, quantity: 1 });
  };

  const quantity = products.find((item) => {
    return item.product.id === product.id
  })?.quantity || 0

  const cartControl =
    quantity === 0 ? (
      <button
        onClick={() => setProduct({ product, quantity: 1 })}
        className="flex items-center justify-center gap-1 bg-blues hover:bg-primary/90 text-primary-foreground rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
      >
        <ShoppingCart size={14} />
        <span>{t("add")}</span>
      </button>
    ) : (
      <div className="flex items-center justify-between bg-blues text-primary-foreground rounded-lg px-1 py-2 text-xs font-medium">
        <button
          aria-label={t("decreaseQuantity")}
          onClick={() => decrementQuantity(product.id)}
          className="p-1 rounded hover:bg-primary/80 transition-colors cursor-pointer"
        >
          <Minus size={14} />
        </button>

        <span className="min-w-5 text-center">{quantity}</span>

        <button
          aria-label={t("increaseQuantity")}
          onClick={() => incrementQuantity(product.id)}
          className="p-1 rounded hover:bg-primary/80 transition-colors cursor-pointer"
        >
          <Plus size={14} />
        </button>
      </div>
    );

  return (
    <>
      <div
        className={
          viewMode === "grid"
            ? "bg-card text-card-foreground p-2 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out rounded-2xl"
            : "bg-card text-card-foreground p-2 flex flex-row items-center gap-4 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out rounded-2xl"
        }
      >
        {viewMode === "grid" ? (
          <div className="flex flex-col rounded-lg">
            {/* Imagine */}
            <div className="relative h-48 bg-muted overflow-hidden rounded-xl">
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
              <div className="text-muted-foreground text-xs">{product.category}</div>
              <button
                aria-label={t("addToFavorites")}
                onClick={toggleFavorite}
              >
                <Heart
                  size={18}
                  className={`${isFavorite ? "fill-destructive text-destructive" : "text-foreground"} hover:text-destructive hover:scale-110 transition-all duration-500`}
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

              className="grid grid-cols-3 gap-1.5 mt-3"
            >
              <button
                onClick={() => {
                  setShowAddProduct(true);
                }}

                className="flex items-center justify-center gap-1 bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap">
                <Pencil size={14} />
                <span>{t("edit")}</span>
              </button>

              {cartControl}

              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center justify-center gap-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg px-2 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <Trash2 size={14} />
                <span>{t("delete")}</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Imagine */}
            <div className="relative h-20 w-20 shrink-0 bg-muted overflow-hidden rounded-xl">
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
              <div className="text-muted-foreground text-xs">{product.category}</div>
              <div className="font-bold truncate">{product.name}</div>
            </div>

            {/* Preț */}
            <div className="font-bold w-20 text-right shrink-0">
              {product.price} lei
            </div>

            {/* Favorite */}
            <button
              aria-label={t("addToFavorites")}
              onClick={toggleFavorite}

              className="shrink-0"
            >
              <Heart
                size={18}
                className={`${isFavorite ? "fill-destructive text-destructive" : "text-foreground"} hover:text-destructive hover:scale-110 transition-all duration-500`}
              />
            </button>

            {/* Butoane */}
            <div

              className="flex items-center gap-1.5 shrink-0"
            >
              <button
                onClick={() => {
                  setShowAddProduct(true);
                }}

                className="flex items-center gap-1 bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer">
                <Pencil size={14} />
                <span>{t("edit")}</span>
              </button>

              {cartControl}

              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center gap-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer"
              >
                <Trash2 size={14} />

                <span>{t("delete")}</span>
              </button>
            </div>
          </>
        )}
      </div>

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



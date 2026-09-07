"use client";

import ProductsList from "@/components/pages-components/products/ProductsList";
import Filter from "@/components/pages-components/products/Filter";
import AuthGuard from "@/components/layout/AuthGuard";

export const dynamic = "force-dynamic";

export default function Products() {
  return (
    <AuthGuard>
      <div className="flex flex-row gap-6 p-4 mt-10">
        <Filter />
        <div className="flex-1">
          <ProductsList />
        </div>
      </div>
    </AuthGuard>
  );
}

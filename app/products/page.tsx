"use client"

import Card from "@/components/pages-components/products/Card";
import Filter from "@/components/pages-components/products/Filter";

export const dynamic = "force-dynamic"

export default function Products() {
  return (
    <>
    <div className="flex flex-row gap-6 p-4 mt-10">
      
      <Filter />
      <div className="flex-1">
        <Card />
      </div>
    
    </div>

    </>
  );
}

"use client"

import Card from "@/components/pages-components/products/Card";
import Filter from "@/components/pages-components/products/Filter";
import Header from "@/components/core/Header"
import Footer from "@/components/core/Footer"

export default function Products() {
  return (
    <>
    <Header/>
    <div className="flex flex-row gap-6 p-4 mt-10">
      
      <Filter />
      <div className="flex-1">
        <Card />
      </div>
    
    </div>

    <Footer/>
    </>
  );
}

"use client"

import { Filter } from "@/components/organisms/Filter";
import { ProductGrid } from "@/components/organisms/ProductGrid";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center">
      <ProductGrid />
      <Filter />
    </div>);
}


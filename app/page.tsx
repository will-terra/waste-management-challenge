"use client"

import { Filter } from "@/components/organisms/Filter";
import { ProductGrid } from "@/components/organisms/ProductGrid";

export default function HomePage() {

  return (
    <div className="flex gap-4 w-full min-h-screen bg-black items-center justify-between">
      <Filter />
      <ProductGrid />
    </div>);
}


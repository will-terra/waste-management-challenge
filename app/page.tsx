"use client"

import { Filter } from "@/components/organisms/Filter";
import { MobileFilter } from "@/components/organisms/MobileFilter";
import { ProductGrid } from "@/components/organisms/ProductGrid";
import { useAppSelector } from "@/lib/hooks";

export default function HomePage() {
  const isMobile = useAppSelector((state) => state.skips.isMobile);

  return (
    <div className="flex flex-col justify-center md:flex-row gap-4 w-full min-h-screen bg-black items-center">
      {isMobile ? <MobileFilter /> : <Filter />}
      <ProductGrid />
    </div>);
}


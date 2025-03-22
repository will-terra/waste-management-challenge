"use client"
import { AllowedOnRoadFilter } from "./components/organisms/AllowedOnRoadFilter";
import { ProductGrid } from "./components/organisms/ProductGrid";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center">
      <ProductGrid />
      <AllowedOnRoadFilter />
    </div>);
}


"use client"
import { RadioFilter } from "./components/molecules/RadioFilter";
import { ProductGrid } from "./components/organisms/ProductGrid";

export default function HomePage() {

  return (
    <div className="flex flex-col items-center">
      <ProductGrid />
      <RadioFilter property="allowedOnRoad" ariaLabel="Allowed on road" values={["yes", "no"]} />


    </div>);
}


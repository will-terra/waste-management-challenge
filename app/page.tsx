"use client";
import { useEffect, useState } from "react";
import { Filter } from "@/components/organisms/Filter";
import { ProductGrid } from "@/components/organisms/ProductGrid";
import { useAppSelector } from "@/lib/hooks";
import { MainHeader } from "@/components/atoms/MainHeader";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useAppSelector((state) => state.skips.isMobile);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex flex-col justify-start md:flex-row gap-4 w-full min-h-screen bg-black items-center">
        <Filter isMobile={false} />
        <div className="flex flex-col justify-center self-start w-full mt-8">
          <MainHeader />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start md:justify-center md:flex-row gap-4 w-full min-h-screen bg-black items-center">
      <Filter isMobile={isMobile} />
      <ProductGrid />
    </div>
  );
}

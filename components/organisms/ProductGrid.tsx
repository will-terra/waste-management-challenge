"use client";
import { useMemo } from "react";
import { Message } from "../atoms/Message";
import { ProductCard } from "../molecules/ProductCard";
import { MainHeader } from "../atoms/MainHeader";
import { useAppSelector } from "@/lib/hooks";

export const ProductGrid = () => {
  const isLoading = useAppSelector((state) => state.skips.status === "loading");
  const isError = useAppSelector((state) => state.skips.status === "failed");
  const skips = useAppSelector((state) => state.skips.filteredSkips);

  const content = useMemo(() => {
    if (isLoading) return <></>;

    if (isError) {
      return (
        <Message
          title="Error on fetching skips :("
          subtitle="Try reloading the page"
          button={false}
        />
      );
    }

    if (!skips?.length) {
      return (
        <Message
          title="Ooops, no skips found :("
          subtitle="Try using less filters"
          button={true}
        />
      );
    }

    return (
      <div className="flex flex-wrap gap-12 justify-center">
        {skips.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    );
  }, [isLoading, isError, skips]);

  return (
    <div className={containerStyles}>
      <MainHeader />
      {content}
    </div>
  );
};

const containerStyles =
  "flex flex-col h-full w-full self-start mb-44 md:mb-36 mt-2 md:mt-4 pt-2 md:pt-4 text-white";

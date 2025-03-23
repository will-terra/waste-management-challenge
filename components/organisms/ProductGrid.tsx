"use client"
import { useAppSelector } from "@/lib/hooks";
import { ProductCard } from "../molecules/ProductCard";

type Props = {}

export const ProductGrid = (props: Props) => {
    const isLoading = useAppSelector((state) => state.skips.status === 'loading');
    const isError = useAppSelector((state) => state.skips.status === 'failed');
    const skips = useAppSelector((state) => state.skips.filteredSkips);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error on fetch</div>;
    }

    if (!skips || skips.length === 0) {
        return <div>No skips found</div>;
    }

    return (
        <div className="flex flex-col h-full w-full self-start mt-4 p-4 bg-amber-300">
            <p className="text-6xl font-bold text-white text-center self-center mb-4">Choose your Skip</p>
            <div className="flex flex-wrap gap-12 justify-center">
                {skips.map((item) => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}


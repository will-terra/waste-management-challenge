"use client"
import ProductCard from "../molecules/ProductCard";
import { useAppSelector } from "@/lib/hooks";

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
        <div className="flex flex-col">
            {skips.map((item) => (
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    );
}


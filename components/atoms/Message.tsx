import { useAppDispatch } from "@/lib/hooks";
import { MainButton } from "./MainButton";
import { resetFilters } from "@/lib/features/skips/skipsSlice";

interface MessageProps {
    title: string;
    subtitle: string;
}

export const Message = ({ title, subtitle }: MessageProps) => {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(resetFilters());
    }

    return (
        <div className="place-self-center bg-lightGray w-fit p-8 rounded-md">
            <p className="text-2xl md:text-4xl mb-2">{title}</p>
            <p className="text-xl md:text-2xl text-center">{subtitle}</p>
            <MainButton ariaLabel="Reset filters" size="large" variant="blue" className="w-40 mt-4" onClick={handleOnClick}>
                Reset Filters
            </MainButton>
        </div>)
}
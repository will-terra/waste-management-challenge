import Image from "next/image"
import skipImage from "../../public/skip.png"
import heavyIcon from "../../public/heavy.svg"
import roadIcon from "../../public/road.svg"
import AddIcon from "@mui/icons-material/Add";
import { Skip } from "@/types/types"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedSkip } from "@/lib/features/skips/skipsSlice";

export const ProductCard = (product: Skip) => {
    const { allows_heavy_waste, allowed_on_road, price_before_vat } = product
    const selectedSkip = useAppSelector(state => state.skips.selectedSkip)
    const dispatch = useAppDispatch()
    const handleOnClick = () => {
        dispatch(setSelectedSkip(product))
    }
    return (
        <div onClick={handleOnClick} className={`flex flex-col gap-2 rounded-lg border-6 p-4 md:p-6 hover:border-lightBlue/50 border-lightGray text-white ${selectedSkip?.id === product.id ? "bg-lightBlue/30" : "bg-secondaryDarkGray"}`}>
            <Image
                priority
                src={skipImage}
                alt="Skip with garbage"
                width={255}
                height={200}
                style={{
                    width: "100%",
                    height: "auto"
                }}
            />
            <p className="text-white text-2xl font-bold"> {product.size} Yard Skip</p>
            <div className="flex justify-between gap-2 min-h-12 items-center">
                <p className="text-4xl font-black text-lightBlue">£{price_before_vat}<span className="text-sm text-gray-400 ">per week</span></p>
                <div className="flex w-fit gap-1 bg-gray-400 rounded-md items-center">
                    {allows_heavy_waste && <Image src={heavyIcon} aria-label="Allows heavy waste" alt="heavy waste icon" width={40} height={40} />}
                    {allows_heavy_waste && allowed_on_road && <AddIcon />}
                    {allowed_on_road && <Image src={roadIcon} aria-label="Allowed on road" alt="road icon" width={40} height={40} />}</div>
            </div></div>
    )
}


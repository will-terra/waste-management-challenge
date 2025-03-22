import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { RadioFilter } from "../molecules/RadioFilter"
import { addRadioFilter, filterByAllowsHeavyWaste } from "@/lib/features/skips/skipsSlice"

export const AllowsHeavyWasteFilter = () => {
    const AllowsHeavyWasteValue = useAppSelector((state) => state.skips.filters.allows_heavy_waste)
    const dispatch = useAppDispatch();
    const handleValueChange = (value: unknown) => {
        if (typeof value === "boolean")
            dispatch(filterByAllowsHeavyWaste(value));
    }
    return (
        <div>
            <label> Allows heavy waste</label>
            <RadioFilter property="allows_heavy_waste" ariaLabel="Allowes heavy waste" onValueChange={handleValueChange}>
                <RadioItem value={true} checked={AllowsHeavyWasteValue === true} label="Yes" />
                <RadioItem value={false} checked={AllowsHeavyWasteValue === false} label="No" />
                <RemoveButton property="allows_heavy_waste" />
            </RadioFilter>
        </div>)
}


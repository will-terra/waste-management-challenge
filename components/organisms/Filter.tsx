import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { RadioFilter } from "../molecules/RadioFilter"
import { applyFilters, handleFilter, removeFilter } from "@/lib/features/skips/skipsSlice"
import { SkipProperty } from "@/types/types"
import { MainButton } from "../atoms/MainButton"

export const Filter = () => {
    const AllowsHeavyWasteValue = useAppSelector((state) => state.skips.filters.allows_heavy_waste)
    const allowedOnRoadValue = useAppSelector((state) => state.skips.filters.allowed_on_road)
    const dispatch = useAppDispatch();
    const handleValueChange = (property: SkipProperty, value: boolean) => {
        dispatch(handleFilter({ property, value }))
    }
    const onClick = (property: SkipProperty) => {
        dispatch(removeFilter({ property }))
    }
    return (
        <div>
            <div>
                <label> Allows heavy waste</label>
                <RadioFilter property={SkipProperty.ALLOWS_HEAVY_WASTE} ariaLabel="Allows heavy waste" onValueChange={handleValueChange}>
                    <RadioItem value={true} checked={AllowsHeavyWasteValue === true} label="Yes" />
                    <RadioItem value={false} checked={AllowsHeavyWasteValue === false} label="No" />
                    <RemoveButton onClick={() => onClick(SkipProperty.ALLOWS_HEAVY_WASTE)} />
                </RadioFilter>
            </div>
            <div>
                <label> Allowed on road</label>
                <RadioFilter property={SkipProperty.ALLOWED_ON_ROAD} ariaLabel="Allowed on road" onValueChange={handleValueChange}>
                    <RadioItem value={true} checked={allowedOnRoadValue === true} label="Yes" />
                    <RadioItem value={false} checked={allowedOnRoadValue === false} label="No" />
                    <RemoveButton onClick={() => onClick(SkipProperty.ALLOWED_ON_ROAD)} />
                </RadioFilter>
            </div>

            <MainButton ariaLabel="Apply filters" onClick={() => dispatch(applyFilters())}>Apply filters</MainButton>
        </div>
    )
}
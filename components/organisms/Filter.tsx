import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { applyFilters, handleBooleanFilter, handleNumericFilter, removeBooleanFilter } from "@/lib/features/skips/skipsSlice"
import { SkipProperty } from "@/types/types"
import { MainButton } from "../atoms/MainButton"
import { NumericFilter } from "../molecules/NumericFilter"
import { BooleanFilter } from "../molecules/BooleanFilter"

export const Filter = () => {
    const allowsHeavyWasteValue = useAppSelector((state) => state.skips.filters.boolean.allows_heavy_waste)
    const allowedOnRoadValue = useAppSelector((state) => state.skips.filters.boolean.allowed_on_road)
    const hirePeriodDaysValue = useAppSelector((state) => state.skips.filters.numeric.hire_period_days)
    const dispatch = useAppDispatch();
    const handleBooleanValueChange = (property: "allowed_on_road" | "allows_heavy_waste", value: boolean) => {
        dispatch(handleBooleanFilter({ property, value }))
    }
    const handleNumericValueChange = (property: "hire_period_days", value: number) => {
        dispatch(handleNumericFilter({ property, value }))
    }


    const onClick = (property: "allowed_on_road" | "allows_heavy_waste") => {
        dispatch(removeBooleanFilter({ property }))
    }
    return (
        <div className="flex flex-col min-h-full bg-amber-300 self-start p-4 m-4">
            <>
                <label> Allowed on road</label>
                <NumericFilter
                    property={SkipProperty.HIRE_PERIOD_DAYS}
                    ariaLabel="Hire period days"
                    selectedValue={hirePeriodDaysValue}
                    onValueChange={handleNumericValueChange}>
                    <RadioItem value={7} checked={hirePeriodDaysValue === 7} label="7" />
                    <RadioItem value={14} checked={hirePeriodDaysValue === 14} label="14" />
                    <RemoveButton onClick={() => onClick(SkipProperty.ALLOWED_ON_ROAD)} />
                </NumericFilter>
            </>
            <>
                <label> Allows heavy waste</label>
                <BooleanFilter
                    property={SkipProperty.ALLOWS_HEAVY_WASTE}
                    ariaLabel="Allows heavy waste"
                    selectedValue={allowsHeavyWasteValue}
                    onValueChange={handleBooleanValueChange}>
                    <RadioItem value={true} checked={allowsHeavyWasteValue === true} label="Yes" />
                    <RadioItem value={false} checked={allowsHeavyWasteValue === false} label="No" />
                    <RemoveButton onClick={() => onClick(SkipProperty.ALLOWS_HEAVY_WASTE)} />
                </BooleanFilter>
            </>
            <>
                <label> Allowed on road</label>
                <BooleanFilter
                    property={SkipProperty.ALLOWED_ON_ROAD}
                    ariaLabel="Allowed on road"
                    selectedValue={allowedOnRoadValue}
                    onValueChange={handleBooleanValueChange}>
                    <RadioItem value={true} checked={allowedOnRoadValue === true} label="Yes" />
                    <RadioItem value={false} checked={allowedOnRoadValue === false} label="No" />
                    <RemoveButton onClick={() => onClick(SkipProperty.ALLOWED_ON_ROAD)} />
                </BooleanFilter>
            </>
            <MainButton ariaLabel="Apply filters" onClick={() => dispatch(applyFilters())}>Apply filters</MainButton>
        </div>
    )
}
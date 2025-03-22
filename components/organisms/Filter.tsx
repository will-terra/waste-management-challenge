import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { applyFilters, handleBooleanFilter, handleNumericFilter } from "@/lib/features/skips/skipsSlice"
import { SkipProperty } from "@/types/types"
import { MainButton } from "../atoms/MainButton"
import { NumericFilter } from "../molecules/NumericFilter"
import { BooleanFilter } from "../molecules/BooleanFilter"
import { RangeSlider } from "../atoms/RangeSlider"

export const Filter = () => {
    const allowsHeavyWasteValue = useAppSelector((state) => state.skips.filters.boolean.allows_heavy_waste)
    const allowedOnRoadValue = useAppSelector((state) => state.skips.filters.boolean.allowed_on_road)
    const hirePeriodDaysValue = useAppSelector((state) => state.skips.filters.numeric.hire_period_days)
    const transportCostValue = useAppSelector((state) => state.skips.filters.numeric.transport_cost)
    const perTonneCostValue = useAppSelector((state) => state.skips.filters.numeric.per_tonne_cost)
    const dispatch = useAppDispatch();
    const handleBooleanValueChange = (property: SkipProperty.ALLOWED_ON_ROAD | SkipProperty.ALLOWS_HEAVY_WASTE, value: boolean) => {
        dispatch(handleBooleanFilter({ property, value }))
    }
    const handleNumericValueChange = (property: SkipProperty.HIRE_PERIOD_DAYS | SkipProperty.TRANSPORT_COST | SkipProperty.PER_TONNE_COST, value: number) => {
        dispatch(handleNumericFilter({ property, value }))
    }


    const onClick = (property: SkipProperty) => {
        if (property === SkipProperty.ALLOWS_HEAVY_WASTE || property === SkipProperty.ALLOWED_ON_ROAD) {
            dispatch(handleBooleanFilter({ property, value: null }))
        } else {
            dispatch(handleNumericFilter({ property, value: null }))
        }
    }
    return (
        <div className="flex flex-col min-h-full gap-2 bg-amber-300 self-start p-4 m-4">
            <>
                <label> Price</label>
                <RangeSlider />
            </>
            <>
                <label> Per tonne cost</label>
                <NumericFilter
                    property={SkipProperty.PER_TONNE_COST}
                    ariaLabel="Per tonne cost"
                    selectedValue={perTonneCostValue}
                    onValueChange={handleNumericValueChange}>
                    <RadioItem value={0} checked={perTonneCostValue === 0} label="Free" />
                    <RadioItem value={236} checked={perTonneCostValue === 236} label="236" />
                    <RemoveButton onClick={() => onClick(SkipProperty.PER_TONNE_COST)} />
                </NumericFilter>
            </>
            <>
                <label> Transport Cost</label>
                <NumericFilter
                    property={SkipProperty.TRANSPORT_COST}
                    ariaLabel="Transport cost"
                    selectedValue={transportCostValue}
                    onValueChange={handleNumericValueChange}>
                    <RadioItem value={0} checked={transportCostValue === 0} label="Free" />
                    <RadioItem value={236} checked={transportCostValue === 236} label="236" />
                    <RemoveButton onClick={() => onClick(SkipProperty.TRANSPORT_COST)} />
                </NumericFilter>
            </>
            <>
                <label> Hire period days</label>
                <NumericFilter
                    property={SkipProperty.HIRE_PERIOD_DAYS}
                    ariaLabel="Hire period days"
                    selectedValue={hirePeriodDaysValue}
                    onValueChange={handleNumericValueChange}>
                    <RadioItem value={7} checked={hirePeriodDaysValue === 7} label="7" />
                    <RadioItem value={14} checked={hirePeriodDaysValue === 14} label="14" />
                    <RemoveButton onClick={() => onClick(SkipProperty.HIRE_PERIOD_DAYS)} />
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
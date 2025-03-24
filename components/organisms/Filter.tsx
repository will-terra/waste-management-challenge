import { useRef } from "react"
import { Accordion } from "@base-ui-components/react"
import { MainButton } from "../atoms/MainButton"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { RangeSlider } from "../molecules/RangeSlider"
import { NumericFilter } from "../molecules/NumericFilter"
import { BooleanFilter } from "../molecules/BooleanFilter"
import { SkipProperty } from "@/types/types"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { applyFiltersThunk, handleBooleanFilter, handleNumericFilter, resetFilters } from "@/lib/features/filter/filterSlice"

interface MobileProps {
    isMobile: boolean;
}

export const Filter = ({ isMobile }: MobileProps) => {
    const allowsHeavyWasteValue = useAppSelector((state) => state.filter.boolean.allows_heavy_waste)
    const allowedOnRoadValue = useAppSelector((state) => state.filter.boolean.allowed_on_road)
    const hirePeriodDaysValue = useAppSelector((state) => state.filter.numeric.hire_period_days)
    const transportCostValue = useAppSelector((state) => state.filter.numeric.transport_cost)
    const perTonneCostValue = useAppSelector((state) => state.filter.numeric.per_tonne_cost)
    const dispatch = useAppDispatch();
    const accordionTriggerRef = useRef<HTMLButtonElement>(null);

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

    const handleApplyFilters = () => {
        dispatch(applyFiltersThunk())
        if (isMobile) {
            accordionTriggerRef.current?.click();
        }
    }

    const filterContent = (
        <div className="flex flex-col gap-2">
            <label className={`${isMobile ? 'text-2xl' : 'text-4xl'} text-white font-bold ${!isMobile && 'mr-auto mb-4'}`}>
                {!isMobile && 'Filters:'}
            </label>
            <label className="text-2xl text-white font-bold"> By Price</label>
            <RangeSlider />

            <label className="text-2xl text-white font-bold"> Cost per tonne</label>
            <NumericFilter
                property={SkipProperty.PER_TONNE_COST}
                ariaLabel="Per tonne cost"
                selectedValue={perTonneCostValue}
                onValueChange={handleNumericValueChange}>
                <RadioItem value={0} checked={perTonneCostValue === 0} label="Free" />
                <RadioItem value={236} checked={perTonneCostValue === 236} label="236" />
                <RemoveButton onClick={() => onClick(SkipProperty.PER_TONNE_COST)} />
            </NumericFilter>

            <label className="text-2xl text-white font-bold"> Transport Cost</label>
            <NumericFilter
                property={SkipProperty.TRANSPORT_COST}
                ariaLabel="Transport cost"
                selectedValue={transportCostValue}
                onValueChange={handleNumericValueChange}>
                <RadioItem value={0} checked={transportCostValue === 0} label="Free" />
                <RadioItem value={236} checked={transportCostValue === 236} label="236" />
                <RemoveButton onClick={() => onClick(SkipProperty.TRANSPORT_COST)} />
            </NumericFilter>

            <label className="text-2xl text-white font-bold"> Hire period (days)</label>
            <NumericFilter
                property={SkipProperty.HIRE_PERIOD_DAYS}
                ariaLabel="Hire period days"
                selectedValue={hirePeriodDaysValue}
                onValueChange={handleNumericValueChange}>
                <RadioItem value={7} checked={hirePeriodDaysValue === 7} label="7" />
                <RadioItem value={14} checked={hirePeriodDaysValue === 14} label="14" />
                <RemoveButton onClick={() => onClick(SkipProperty.HIRE_PERIOD_DAYS)} />
            </NumericFilter>

            <label className="text-2xl text-white font-bold"> Allows heavy waste?</label>
            <BooleanFilter
                property={SkipProperty.ALLOWS_HEAVY_WASTE}
                ariaLabel="Allows heavy waste"
                selectedValue={allowsHeavyWasteValue}
                onValueChange={handleBooleanValueChange}>
                <RadioItem value={true} checked={allowsHeavyWasteValue === true} label="Yes" />
                <RadioItem value={false} checked={allowsHeavyWasteValue === false} label="No" />
                <RemoveButton onClick={() => onClick(SkipProperty.ALLOWS_HEAVY_WASTE)} />
            </BooleanFilter>

            <label className="text-2xl text-white font-bold"> Allowed on road?</label>
            <BooleanFilter
                property={SkipProperty.ALLOWED_ON_ROAD}
                ariaLabel="Allowed on road"
                selectedValue={allowedOnRoadValue}
                onValueChange={handleBooleanValueChange}>
                <RadioItem value={true} checked={allowedOnRoadValue === true} label="Yes" />
                <RadioItem value={false} checked={allowedOnRoadValue === false} label="No" />
                <RemoveButton onClick={() => onClick(SkipProperty.ALLOWED_ON_ROAD)} />
            </BooleanFilter>

            <div className="flex justify-center gap-4 items-center mt-4">
                <MainButton
                    className="max-w-60"
                    size="large"
                    variant="blue"
                    ariaLabel="Apply filters"
                    onClick={handleApplyFilters}>
                    Apply filters
                </MainButton>
                <RemoveButton onClick={() => dispatch(resetFilters())} />
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <Accordion.Root className="flex justify-center w-full self-start">
                <Accordion.Item className="w-full">
                    <Accordion.Header className="flex justify-center mx-4">
                        <Accordion.Trigger ref={accordionTriggerRef} className="mt-8 w-9/10">
                            <MainButton
                                ariaLabel="Open filters menu"
                                size="large"
                                variant="blue"
                                className="w-40"
                            >
                                Filters ▼
                            </MainButton>
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Panel className="bg-lightGray p-4 m-2 rounded-md">
                        <div className="flex flex-col ml-4">
                            {filterContent}
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion.Root>
        );
    } else {
        return (
            <div className="flex flex-col self-start items-center min-w-[19rem] w-[30vw] min-h-[90dvh] bg-secondaryDarkGray gap-4 px-8 pt-6 pb-12 mr-4 m-4 rounded-md">
                {filterContent}
            </div>
        );
    }
}
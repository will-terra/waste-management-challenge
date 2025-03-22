import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { RadioFilter } from "../molecules/RadioFilter"
import { filterByAllowedOnRoad } from "@/lib/features/skips/skipsSlice"

export const AllowedOnRoadFilter = () => {
    const allowedOnRoadValue = useAppSelector((state) => state.skips.filters.allowed_on_road)
    const dispatch = useAppDispatch();
    const handleValueChange = (value: unknown) => {
        if (typeof value === "boolean")
            dispatch(filterByAllowedOnRoad(value));
    }
    const onClick = () => {
    }
    return (
        <div>
            <label> Allowed on road</label>
            <RadioFilter property="allowed_on_road" ariaLabel="Allowed on road" onValueChange={handleValueChange}>
                <RadioItem value={true} checked={allowedOnRoadValue === true} label="Yes" />
                <RadioItem value={false} checked={allowedOnRoadValue === false} label="No" />
                <RemoveButton onClick={onClick} />
            </RadioFilter>
        </div>)
}


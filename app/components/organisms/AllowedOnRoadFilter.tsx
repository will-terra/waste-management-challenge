import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { RadioItem } from "../atoms/RadioItem"
import { RemoveButton } from "../atoms/RemoveButton"
import { RadioFilter } from "../molecules/RadioFilter"
import { addRadioFilter } from "@/lib/features/skips/skipsSlice"

export const AllowedOnRoadFilter = () => {
    const allowedOnRoadValue = useAppSelector((state) => state.skips.filters.allowedOnRoad)
    const dispatch = useAppDispatch();
    const handleValueChange = (value: unknown) => {
        if (typeof value === "boolean")
            dispatch(addRadioFilter({ property: "allowedOnRoad", value: value }));
    }
    return (
        <RadioFilter property="allowedOnRoad" ariaLabel="Allowed on road" onValueChange={handleValueChange}>
            <RadioItem value={true} checked={allowedOnRoadValue === true} label="Yes" />
            <RadioItem value={false} checked={allowedOnRoadValue === false} label="No" />
            <RemoveButton property="allowedOnRoad" />

        </RadioFilter>)
}


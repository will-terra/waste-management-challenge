import { addRadioFilter, removeRadioFilter } from "@/lib/features/skips/skipsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RadioGroup } from "@base-ui-components/react";
import { RemoveButton } from "../atoms/RemoveButton";
import { RadioItem } from "../atoms/RadioItem";

interface RadioFilterProps {
    property: "allowedOnRoad";
    ariaLabel: string;
    values: string[];
}

export const RadioFilter = (props: RadioFilterProps) => {
    const { property, ariaLabel, values } = props;
    const selectedValue = useAppSelector((state) => state.skips.filters[property])
    const dispatch = useAppDispatch();
    const handleValueChange = (value: unknown) => {
        const booleanValue = value === "yes" ? true : false;
        dispatch(addRadioFilter({ property, value: booleanValue }));
    }

    return (
        <RadioGroup
            aria-label={ariaLabel}
            name={property}
            value={selectedValue}
            onValueChange={(value) => handleValueChange(value)}
            className="flex gap-2"
        >
            {values.map((item: string) => (
                <RadioItem
                    key={item}
                    value={item}
                    checked={false}
                />
            ))}
            <RemoveButton property={property} />
        </RadioGroup >
    );
};


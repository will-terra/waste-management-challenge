import { addRadioFilter, removeRadioFilter } from "@/lib/features/skips/skipsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RadioGroup } from "@base-ui-components/react";

interface RadioFilterProps {
    property: "allowedOnRoad";
    ariaLabel: string;
    children: React.ReactNode;
    onValueChange: (value: unknown, event: Event) => void;
}

export const RadioFilter = (props: RadioFilterProps) => {
    const { property, ariaLabel, children, onValueChange } = props;
    const selectedValue = useAppSelector((state) => state.skips.filters[property])

    return (
        <RadioGroup
            aria-label={ariaLabel}
            name={property}
            value={selectedValue}
            onValueChange={(value, event) => onValueChange(value, event)}
            className="flex gap-2"
        >
            {children}
        </RadioGroup >
    );
};


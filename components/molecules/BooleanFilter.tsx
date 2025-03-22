import { SkipProperty } from "@/types/types";
import { RadioGroup } from "@base-ui-components/react";

interface BooleanFilterProps {
    property: SkipProperty.ALLOWED_ON_ROAD | SkipProperty.ALLOWS_HEAVY_WASTE;
    ariaLabel: string;
    children: React.ReactNode;
    selectedValue: boolean | null;
    onValueChange: (property: SkipProperty.ALLOWED_ON_ROAD | SkipProperty.ALLOWS_HEAVY_WASTE, value: boolean) => void;
}

export const BooleanFilter = (props: BooleanFilterProps) => {
    const { property, ariaLabel, children, onValueChange, selectedValue } = props;

    return (
        <RadioGroup
            aria-label={ariaLabel}
            name={property}
            value={selectedValue}
            onValueChange={(value) => onValueChange(property, value as boolean)}
            className="flex gap-2"
        >
            {children}
        </RadioGroup >
    );
};


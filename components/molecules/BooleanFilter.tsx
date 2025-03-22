import { RadioGroup } from "@base-ui-components/react";

interface BooleanFilterProps {
    property: "allowed_on_road" | "allows_heavy_waste";
    ariaLabel: string;
    children: React.ReactNode;
    selectedValue: boolean | null;
    onValueChange: (property: "allowed_on_road" | "allows_heavy_waste", value: boolean) => void;
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


import { RadioGroup } from "@base-ui-components/react";

interface NumericFilterProps {
    property: "hire_period_days";
    ariaLabel: string;
    children: React.ReactNode;
    selectedValue: number | null;
    onValueChange: (property: "hire_period_days", value: number) => void;
}

export const NumericFilter = (props: NumericFilterProps) => {
    const { property, ariaLabel, children, onValueChange, selectedValue } = props;

    return (
        <RadioGroup
            aria-label={ariaLabel}
            name={property}
            value={selectedValue}
            onValueChange={(value) => onValueChange(property, Number(value))}
            className="flex gap-2"
        >
            {children}
        </RadioGroup >
    );
};

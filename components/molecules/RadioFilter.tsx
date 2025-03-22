import { useAppSelector } from "@/lib/hooks";
import { SkipProperty } from "@/types/types";
import { RadioGroup } from "@base-ui-components/react";



interface RadioFilterProps {
    property: SkipProperty;
    ariaLabel: string;
    children: React.ReactNode;
    onValueChange: (property: SkipProperty, value: boolean) => void;
}

export const RadioFilter = (props: RadioFilterProps) => {
    const { property, ariaLabel, children, onValueChange } = props;
    const selectedValue = useAppSelector((state) => state.skips.filters[property])

    return (
        <RadioGroup
            aria-label={ariaLabel}
            name={property}
            value={selectedValue}
            onValueChange={(value) => onValueChange(property as SkipProperty, value as boolean)}
            className="flex gap-2"
        >
            {children}
        </RadioGroup >
    );
};


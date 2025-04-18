import { SkipProperty } from "@/types/types";
import { RadioGroup } from "@base-ui-components/react";

interface NumericFilterProps {
  property:
    | SkipProperty.HIRE_PERIOD_DAYS
    | SkipProperty.TRANSPORT_COST
    | SkipProperty.PER_TONNE_COST;
  ariaLabel: string;
  children: React.ReactNode;
  selectedValue: number | null;
  onValueChange: (
    property:
      | SkipProperty.HIRE_PERIOD_DAYS
      | SkipProperty.TRANSPORT_COST
      | SkipProperty.PER_TONNE_COST,
    value: number,
  ) => void;
}

export const NumericFilter = (props: NumericFilterProps) => {
  const { property, ariaLabel, children, onValueChange, selectedValue } = props;

  return (
    <div className="flex flex-col gap-2">
      <label id={ariaLabel} className="text-2xl text-white font-bold">
        {ariaLabel}
      </label>
      <RadioGroup
        aria-labelledby={ariaLabel}
        name={property}
        value={selectedValue}
        onValueChange={(value) => onValueChange(property, Number(value))}
        className="flex gap-2"
      >
        {children}
      </RadioGroup>
    </div>
  );
};

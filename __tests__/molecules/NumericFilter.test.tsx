import { render, screen, fireEvent } from '@testing-library/react';
import { NumericFilter } from '@/components/molecules/NumericFilter';
import { SkipProperty } from '@/types/types';
import { RadioItem } from '@/components/atoms/RadioItem';

describe('NumericFilter Component', () => {
    test('should render the NumericFilter component with children', () => {
        render(
            <NumericFilter
                property={SkipProperty.HIRE_PERIOD_DAYS}
                ariaLabel="Hire Period Days"
                selectedValue={10}
                onValueChange={jest.fn()}
            >
                <div>Child Element</div>
            </NumericFilter>
        );
        const childElement = screen.getByText('Child Element');
        expect(childElement).toBeInTheDocument();
    });

    test('should call onValueChange with the correct arguments when value changes', () => {
        const mockOnValueChange = jest.fn();
        render(
            <NumericFilter
                property={SkipProperty.HIRE_PERIOD_DAYS}
                ariaLabel="Hire Period Days"
                selectedValue={10}
                onValueChange={mockOnValueChange}
            >
                <RadioItem value={10} checked={true} label="10 Days" />
                <RadioItem value={20} checked={false} label="20 Days" />
            </NumericFilter>
        );
        const radioItem = screen.getByLabelText('Filter by 20');
        fireEvent.click(radioItem);
        expect(mockOnValueChange).toHaveBeenCalledWith(SkipProperty.HIRE_PERIOD_DAYS, 20);
    });
});

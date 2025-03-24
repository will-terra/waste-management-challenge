import { render, screen, fireEvent } from '@testing-library/react';
import { BooleanFilter } from '@/components/molecules/BooleanFilter';
import { SkipProperty } from '@/types/types';
import { RadioItem } from '@/components/atoms/RadioItem';

describe('BooleanFilter Component', () => {
    it('should render the BooleanFilter component with children', () => {
        render(
            <BooleanFilter
                property={SkipProperty.ALLOWED_ON_ROAD}
                ariaLabel="Allowed on Road"
                selectedValue={true}
                onValueChange={jest.fn()}
            >
                <div>Child Element</div>
            </BooleanFilter>
        );
        const childElement = screen.getByText('Child Element');
        expect(childElement).toBeInTheDocument();
    });

    it('should call onValueChange with the correct arguments when value changes', () => {
        const mockOnValueChange = jest.fn();
        render(
            <BooleanFilter
                property={SkipProperty.ALLOWED_ON_ROAD}
                ariaLabel="Allowed on Road"
                selectedValue={true}
                onValueChange={mockOnValueChange}
            >
                <RadioItem value={true} checked={true} label="Yes" />
                <RadioItem value={false} checked={false} label="No" />
            </BooleanFilter>
        );
        const radioItem = screen.getByLabelText('Filter by false');
        fireEvent.click(radioItem);
        expect(mockOnValueChange).toHaveBeenCalledWith(SkipProperty.ALLOWED_ON_ROAD, false);
    });
});

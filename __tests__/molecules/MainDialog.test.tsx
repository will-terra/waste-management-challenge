import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { MainDialog } from '@/components/molecules/MainDialog';
import * as hooks from '@/lib/hooks';
import { setSelectedSkip } from '@/lib/features/skips/skipsSlice';
import { resetFiltersThunk } from '@/lib/features/filter/filterSlice';

jest.mock('@/lib/hooks', () => ({
    useAppDispatch: jest.fn(),
}));

jest.mock('@/lib/features/skips/skipsSlice', () => ({
    setSelectedSkip: jest.fn(() => 'mocked-set-selected-skip-action'),
}));

jest.mock('@/lib/features/filter/filterSlice', () => ({
    resetFiltersThunk: jest.fn(() => 'mocked-reset-filters-thunk-action'),
}));

describe('MainDialog', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (hooks.useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });

    test('dispatches setSelectedSkip and resetFiltersThunk when Close button is clicked', async () => {
        render(<MainDialog size={4} />);

        const continueButton = screen.getByLabelText(/Continue with 4 Yard selected Skip/i);
        fireEvent.click(continueButton);

        expect(screen.getByText('Congratulations')).toBeInTheDocument();

        const closeButton = screen.getByLabelText(/Close dialog/i);
        fireEvent.click(closeButton);

        expect(setSelectedSkip).toHaveBeenCalledWith(null);
        expect(resetFiltersThunk).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenNthCalledWith(1, 'mocked-set-selected-skip-action');
        expect(mockDispatch).toHaveBeenNthCalledWith(2, 'mocked-reset-filters-thunk-action');
    });
});

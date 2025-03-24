import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Message } from '@/components/atoms/Message';

const mockStore = configureStore();

describe('Message Component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            filter: {
                boolean: {
                    allowed_on_road: null,
                    allows_heavy_waste: null,
                },
                numeric: {
                    hire_period_days: null,
                    transport_cost: null,
                    per_tonne_cost: null,
                },
                range: {
                    price: [311, 944]
                }
            },
            skips: {
                skips: [],
                filteredSkips: []
            }
        });
        store.dispatch = jest.fn();
    });

    it('should render the title and subtitle correctly', () => {
        render(
            <Provider store={store}>
                <Message title="Test Title" subtitle="Test Subtitle" />
            </Provider>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('should dispatch resetFiltersThunk when the button is clicked', () => {
        render(
            <Provider store={store}>
                <Message title="Test Title" subtitle="Test Subtitle" />
            </Provider>
        );

        const resetButton = screen.getByText("Reset Filters");
        fireEvent.click(resetButton);

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
});

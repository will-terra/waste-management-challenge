import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '@/components/molecules/ProductCard';
import { Skip } from '@/types/types';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const mockProduct: Skip = {
    id: 1,
    size: 10,
    allows_heavy_waste: true,
    allowed_on_road: true,
    price_before_vat: 100,
    vat: 20,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: null,
};

describe('ProductCard Component', () => {
    it('should render the ProductCard component', () => {
        render(
            <Provider store={store}>
                <ProductCard {...mockProduct} />
            </Provider>
        );
        const productElement = screen.getByText('10 Yard Skip');
        expect(productElement).toBeInTheDocument();
    });

    it('should call setSelectedSkip with the correct arguments when clicked', () => {
        const { getByText } = render(
            <Provider store={store}>
                <ProductCard {...mockProduct} />
            </Provider>
        );
        const productElement = getByText('10 Yard Skip');
        fireEvent.click(productElement);
        const state = store.getState();
        expect(state.skips.selectedSkip).toEqual(mockProduct);
    });

    it('should call setSelectedSkip with null when clicked again', () => {
        const { getByText } = render(
            <Provider store={store}>
                <ProductCard {...mockProduct} />
            </Provider>
        );
        const productElement = getByText('10 Yard Skip');
        fireEvent.click(productElement);
        fireEvent.click(productElement);
        fireEvent.click(productElement);
        const state = store.getState();
        expect(state.skips.selectedSkip).toBeNull();
    });
});
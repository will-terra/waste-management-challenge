import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RangeSlider } from '@/components/atoms/RangeSlider';
import { handleRangeFilter } from '@/lib/features/filter/filterSlice';

const mockStore = configureStore();

describe('RangeSlider Component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            filter: {
                range: {
                    price: [311, 944]
                }
            }
        });
        store.dispatch = jest.fn();
    });

    it('should render the RangeSlider component', () => {
        render(
            <Provider store={store}>
                <RangeSlider />
            </Provider>
        );
        const sliderElements = screen.getAllByRole('slider');
        expect(sliderElements.length).toBe(2);
    });

    it('should dispatch handleRangeFilter when the slider value changes', () => {
        render(
            <Provider store={store}>
                <RangeSlider />
            </Provider>
        );

        const sliderElements = screen.getAllByRole('slider');
        fireEvent.change(sliderElements[0], { target: { value: 400 } });
        fireEvent.change(sliderElements[1], { target: { value: 800 } });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
    });
});

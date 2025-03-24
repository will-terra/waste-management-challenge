import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleRangeFilter } from '@/lib/features/skips/skipsSlice';

export const RangeSlider = () => {
    const rangeValues = useAppSelector((state) => state.skips.filters.range.price)
    const dispatch = useAppDispatch();
    const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
        const newValue = value as [number, number];
        dispatch(handleRangeFilter({ property: 'price', value: newValue }))
    }
    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <div className="w-7/10 md:w-52">
            <Slider
                getAriaLabel={() => 'Price range'}
                value={rangeValues}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={311}
                max={944}
                step={50}
                disableSwap
            />

        </div>
    );
}
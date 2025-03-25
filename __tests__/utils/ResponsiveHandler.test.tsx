import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { ResponsiveHandler } from '@/components/utils/ResponsiveHandler';
import { setIsMobile } from '@/lib/features/skips/skipsSlice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('@/lib/features/skips/skipsSlice', () => ({
    setIsMobile: jest.fn(),
}));

describe('ResponsiveHandler', () => {
    let dispatchMock: jest.Mock;

    beforeEach(() => {
        dispatchMock = jest.fn();
        (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should dispatch setIsMobile with true when window width is less than or equal to 768', () => {
        global.innerWidth = 768;
        render(<ResponsiveHandler />);
        expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(true));
    });

    it('should dispatch setIsMobile with false when window width is greater than 768', () => {
        global.innerWidth = 1024;
        render(<ResponsiveHandler />);
        expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(false));
    });

    it('should update setIsMobile on window resize', () => {
        render(<ResponsiveHandler />);
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));
        expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(true));

        global.innerWidth = 1024;
        global.dispatchEvent(new Event('resize'));
        expect(dispatchMock).toHaveBeenCalledWith(setIsMobile(false));
    });
});

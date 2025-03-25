"use client"
import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { setIsMobile } from '@/lib/features/skips/skipsSlice';

export function ResponsiveHandler() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const updateIsMobile = () => {
            dispatch(setIsMobile(window.innerWidth <= 768));
        };

        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, [dispatch]);
    return null;
}

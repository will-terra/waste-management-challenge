import { Menu } from '@base-ui-components/react'
import { MainButton } from '../atoms/MainButton'
import { Filter } from './Filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setIsMenuOpen } from '@/lib/features/skips/skipsSlice'

export const MobileFilter = () => {
    const isMenuOpen = useAppSelector((state) => state.skips.isMenuOpen);
    const dispatch = useAppDispatch();
    const handleMenuOpenChange = () => {
        dispatch(setIsMenuOpen(!isMenuOpen));
    }
    return (
        <Menu.Root open={isMenuOpen} onOpenChange={handleMenuOpenChange}>
            <Menu.Trigger className="mt-8 w-9/10">
                <MainButton
                    ariaLabel="Open filters menu"
                    size="large"
                    variant="blue"
                >
                    Filters {isMenuOpen ? '▲' : '▼'}
                </MainButton>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner className="min-w-screen rounded-md">
                    <Menu.Popup className="mt-2 mr-2 overflow-scroll">
                        <Filter />
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    )
}


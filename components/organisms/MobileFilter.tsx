import { Menu } from '@base-ui-components/react'
import { MainButton } from '../atoms/MainButton'
import { Filter } from './Filter'

type Props = {}

export const MobileFilter = (props: Props) => {
    return (
        <Menu.Root>
            <Menu.Trigger className=" mt-8 w-9/10">
                <MainButton
                    ariaLabel="Open filters menu"
                    size="large"
                    variant="blue"
                >
                    Filters
                </MainButton>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner
                    className={"min-w-full rounded-md"}
                    sideOffset={8} >
                    <Menu.Popup>
                        <Filter />
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    )
}


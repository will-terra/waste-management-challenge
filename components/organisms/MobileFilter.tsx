import { Menu } from '@base-ui-components/react'
import { MainButton } from '../atoms/MainButton'
import { Filter } from './Filter'
import { useState } from 'react'

type Props = {}

export const MobileFilter = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu.Root open={isOpen} onOpenChange={setIsOpen}>
            <Menu.Trigger className="mt-8 w-9/10">
                <MainButton
                    ariaLabel="Open filters menu"
                    size="large"
                    variant="blue"
                >
                    Filters {isOpen ? '▲' : '▼'}
                </MainButton>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner className={"min-w-full mt-8 rounded-md"}>
                    <Menu.Popup>
                        <Filter />
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    )
}


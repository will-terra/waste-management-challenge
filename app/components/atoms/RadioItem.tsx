import React from 'react'
import MainButton from './MainButton'
import { Radio } from '@base-ui-components/react'

interface RadioItemProps {
    value: string | number;
    checked: boolean;
}

const RadioItem = ({ value, checked }: RadioItemProps) => {
    return (
        <Radio.Root value={value}>
            <MainButton
                ariaLabel={`Filter by ${value}`}
                variant={checked ? "white" : "black"}
                size="large"
            >
                {value}
            </MainButton>
        </Radio.Root>
    )
}

export default RadioItem
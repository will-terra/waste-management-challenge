import React from 'react'
import { Radio } from '@base-ui-components/react'
import { MainButton } from './MainButton';

interface RadioItemProps {
    value: string | number;
    checked: boolean;
}

export const RadioItem = ({ value, checked }: RadioItemProps) => {
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


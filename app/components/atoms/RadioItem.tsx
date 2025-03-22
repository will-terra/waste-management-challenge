import React from 'react'
import { Radio } from '@base-ui-components/react'
import { MainButton } from './MainButton';

interface RadioItemProps {
    value: boolean | number;
    checked: boolean;
    label: string;
}

export const RadioItem = ({ value, checked, label }: RadioItemProps) => {
    return (
        <Radio.Root value={value}>
            <MainButton
                ariaLabel={`Filter by ${value}`}
                variant={checked ? "blue" : "gray"}
                size="small"
            >
                {label}
            </MainButton>
        </Radio.Root>
    )
}


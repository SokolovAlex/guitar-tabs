'use client'

import { Input } from '@nextui-org/react'
import { Controller, useFormContext, get } from 'react-hook-form'

type InputFieldProps = {
    name: string;
    label: string;
    required: boolean;
    onBlur: () => void;
}

export const InputField = ({ name, label, required, onBlur }: InputFieldProps) => {
    const { control, formState: { errors } } = useFormContext()

    return <Controller control={control} rules={{ required }} name={name} render={({ field }) => {
        return <Input
            value={field.value}
            onChange={(e) => {
                field.onChange(e.target.value)
            }}
            isRequired={required}
            type="text"
            label={label}
            onBlur={onBlur}
            className="max-w-xs"
            color={get(errors, name) && 'danger'}
        />
    }}/>
}
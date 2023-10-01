import React from 'react'

import { InputComponent, Wrapper } from './styles'
import { Label } from '../../atoms/label'

interface InputProps {
  label?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  placeholder,
  value,
  type = 'text',
  onChange,
}: InputProps): React.JSX.Element {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputComponent
        haslabel={String(!!label)}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  )
}

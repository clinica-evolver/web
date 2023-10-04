import React from 'react'

import { InputComponent, Wrapper } from './styles'
import { Label } from '../../atoms/label'

interface InputProps {
  label?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value: string
  marginbottom?: number
  maxLength?: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  placeholder,
  value,
  type = 'text',
  marginbottom = 0,
  maxLength,
  onChange,
}: InputProps): React.JSX.Element {
  return (
    <Wrapper marginbottom={String(marginbottom)}>
      {label && <Label>{label}</Label>}
      <InputComponent
        maxLength={maxLength}
        haslabel={String(!!label)}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  )
}

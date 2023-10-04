import React from 'react'

import { Wrapper } from './styles'
import { Label } from '../../atoms/label'

interface SelectProps {
  label?: string
  marginbottom?: number
  options: {
    value: string
    label: string
  }[]
  onChange(selectedOption: string): void
}

export function Select({
  label,
  options,
  marginbottom = 0,
  onChange,
}: SelectProps): React.JSX.Element {
  return (
    <Wrapper haslabel={String(!!label)} marginbottom={marginbottom}>
      {label && <Label>{label}</Label>}
      <select onChange={(selectprops) => onChange(selectprops.target.value)}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Wrapper>
  )
}

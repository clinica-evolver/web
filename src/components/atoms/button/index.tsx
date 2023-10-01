import React from 'react'

import { ButtonComponent } from './styles'

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: React.ReactNode
  marginTop?: number
  onClick?: () => void
}

export function Button({
  children,
  type,
  marginTop = 0,
  onClick,
}: ButtonProps): React.JSX.Element {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      margintop={String(marginTop)}
    >
      {children}
    </ButtonComponent>
  )
}

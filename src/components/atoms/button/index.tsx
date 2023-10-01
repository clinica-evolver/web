import React from 'react'

import { ButtonComponent } from './styles'

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: React.ReactNode
  marginTop?: number
  dsiabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export function Button({
  children,
  loading,
  dsiabled,
  type,
  marginTop = 0,
  onClick,
}: ButtonProps): React.JSX.Element {
  return (
    <ButtonComponent
      disabled={dsiabled}
      type={type}
      onClick={onClick}
      margintop={String(marginTop)}
    >
      {loading ? 'Carregando...' : children}
    </ButtonComponent>
  )
}

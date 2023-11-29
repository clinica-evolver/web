import React from 'react'

import { ButtonComponent } from './styles'
import { useTheme } from 'styled-components'

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children: React.ReactNode
  marginTop?: number
  dsiabled?: boolean
  loading?: boolean
  backgroundColor?: string
  onClick?: () => void
}

export function Button({
  children,
  loading,
  dsiabled,
  type,
  marginTop = 0,
  backgroundColor,
  onClick,
}: ButtonProps): React.JSX.Element {
  const { color: colorTheme } = useTheme()

  return (
    <ButtonComponent
      backgroundColor={backgroundColor || colorTheme.green500}
      disabled={dsiabled}
      type={type}
      onClick={onClick}
      margintop={String(marginTop)}
    >
      {loading ? 'Carregando...' : children}
    </ButtonComponent>
  )
}

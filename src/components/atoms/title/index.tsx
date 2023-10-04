import React from 'react'
import { TitleComponent } from './styles'

interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps): React.JSX.Element {
  return <TitleComponent>{children}</TitleComponent>
}

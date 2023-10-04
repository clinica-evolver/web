import React from 'react'
import { SubTitleComponent } from './styles'

interface SubTitleProps {
  children: React.ReactNode
}

export function SubTitle({ children }: SubTitleProps): React.JSX.Element {
  return <SubTitleComponent>{children}</SubTitleComponent>
}

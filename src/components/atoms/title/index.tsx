import React from 'react'
import { TitleComponent } from './styles'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function Title({ children, ...rest }: TitleProps): React.JSX.Element {
  return <TitleComponent {...rest}>{children}</TitleComponent>
}

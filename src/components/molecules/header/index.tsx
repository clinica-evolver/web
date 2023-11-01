import React from 'react'

import { Title } from '@atoms/title'
import { HeaderContainer } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps): React.JSX.Element {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  )
}

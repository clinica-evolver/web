import React from 'react'

import { LabelComponent } from './styles'

interface LabelProps {
  children: React.ReactNode
}

export function Label({ children }: LabelProps): React.JSX.Element {
  return <LabelComponent>{children}</LabelComponent>
}

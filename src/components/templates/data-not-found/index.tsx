import React from 'react'

import { DataNotFoundContainer, DataNotFoundTitle } from './styles'
import { SubTitle } from '@atoms/sub-title'

interface DataNotFoundTemplateProps {
  title: string
  message?: string
}

export function DataNotFoundTemplate({
  title,
  message,
}: DataNotFoundTemplateProps): React.JSX.Element {
  return (
    <DataNotFoundContainer>
      <DataNotFoundTitle>{title}</DataNotFoundTitle>
      <SubTitle>{message}</SubTitle>
    </DataNotFoundContainer>
  )
}

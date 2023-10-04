import React from 'react'
import { IconButtonWrapper } from './styles'
import { useTheme } from 'styled-components'

interface IconButtonProps {
  image: string
  backgroundcolor?: string
  onClick?: () => void
}

export function IconButton({
  image,
  backgroundcolor,
  onClick,
}: IconButtonProps): React.JSX.Element {
  const { color } = useTheme()

  return (
    <IconButtonWrapper
      backgroundcolor={backgroundcolor || color.green500}
      onClick={onClick}
    >
      <img src={image} alt="icon" />
    </IconButtonWrapper>
  )
}

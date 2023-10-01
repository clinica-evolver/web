import React from 'react'

import logoIMG from '../../../assets/logo/fachada.png'
import { LogoComponent } from './styles'

interface LogoProps {
  width?: number
}

export function Logo({ width = 100 }: LogoProps): React.JSX.Element {
  const height = (width * 0.3).toString()

  return (
    <LogoComponent
      src={logoIMG}
      alt="logo"
      width={String(width)}
      height={height}
    />
  )
}

import styled from 'styled-components'

interface LogoComponentProps {
  width: string
  height: string
}

export const LogoComponent = styled.img<LogoComponentProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

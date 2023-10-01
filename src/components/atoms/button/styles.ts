import styled from 'styled-components'

interface ButtonComponentProps {
  margintop: string
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.color.green500};
  border: none;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  margin-top: ${({ margintop }) => margintop}px;
`

import styled from 'styled-components'

interface WrapperProps {
  backgroundcolor: string
}

export const IconButtonWrapper = styled.button<WrapperProps>`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;

  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`

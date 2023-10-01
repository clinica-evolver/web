import styled from 'styled-components'

interface InputProps {
  haslabel?: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputComponent = styled.input<InputProps>`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin-top: ${({ haslabel }) => (haslabel === 'true' ? '0.5rem' : '0')};
  margin-bottom: ${({ haslabel }) => (haslabel === 'true' ? '0.5rem' : '0')};
`

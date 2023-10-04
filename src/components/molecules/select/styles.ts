import styled from 'styled-components'

interface WrapperProps {
  haslabel: string
  marginbottom: number
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginbottom }) => marginbottom}rem;

  select {
    width: 100%;
    height: 2.5rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 0.2rem;
    margin-top: ${({ haslabel }) => (haslabel === 'true' ? '0.5rem' : '0')};
    margin-bottom: ${({ haslabel }) => (haslabel === 'true' ? '0.5rem' : '0')};
  }
`

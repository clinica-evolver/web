import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};

  h4 {
    width: 40%;
    font-weight: 500;
  }

  p {
    width: 60%;
    font-weight: 300;
    font-size: 0.8rem;
  }
`

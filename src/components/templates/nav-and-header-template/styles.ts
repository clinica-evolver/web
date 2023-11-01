import styled from 'styled-components'

export const NavAndHeaderContainer = styled.section`
  display: flex;

  nav {
    width: 17rem;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.green500};
  }

  .template-content {
    flex: 1;
  }
`

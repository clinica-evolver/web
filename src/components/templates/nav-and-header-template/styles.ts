import styled from 'styled-components'

export const NavAndHeaderContainer = styled.section`
  display: flex;

  nav {
    width: 17rem;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.green500};

    .container-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
    }

    ul {
      margin-top: 2rem;

      li {
        padding: 1rem 2rem;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.color.white};
        }
      }

      li:hover {
        background-color: ${({ theme }) => theme.color.green600};
      }
    }
  }

  .template-content {
    flex: 1;
  }
`

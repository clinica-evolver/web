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
      height: 70%;

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

    .container-user {
      margin-top: auto;
      padding: 1rem 2rem;

      .initials {
        background-color: ${({ theme }) => theme.color.oranje500};
        padding: 0.5rem;
        border-radius: 50%;
        color: ${({ theme }) => theme.color.white};
      }

      .name {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.color.white};
      }

      .signout-button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 0.2rem;
        background-color: ${({ theme }) => theme.color.red500};
        color: ${({ theme }) => theme.color.white};
        border: none;
        cursor: pointer;
      }
    }
  }

  .template-content {
    flex: 1;
  }
`

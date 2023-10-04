import styled from 'styled-components'

export const DrawerWrapper = styled.div`
  .fade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }

  .content {
    position: fixed;
    top: 0;
    right: 0;
    width: 26.25rem;
    height: 100%;
    background-color: ${({ theme }) => theme.color.white};
    z-index: 10;
    transition: 0.2s;
    padding: 2rem;
    animation: appear 0.5s;

    @keyframes appear {
      from {
        transform: translateX(100px);
      }
      to {
        transform: translateX(0);
      }
    }

    .content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

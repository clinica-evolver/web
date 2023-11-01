import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  padding: 2rem;

  .action-area {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;

    .search {
      display: flex;
      align-items: center;
      width: 25%;

      h3 {
        margin-right: 1rem;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      width: 25%;
    }
  }

  .table-area {
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 2rem;

      td,
      th {
        border: 1px solid ${({ theme }) => theme.color.gray300};
        text-align: left;
        padding: 8px;
      }

      .action-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      tr:nth-child(even) {
        background-color: ${({ theme }) => theme.color.gray100};
      }
    }
  }
`

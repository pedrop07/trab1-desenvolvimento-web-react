import styled from 'styled-components'

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;

  thead {
    position: sticky;
    z-index: 9;
    top: 0;
    border-bottom: 1px solid #ffffff1a;

    div {
      padding: 0.5rem 0.25rem;
    }
  }

  tr {
    color: #b3b3b3;
  }

  tbody {
    tr {
      &:hover {
        background: #2c2c2c;
      }
    }

    button {
      all: unset;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
`

export const StyledContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const MusicName = styled.div`
  color: #fff;
`

export const EmptyMusicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const EmptyMusics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
`

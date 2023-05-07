import styled from 'styled-components'

export const EmptyMusicsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 1rem;

  padding: 1rem 2rem;
  text-align: center;

  span {
    font-size: 20px;
  }
`

export const MusicCard = styled.div`
  padding: 16px 20px 20px;
  background-color: #181818;
  border-radius: 8px;

  h5 {
    color: #fff;
    font-size: 1.15rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }

  span {
    font-size: 0.95rem;
    color: #a7a7a7;
  }
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 32px;
    height: 32px;
  }
`

import styled from 'styled-components'

export const MusicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const MusicCard = styled.div`
  cursor: pointer;
  background-color: #282828;
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  transition: background-color 0.3s ease;

  a {
    all: unset;
  }

  img {
    margin-bottom: 1rem;
    width: 230px;
    height: 230px;
  }

  &:hover {
    background: #303030;
  }
`

export const EmptyMusics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
`

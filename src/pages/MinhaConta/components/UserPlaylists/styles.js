import styled from 'styled-components'

export const UserPlaylistsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const EmptyPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
`

export const CreatePlaylistButton = styled.button`
  all: unset;
  cursor: pointer;
  background: none;
  height: 90px;
  width: 90px;

  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;

  &:hover {
    background-color: #ffffff1a;
  }
`

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
`

export const PlaylistCard = styled.div`
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

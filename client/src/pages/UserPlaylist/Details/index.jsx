import { useContext } from 'react'
import { PlaylistDetails, PlaylistTitle } from './styles'
import { Context } from '../../../contexts/ContextProvider'

export function Details({ selectedPlaylist }) {
  const { loggedUser } = useContext(Context)

  return (
    <PlaylistDetails>
      <img src={selectedPlaylist?.img} alt="imagem de exemplo" />
      <PlaylistTitle>
        <span>Playlist</span>
        {selectedPlaylist?.name}
        <span>Autor: {loggedUser?.name}</span>
      </PlaylistTitle>
    </PlaylistDetails>
  )
}

import { useContext } from 'react'
import { DetailsContainer, PlaylistDetails, PlaylistTitle } from './styles'
import { Context } from '../../../contexts/ContextProvider'
import { Musics } from '../Musics'

export function Details({ playlist }) {
  const { loggedUser } = useContext(Context)

  return (
    <DetailsContainer>
      <PlaylistDetails>
        <img src={playlist?.img} alt="imagem de exemplo" />
        <PlaylistTitle>
          <span>PLAYLIST</span>
          {playlist?.title}
          <span>Autor: {loggedUser?.name}</span>
        </PlaylistTitle>
      </PlaylistDetails>

      <Musics playlist={playlist} />
    </DetailsContainer>
  )
}

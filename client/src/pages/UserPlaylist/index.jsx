import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Nav } from './Nav'
import { RightContainer, UserPlaylistContainer } from './styles'
import { Details } from './Details'
import { Musics } from './Musics'

export function UserPlaylist() {
  const { id } = useParams()
  const [selectedPlaylist, setSelectedPlaylist] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/playlists/${id}`,
        )
        setSelectedPlaylist(response.data)
      } catch {
        toast.error('Erro no servidor, tente novamente')
      }
    }

    fetchData()
  }, [])

  return (
    <UserPlaylistContainer>
      <Nav selectedPlaylist={selectedPlaylist} />

      <RightContainer>
        <Details selectedPlaylist={selectedPlaylist} />
        <Musics
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
        />
      </RightContainer>
    </UserPlaylistContainer>
  )
}

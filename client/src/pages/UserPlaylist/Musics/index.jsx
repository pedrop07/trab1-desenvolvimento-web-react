import {
  Clock,
  PauseCircle,
  PlayCircle,
  PlusCircle,
  XCircle,
} from 'phosphor-react'
import {
  EmptyMusicsContainer,
  EmptyMusics,
  StyledTable,
  StyledContainer,
  AuthorContainer,
  MusicName,
} from './styles'
import { Popconfirm } from 'antd'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useContext, useState } from 'react'
import { Context } from '../../../contexts/ContextProvider'

export function Musics({ selectedPlaylist, setSelectedPlaylist }) {
  const { loggedUser, setLoggedUser } = useContext(Context)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio] = useState(new Audio())

  async function handleDeleteMusic(deletedMusic) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/playlists/${selectedPlaylist?.id}/musics/${deletedMusic.id}`,
      )

      const updatedPlaylists = loggedUser?.playlists?.map((playlist) => {
        if (playlist.id === selectedPlaylist.id) {
          return {
            ...response.data,
          }
        } else {
          return {
            ...playlist,
          }
        }
      })

      const updatedUser = {
        ...loggedUser,
        playlists: updatedPlaylists,
      }

      setSelectedPlaylist({
        ...response.data,
      })

      localStorage.setItem('user', JSON.stringify(updatedUser))

      setLoggedUser(updatedUser)
    } catch (error) {
      console.log(error)
      toast.error('Erro no servidor, tente novamente')
    }
  }

  function playSong(index) {
    if (index === currentSongIndex && isPlaying) {
      setIsPlaying(false)
      audio.pause()
    } else {
      setCurrentSongIndex(index)
      setIsPlaying(true)
      audio.src = selectedPlaylist?.musics[index].path
      audio.play()
    }
  }

  return (
    <>
      {selectedPlaylist?.musics?.length > 0 ? (
        <StyledTable>
          <thead>
            <tr>
              <td>
                <div># Título</div>
              </td>
              <td>Álbum</td>
              <td>
                <Clock size={20} />
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {selectedPlaylist?.musics?.map((music, index) => {
              return (
                <>
                  <tr key={music.id}>
                    <td>
                      <StyledContainer>
                        <div>
                          <button onClick={() => playSong(index)}>
                            {isPlaying && currentSongIndex === index ? (
                              <PauseCircle size={30} weight="light" />
                            ) : (
                              <PlayCircle size={30} weight="light" />
                            )}
                          </button>
                        </div>
                        <div>{index + 1}</div>
                        <div>
                          <img
                            src={music.img}
                            alt="exemplo"
                            height={40}
                            width={40}
                          />
                        </div>
                        <AuthorContainer>
                          <MusicName>{music.name}</MusicName>
                          <div>{music.author}</div>
                        </AuthorContainer>
                      </StyledContainer>
                    </td>
                    <td>{music.album}</td>
                    <td>{music.duration}</td>
                    <td>
                      <Popconfirm
                        title={`Remover ${music.name} desta playlist ?`}
                        okText="Confirmar"
                        cancelText="Cancelar"
                        onConfirm={() => handleDeleteMusic(music)}
                        icon={
                          <XCircle
                            style={{
                              color: 'red',
                            }}
                          />
                        }
                      >
                        <button>
                          <XCircle size={30} />
                        </button>
                      </Popconfirm>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </StyledTable>
      ) : (
        <EmptyMusicsContainer>
          <EmptyMusics>
            <PlusCircle size={80} weight="light" />

            <h3>As músicas dessa playlist vão aparecer aqui</h3>
          </EmptyMusics>
        </EmptyMusicsContainer>
      )}
    </>
  )
}

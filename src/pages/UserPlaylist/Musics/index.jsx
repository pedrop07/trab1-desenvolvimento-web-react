import { Clock, PlusCircle, XCircle } from 'phosphor-react'
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
import { useContext } from 'react'
import { Context } from '../../../contexts/ContextProvider'

export function Musics({ selectedPlaylist, setSelectedPlaylist }) {
  const { loggedUser, setLoggedUser } = useContext(Context)

  async function handleDeleteMusic(deletedMusic) {
    try {
      const updatedMusics = selectedPlaylist?.musics.filter(
        (music) => music !== deletedMusic,
      )

      await axios.patch(
        `http://localhost:3000/playlists/${selectedPlaylist?.id}`,
        {
          ...selectedPlaylist,
          musics: updatedMusics,
        },
      )

      const updatedPlaylists = loggedUser?.playlists?.map((userPlaylist) => {
        if (userPlaylist.id === selectedPlaylist.id) {
          return {
            ...userPlaylist,
            musics: updatedMusics,
          }
        } else {
          return {
            ...userPlaylist,
          }
        }
      })

      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))

      setSelectedPlaylist({
        ...selectedPlaylist,
        musics: updatedMusics,
      })

      setLoggedUser({
        ...loggedUser,
        playlists: updatedPlaylists,
      })
    } catch (error) {
      console.log(error)
      toast.error('Erro no servidor, tente novamente')
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
                <tr key={music.id}>
                  <td>
                    <StyledContainer>
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

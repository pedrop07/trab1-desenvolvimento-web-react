import { useContext, useState } from 'react'
import { Context } from '../../../../contexts/ContextProvider'
import { EmptyMusicsContainer, MusicCard, Options } from './styles'
import { DotsThree } from 'phosphor-react'
import { Menu } from 'antd'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export function MusicsContainer() {
  const { musics, loggedUser, setLoggedUser } = useContext(Context)

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const playlists = loggedUser?.playlists?.map(({ title }) =>
    getItem(title, title),
  )

  const items = [
    getItem('Navigation', 'sub2', <DotsThree />, [
      getItem('Adicionar à playlist', 'sub3', null, playlists),
    ]),
  ]

  async function handleAddMusicToPlaylist(playlistTitle, selectedMusic) {
    try {
      const selectedPlaylist = loggedUser?.playlists.find(
        ({ title }) => title === playlistTitle,
      )

      const updatedMusics = [...selectedPlaylist.musics, selectedMusic]

      const updatedPlaylists = loggedUser?.playlists?.map((playlist) => {
        if (playlist.id === selectedPlaylist.id) {
          return {
            ...playlist,
            musics: updatedMusics,
          }
        } else {
          return {
            ...playlist,
          }
        }
      })

      await axios.patch(
        `http://localhost:3000/playlists/${selectedPlaylist.id}`,
        {
          musics: updatedMusics,
        },
      )

      toast.success(
        `Música ${selectedMusic.name} adicionada à playlist ${selectedPlaylist.title}`,
      )

      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
      setLoggedUser({
        ...loggedUser,
        playlists: updatedPlaylists,
      })
    } catch (error) {
      console.log(error)
      toast.error('Server offline')
    }
  }

  return (
    <div id="main" className="main d-flex flex-column">
      <div className="main-container d-flex align-items-center mb-3">
        <div>
          <h2 className="tittle mb-1">
            {musics.length > 0 && 'Melhor resultado'}
          </h2>
        </div>
      </div>
      {musics.length ? (
        <div className="row list mb-5 ms-3">
          {musics.map((music) => {
            return (
              <div key={music.id} className="col-12 col-md-3 col-lg-2">
                <MusicCard>
                  {loggedUser?.playlists?.length && (
                    <Options>
                      <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={true}
                        items={items}
                        style={{ background: 'transparent', padding: '0' }}
                        onSelect={({ key, keyPath, selectedKeys, domEvent }) =>
                          handleAddMusicToPlaylist(key, music)
                        }
                      />
                    </Options>
                  )}

                  <div className="card-body p-0">
                    <img
                      src={music.img}
                      alt={music.name}
                      className="card-img"
                    />
                    <h5>{music.name}</h5>
                    <span>{music.author}</span>
                  </div>
                </MusicCard>
              </div>
            )
          })}
        </div>
      ) : (
        <EmptyMusicsContainer>
          <h2>Nenhum resultado encontrado</h2>
          <span>Confira se você digitou corretamente.</span>
        </EmptyMusicsContainer>
      )}
    </div>
  )
}

import { useContext, useEffect, useState } from 'react'
import {
  CreatePlaylistButton,
  EmptyPlaylists,
  FlexContainer,
  PlaylistCard,
  PlaylistsContainer,
  SaveButton,
  UserPlaylistsContainer,
} from './styles'
import { Context } from '../../../../contexts/ContextProvider'
import { PlusCircle } from 'phosphor-react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../../../components/Modal'

export function Playlists({ setOpenPlaylistModal, openPlaylistModal }) {
  const { loggedUser, setLoggedUser } = useContext(Context)
  const [playlistName, setPlaylistName] = useState('')

  function validate() {
    let haveError = false

    if (!playlistName) {
      toast.error('Nome não pode ser vazio.')
      haveError = true
    }

    return haveError
  }

  function handleAddPlaylist(event) {
    event.preventDefault()

    if (!validate()) {
      async function createPlaylist() {
        try {
          const response = await axios.post(`http://localhost:3000/playlists`, {
            name: playlistName,
            user_id: loggedUser.id,
          })

          const updatedUser = {
            ...loggedUser,
            playlists: [...loggedUser.playlists, response.data],
          }

          localStorage.setItem('user', JSON.stringify(updatedUser))
          setLoggedUser(updatedUser)
          setOpenPlaylistModal(false)
          setPlaylistName('')
        } catch (error) {
          setPlaylistName('')
          toast.error('Problemas no servidor, tente novamente.')
        }
      }

      createPlaylist()
    }
  }

  function renderPlaylists() {
    return (
      <FlexContainer>
        <h1>Suas Playlists</h1>
        <PlaylistsContainer>
          {loggedUser.playlists.map(({ id, name, img }) => {
            return (
              <NavLink key={id} to={`/user-playlist/${id}`}>
                <PlaylistCard>
                  <img src={img} alt="exemplo" />
                  <h5>{name}</h5>
                </PlaylistCard>
              </NavLink>
            )
          })}
        </PlaylistsContainer>
      </FlexContainer>
    )
  }

  useEffect(() => {
    if (!openPlaylistModal) {
      setPlaylistName('')
    }
  }, [openPlaylistModal])

  return (
    <UserPlaylistsContainer>
      {loggedUser.playlists.length === 0 ? (
        <EmptyPlaylists>
          <CreatePlaylistButton onClick={() => setOpenPlaylistModal(true)}>
            <PlusCircle size={80} weight="light" />
          </CreatePlaylistButton>

          <h3>As suas playlists vão aparecer aqui</h3>
        </EmptyPlaylists>
      ) : (
        renderPlaylists()
      )}
      <Modal
        title="Criar playlist"
        open={openPlaylistModal}
        setOpen={setOpenPlaylistModal}
      >
        <form onSubmit={handleAddPlaylist}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={playlistName}
            onChange={(event) => setPlaylistName(event.target.value)}
          />
          <SaveButton>
            <button>Criar</button>
          </SaveButton>
        </form>
      </Modal>
    </UserPlaylistsContainer>
  )
}

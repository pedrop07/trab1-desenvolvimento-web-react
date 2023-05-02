import { useContext, useState } from 'react'
import {
  CreatePlaylistButton,
  EmptyPlaylists,
  PlaylistCard,
  PlaylistsContainer,
  UserPlaylistsContainer,
} from './styles'
import { Context } from '../../../../contexts/ContextProvider'
import { PlusCircle, X } from 'phosphor-react'
import {
  Modal,
  ModalContainer,
  ModalContent,
  ModalHeader,
  SaveButton,
} from '../UserProfile/styles'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export function UserPlaylists({ setOpenPlaylistModal, openPlaylistModal }) {
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
            title: playlistName,
            musics: [],
            user_id: loggedUser.id,
            img: 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9',
          })

          const updatedPlaylists = [...loggedUser.playlists, response.data]

          localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
          setLoggedUser({
            ...loggedUser,
            playlists: updatedPlaylists,
          })
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
      <PlaylistsContainer>
        {loggedUser.playlists.map(({ id, title, img }) => {
          return (
            <PlaylistCard key={id}>
              <NavLink to={`/user-playlist/${id}`}>
                <img src={img} alt="exemplo" />
                <h5>{title}</h5>
              </NavLink>
            </PlaylistCard>
          )
        })}
      </PlaylistsContainer>
    )
  }

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
      {openPlaylistModal && (
        <ModalContainer>
          <Modal>
            <ModalHeader>
              Crie a sua playlist
              <button onClick={() => setOpenPlaylistModal(false)}>
                <X size={25} />
              </button>
            </ModalHeader>
            <ModalContent>
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
            </ModalContent>
          </Modal>
        </ModalContainer>
      )}
    </UserPlaylistsContainer>
  )
}

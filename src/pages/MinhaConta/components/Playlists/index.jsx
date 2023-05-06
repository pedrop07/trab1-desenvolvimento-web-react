import { useContext, useEffect, useState } from 'react'
import {
  CreatePlaylistButton,
  EmptyPlaylists,
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
            <NavLink key={id} to={`/user-playlist/${id}`}>
              <PlaylistCard>
                <img src={img} alt="exemplo" />
                <h5>{title}</h5>
              </PlaylistCard>
            </NavLink>
          )
        })}
      </PlaylistsContainer>
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
      <Modal open={openPlaylistModal} setOpen={setOpenPlaylistModal}>
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

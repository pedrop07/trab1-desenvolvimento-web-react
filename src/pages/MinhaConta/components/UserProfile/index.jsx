import { useContext, useState } from 'react'
import {
  Modal,
  ModalContainer,
  ModalContent,
  ModalHeader,
  SaveButton,
  UserDetail,
  UserEdit,
  UserInfo,
  UserName,
  UserProfileContainer,
  UserProfilePicture,
} from './styles'
import { Context } from '../../../../contexts/ContextProvider'
import { Cake, EnvelopeSimple, Gear, Pencil, User, X } from 'phosphor-react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { UserPlaylists } from '../UserPlaylists'

export function UserProfile({ openPlaylistModal, setOpenPlaylistModal }) {
  const { loggedUser, setLoggedUser } = useContext(Context)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedName, setEditedName] = useState(loggedUser.name)
  const [editedEmail, setEditedEmail] = useState(loggedUser.email)

  const cleanDateOfBirth = new Date(
    loggedUser.date_of_birth,
  ).toLocaleDateString()

  function validate() {
    let haveError = false

    if (!editedName) {
      toast.error('Nome não pode ser vazio.')
      haveError = true
    }

    if (!editedEmail) {
      toast.error('E-mail não pode ser vazio.')
      haveError = true
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if (!regexEmail.test(editedEmail) && editedEmail) {
      toast.error('E-mail inválido.')
      haveError = true
    }

    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

    if (!regexName.test(editedName) && editedName) {
      toast.error('Preencha o campo de nome apenas com LETRAS.')
      haveError = true
    }

    return haveError
  }

  function handleEditUser(event) {
    event.preventDefault()

    if (!validate()) {
      async function editUser() {
        try {
          await axios.patch(`http://localhost:3000/user/${loggedUser.id}`, {
            name: editedName,
            email: editedEmail,
          })

          const editedUser = {
            ...loggedUser,
            name: editedName,
            email: editedEmail,
          }
          localStorage.setItem('user', JSON.stringify(editedUser))
          setLoggedUser(editedUser)
          setIsModalOpen(false)
        } catch (error) {
          toast.error('Problemas no servidor, tente novamente.')
        }
      }

      editUser()
    }
  }

  return (
    <UserProfileContainer>
      <UserInfo>
        <UserProfilePicture>
          <User size={77} />
        </UserProfilePicture>
        <div>
          <UserName>Bem-vindo, {loggedUser.name}</UserName>
          <UserDetail>
            <EnvelopeSimple size={30} />
            {loggedUser.email}
          </UserDetail>
          <UserDetail>
            <Cake size={30} />
            {cleanDateOfBirth}
          </UserDetail>
        </div>

        <UserEdit onClick={() => setIsModalOpen(true)}>
          <Pencil size={32} color="#fff" />
        </UserEdit>
      </UserInfo>

      <UserPlaylists
        openPlaylistModal={openPlaylistModal}
        setOpenPlaylistModal={setOpenPlaylistModal}
      />
      {isModalOpen && (
        <ModalContainer>
          <Modal>
            <ModalHeader>
              Detalhes do perfil
              <button onClick={() => setIsModalOpen(false)}>
                <X size={25} />
              </button>
            </ModalHeader>
            <ModalContent>
              <form onSubmit={handleEditUser}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={editedName}
                  onChange={(event) => setEditedName(event.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  value={editedEmail}
                  onChange={(event) => setEditedEmail(event.target.value)}
                />
                <SaveButton>
                  <button>Salvar</button>
                </SaveButton>
              </form>
            </ModalContent>
          </Modal>
        </ModalContainer>
      )}
    </UserProfileContainer>
  )
}

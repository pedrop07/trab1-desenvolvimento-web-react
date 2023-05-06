import { useContext, useEffect, useState } from 'react'
import {
  SaveButton,
  UserDetail,
  UserEdit,
  UserInfo,
  UserName,
  UserProfileContainer,
  UserProfilePicture,
} from './styles'
import { Context } from '../../../../contexts/ContextProvider'
import { Cake, EnvelopeSimple, Pencil, User } from 'phosphor-react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Playlists } from '../Playlists'
import { verifyExistUser } from '../../../../util/verifyExistUser'
import { Modal } from '../../../../components/Modal'

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

    if (editedEmail === loggedUser.email) {
      toast.error('E-mail deve ser diferente.')
      haveError = true
    }

    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

    if (!regexName.test(editedName) && editedName) {
      toast.error('Preencha o campo de nome apenas com LETRAS.')
      haveError = true
    }

    if (editedName === loggedUser.name) {
      toast.error('Nome deve ser diferente.')
      haveError = true
    }

    return haveError
  }

  function handleEditUser(event) {
    event.preventDefault()

    if (!validate()) {
      async function editUser() {
        const existUser = await verifyExistUser(editedEmail)

        if (existUser) {
          toast.error('Esse e-mail já está vinculado a uma conta.')
        } else {
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
      }

      editUser()
    }
  }

  useEffect(() => {
    if (!isModalOpen) {
      setEditedName(loggedUser.name)
      setEditedEmail(loggedUser.email)
    }
  }, [isModalOpen])

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

      <Playlists
        openPlaylistModal={openPlaylistModal}
        setOpenPlaylistModal={setOpenPlaylistModal}
      />
      <Modal
        title={'Editar perfil'}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      >
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
      </Modal>
    </UserProfileContainer>
  )
}

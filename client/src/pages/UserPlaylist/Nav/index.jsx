import { NavLink, useNavigate } from 'react-router-dom'
import { NavContainer, StyledNavigation } from './styles'
import {
  DotsThree,
  House,
  PlusCircle,
  Question,
  UserCircle,
  XCircle,
} from 'phosphor-react'
import { Popconfirm } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../../contexts/ContextProvider'

export function Nav({ selectedPlaylist }) {
  const navigate = useNavigate()
  const { loggedUser, setLoggedUser } = useContext(Context)

  async function handleDeletePlaylist() {
    try {
      await axios.delete(
        `http://localhost:3000/playlists/${selectedPlaylist?.id}`,
      )

      const updatedPlaylists = loggedUser.playlists.filter(
        ({ id }) => id !== selectedPlaylist?.id,
      )

      const updatedUser = {
        ...loggedUser,
        playlists: updatedPlaylists,
      }

      localStorage.setItem('user', JSON.stringify(updatedUser))
      setLoggedUser(updatedUser)
      navigate('/minha-conta')
    } catch {
      toast.error('Erro no servidor, tente novamente')
    }
  }

  return (
    <NavContainer>
      <StyledNavigation>
        <div>
          <NavLink to={'/'}>
            <House size={30} /> Início
          </NavLink>
          <NavLink to={'/faq'}>
            <Question size={30} /> FAQ
          </NavLink>
          <NavLink to={'/minha-conta'}>
            <UserCircle size={30} /> Minha conta
          </NavLink>
          <Popconfirm
            title={`Apagar playlist ${selectedPlaylist?.title}`}
            description={`Tem certeza que deseja apagar a playlist ${selectedPlaylist?.title}?`}
            okText="Confirmar"
            cancelText="Cancelar"
            onConfirm={handleDeletePlaylist}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: 'red',
                }}
              />
            }
          >
            <button>
              <XCircle size={30} /> Apagar playlist
            </button>
          </Popconfirm>
        </div>
      </StyledNavigation>
    </NavContainer>
  )
}

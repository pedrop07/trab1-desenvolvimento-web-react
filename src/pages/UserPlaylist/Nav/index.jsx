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

export function Nav({ playlist }) {
  const navigate = useNavigate()
  const { loggedUser, setLoggedUser } = useContext(Context)

  async function handleDeletePlaylist() {
    try {
      await axios.delete(`http://localhost:3000/playlists/${playlist?.id}`)

      const updatedPlaylists = loggedUser.playlists.filter(
        ({ id }) => id !== playlist?.id,
      )

      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
      setLoggedUser({
        ...loggedUser,
        playlists: updatedPlaylists,
      })
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
          <NavLink to={'/'}>
            <Question size={30} /> FAQ
          </NavLink>
          <NavLink to={'/minha-conta'}>
            <UserCircle size={30} /> Minha conta
          </NavLink>
          <Popconfirm
            title={`Apagar playlist ${playlist?.title}`}
            description={`Tem certeza que deseja apagar a playlist ${playlist?.title}?`}
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
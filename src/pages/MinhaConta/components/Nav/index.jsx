import { NavLink } from 'react-router-dom'
import { NavContainer, StyledNavigation } from './styles'
import { House, PlusCircle, Question, UserCircle } from 'phosphor-react'

export function Nav({ setOpenPlaylistModal }) {
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
          <button onClick={() => setOpenPlaylistModal(true)}>
            <PlusCircle size={30} /> Criar playlist
          </button>
        </div>
      </StyledNavigation>
    </NavContainer>
  )
}

import { NavLink } from 'react-router-dom'
import { NavContainer, StyledNavigation } from './styles'
import { House, MagnifyingGlass, PlusCircle, Question } from 'phosphor-react'

export function Nav({ setOpenPlaylistModal }) {
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
          <NavLink to={'/search'}>
            <MagnifyingGlass size={30} /> Buscar
          </NavLink>
          <button onClick={() => setOpenPlaylistModal(true)}>
            <PlusCircle size={30} /> Criar playlist
          </button>
        </div>
      </StyledNavigation>
    </NavContainer>
  )
}

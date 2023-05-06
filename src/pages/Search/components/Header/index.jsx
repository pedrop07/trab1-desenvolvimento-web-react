import { UserCircle } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LogoutButton,
  SearchInputContainer,
  StyledHeader,
  StyledLink,
  UserContent,
  UserProfile,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../contexts/ContextProvider'

export function Header({ setSearchText }) {
  const navigate = useNavigate()
  const { loggedUser, setLoggedUser } = useContext(Context)

  function handleLogout() {
    setLoggedUser()
    localStorage.removeItem('user')
    localStorage.removeItem('playlists')
  }

  function handleSearch() {}

  return (
    <div className="top-bar">
      <StyledHeader>
        {loggedUser && (
          <UserProfile>
            <UserCircle size={40} color="#fff" weight="fill" />
            <UserContent>
              <div>
                Olá, <span>{loggedUser.name}</span>
              </div>
              <div>
                <StyledLink to={'/minha-conta'}>MINHA CONTA</StyledLink>
                <span>|</span>
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
              </div>
            </UserContent>
          </UserProfile>
        )}

        <SearchInputContainer>
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="O que voce quer ouvir ?"
          />
          <button>Pesquisar</button>
        </SearchInputContainer>

        <NavLink to="/faq">
          <button className="btn-upgrade">FAQ</button>
        </NavLink>
      </StyledHeader>
    </div>
  )
}

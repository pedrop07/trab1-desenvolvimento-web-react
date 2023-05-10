import { MagnifyingGlass, UserCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
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
import { toast } from 'react-hot-toast'
import axios from 'axios'

export function Header() {
  const { loggedUser, setLoggedUser, setMusics } = useContext(Context)

  const [searchText, setSearchText] = useState('')

  function handleLogout() {
    localStorage.removeItem('user')
    setLoggedUser()
  }

  async function handleSearch(event) {
    event.preventDefault()

    if (searchText) {
      try {
        const response = await axios.get(
          `http://localhost:3000/musics/search?name=${searchText}`,
        )

        setMusics(response.data)
      } catch {
        toast.error('Servidor offline.')
      }
    }
  }

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
          <form onSubmit={handleSearch}>
            <input
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="O que voce quer ouvir ?"
            />
            <button title="Pesquisar">
              <MagnifyingGlass size={20} weight="light" />
            </button>
          </form>
        </SearchInputContainer>

        <NavLink to="/faq">
          <button className="btn-upgrade">FAQ</button>
        </NavLink>
      </StyledHeader>
    </div>
  )
}

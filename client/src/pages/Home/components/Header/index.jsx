import { UserCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  LogoutButton,
  StyledHeader,
  StyledLink,
  UserContent,
  UserProfile,
} from './styles'
import { useContext } from 'react'
import { Context } from '../../../../contexts/ContextProvider'

export function Header() {
  const { loggedUser, setLoggedUser } = useContext(Context)

  function handleLogout() {
    setLoggedUser()
    localStorage.removeItem('user')
    localStorage.removeItem('playlists')
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

        <NavLink to="/faq">
          <button className="btn-upgrade">FAQ</button>
        </NavLink>
      </StyledHeader>
    </div>
  )
}

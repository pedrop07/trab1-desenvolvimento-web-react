import { UserCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { LogoutButton, StyledLink, UserContent, UserProfile } from './styles'
import { useContext } from 'react'
import { Context } from '../../../../contexts/ContextProvider'

export function Header() {
  const { loggedUser, setLoggedUser } = useContext(Context)

  function handleLogout() {
    setLoggedUser()
    localStorage.removeItem('user')
  }

  return (
    <div className="top-bar">
      <header id="header" className="d-flex position-relative">
        <div className="header-overlay"></div>

        {loggedUser && (
          <UserProfile>
            <UserCircle size={40} color="#fff" weight="fill" />
            <UserContent>
              <div>
                Olá, <span>{loggedUser.name}</span>
              </div>
              <div>
                <StyledLink to={'minha-conta'}>MINHA CONTA</StyledLink>
                <span>|</span>
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
              </div>
            </UserContent>
          </UserProfile>
        )}

        <div className="d-flex ms-auto">
          <NavLink to="/faq">
            <button className="btn-upgrade">FAQ</button>
          </NavLink>
        </div>
      </header>
    </div>
  )
}

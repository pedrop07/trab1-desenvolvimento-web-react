import { NavLink } from 'react-router-dom'
import { Logo } from '../../../../components/Logo'
import { Context } from '../../../../contexts/ContextProvider'
import { useContext } from 'react'
export function HeaderFaq() {
  const { loggedUser } = useContext(Context)

  return (
    <div className="wrapper">
      <header className="header">
        <Logo />

        <nav className="nav">
          <NavLink to="/">
            <a href="" className="nav-link">
              Ínicio
            </a>
          </NavLink>

          {!loggedUser && (
            <NavLink to="/cadastro">
              <a href="" className="nav-link">
                Cadastro
              </a>
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  )
}

import { NavLink } from 'react-router-dom'
import { Logo } from '../../../../components/Logo'
export function HeaderFaq() {
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

          <NavLink to="/cadastro">
            <a href="" className="nav-link">
              Cadastro
            </a>
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

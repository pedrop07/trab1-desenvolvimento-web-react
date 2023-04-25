import { NavLink } from 'react-router-dom'
import globo from '../../../../assets/images/bt.svg'
import { Logo } from '../../../../components/Logo'

export function Aside() {
  return (
    <nav className=" nav-bar d-flex flex-column">
      <div className="nav-bar-header d-flex ps-4 pt-4 pb-4">
        <Logo />
      </div>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <i className="fa-solid fa-house"></i>
            <span>Início</span>
          </NavLink>
        </li>

        <li className="nav-item ">
          <a href="" className="nav-link d-flex align-items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Buscar</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="" className="nav-link d-flex align-items-center">
            <i className="fa-regular fa-bookmark"></i>
            <span>Sua Biblioteca</span>
          </a>
        </li>
      </ul>

      <div className="root-list d-flex flex-column mt-4">
        <div className="root-list-header"></div>
        <div className="root-list-body">
          <div className="root-list-item d-flex">
            <div className="root-list-icon d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus text-dark"></i>
            </div>
            <span>Criar Playlist</span>
          </div>

          <div className="root-list-item d-flex">
            <div className="root-list-icon heart d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <span>Músicas Curtidas</span>
          </div>
        </div>
      </div>

      <div className="root-list-info d-flex flex-column">
        <div className="root-list-links">
          <div className="root-bottom-links d-flex">
            <div className="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/">
                <span className=" root-links-elements">Legal</span>
              </a>
            </div>

            <div className="root-coteiner-link">
              <a href="https://www.spotify.com/br/privacy/">
                <span className=" root-links-elements">
                  Centro de Privacidade
                </span>
              </a>
            </div>

            <div className="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/privacy-policy/   ">
                <span className=" root-links-elements">
                  Política de privacidade
                </span>
              </a>
            </div>

            <div className="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/cookies-policy/">
                <span className=" root-links-elements">Cookies</span>
              </a>
            </div>

            <div className="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/cookies-policy/">
                <span className=" root-links-elements">Sobre anúncios</span>
              </a>
            </div>
          </div>
          <div className="root-info-lg">
            <button className="root-info-bt">
              <span className="root-info-logo">
                <img alt="logo" className="btlogo" src={globo} />
              </span>
              Português do Brasil
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.svg'
import globo from '../../../../assets/images/bt.svg'

export function Aside() {
  return (
    <nav class=" nav-bar d-flex flex-column">
      <div class="nav-bar-header d-flex ps-4 pt-4 pb-4">
        <img class="logo" src={logo} />
      </div>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <NavLink to='/' className="nav-link d-flex align-items-center">
            <i class="fa-solid fa-house"></i>
            <span>Início</span>
          </NavLink>
        </li>

        <li class="nav-item ">
          <a href="" class="nav-link d-flex align-items-center">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Buscar</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="" class="nav-link d-flex align-items-center">
            <i class="fa-regular fa-bookmark"></i>
            <span>Sua Biblioteca</span>
          </a>
        </li>
      </ul>

      <div class="root-list d-flex flex-column mt-4">
        <div class="root-list-header"></div>
        <div class="root-list-body">
          <div class="root-list-item d-flex">
            <div class="root-list-icon d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus text-dark"></i>
            </div>
            <span>Criar Playlist</span>
          </div>

          <div class="root-list-item d-flex">
            <div class="root-list-icon heart d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-heart"></i>
            </div>
            <span>Músicas Curtidas</span>
          </div>
        </div>
      </div>

      <div class="root-list-info d-flex flex-column">
        <div class="root-list-links">
          <div class="root-bottom-links d-flex">
            <div class="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/">
                <span class=" root-links-elements">Legal</span>
              </a>
            </div>

            <div class="root-coteiner-link">
              <a href="https://www.spotify.com/br/privacy/">
                <span class=" root-links-elements">Centro de Privacidade</span>
              </a>
            </div>

            <div class="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/privacy-policy/   ">
                <span class=" root-links-elements">
                  Política de privacidade
                </span>
              </a>
            </div>

            <div class="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/cookies-policy/">
                <span class=" root-links-elements">Cookies</span>
              </a>
            </div>

            <div class="root-coteiner-link">
              <a href="https://www.spotify.com/br/legal/cookies-policy/">
                <span class=" root-links-elements">Sobre anúncios</span>
              </a>
            </div>
          </div>
          <div class="root-info-lg">
            <button class="root-info-bt">
              <span class="root-info-logo">
                <img class="btlogo" src={globo} />
              </span>
              Português do Brasil
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

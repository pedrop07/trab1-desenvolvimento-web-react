import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <div className="player d-flex align-items-center">
      <footer className="w-100 d-flex">
        <div className="player-title">
          <p>AMOSTRA DO SPOTIFY</p>
          <p>
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <a
          href="cadastro.html"
          className="ms-auto mx-4 justify-content-center align-items-center"
        >
          <NavLink to={'/cadastro'}>
            <button className="player-btn ms-auto mx-4 justify-content-center align-items-center">
              <span className="player-btn-title align-items-center">
                Inscreva-se grátis
              </span>
            </button>
          </NavLink>
        </a>
      </footer>
    </div>
  )
}

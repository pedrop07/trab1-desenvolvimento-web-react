import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../../../contexts/ContextProvider'

export function MainContent() {
  const { spotifyPlaylist } = useContext(Context)

  return (
    <div id="main" className="main d-flex flex-column">
      <div className="main-container d-flex align-items-center mb-3">
        <div>
          <h2 className="tittle mb-1">Spotify Playlist</h2>
        </div>
      </div>
      <div className="row list mb-5 ms-3">
        {spotifyPlaylist.map((card) => {
          return (
            <div key={card.id} className="col-12 col-md-3 col-lg-2">
              <NavLink to={`/playlist/${card.id}`}>
                <div className="card">
                  <div className="card-body p-0">
                    <a href="">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                      <img
                        src={card.img}
                        alt={card.title}
                        className="card-img"
                      />
                    </a>
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

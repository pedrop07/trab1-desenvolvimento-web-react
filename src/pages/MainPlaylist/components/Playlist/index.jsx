import { Pause, Play } from 'phosphor-react'
import playPiano from '../../../../assets/audio/piano_1.mp3'
import { useParams } from 'react-router-dom'
import './playlist.css'
import { useContext } from 'react'
import { Context } from '../../../../contexts/ContextProvider'

export function Playlist() {
  const { spotifyPlaylist } = useContext(Context)
  const { id } = useParams()

  const selectedPlaylist = spotifyPlaylist.find(
    (playlist) => playlist.id === id,
  )

  return (
    <div id="main " className="main d-flex flex-column">
      <div id="grid-container">
        <div className="main-container d-flex align-items-center mb-3">
          <div className="card">
            <img
              src={selectedPlaylist?.img}
              alt="Playlist"
              className="card-img"
            />
          </div>

          <div className="ms-4 mb-auto">
            <div className="tittle">
              <h6>Playlist</h6>
              <h1>{selectedPlaylist?.title}</h1>
            </div>
            <audio id="myAudio">
              <source src={playPiano} type="audio/mpeg" />
              Seu navegador não possui suporte ao elemento audio
            </audio>
          </div>
        </div>

        <table className="table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Álbum</th>
              <th scope="col">Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="4">
                <hr></hr>
              </th>
            </tr>

            {selectedPlaylist?.musics.map(
              ({ title, album, duration, path }, index) => {
                function playAudio() {
                  const x = document.getElementById(title)
                  x.play()
                  document.getElementById(`btn-play${index}`).style.display =
                    'none'
                  document.getElementById(`btn-pause${index}`).style.display =
                    'flex'
                }

                function pauseAudio() {
                  const x = document.getElementById(title)
                  x.pause()
                  document.getElementById(`btn-pause${index}`).style.display =
                    'none'
                  document.getElementById(`btn-play${index}`).style.display =
                    'flex'
                }

                return (
                  <>
                    <audio id={title}>
                      <source src={path} type="audio/mpeg" />
                      Seu navegador não possui suporte ao elemento audio
                    </audio>

                    <tr>
                      <th scope="row">{index + 1}</th>
                      <th>
                        <div
                          className="start-music"
                          id={`btn-play${index}`}
                          onClick={playAudio}
                        >
                          <Play />
                        </div>
                        <div
                          className="pause-music"
                          id={`btn-pause${index}`}
                          onClick={pauseAudio}
                        >
                          <Pause />
                        </div>
                      </th>
                      <td>{title}</td>
                      <td>{album}</td>
                      <td>{duration}</td>
                    </tr>
                  </>
                )
              },
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

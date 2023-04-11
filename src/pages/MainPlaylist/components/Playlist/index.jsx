import { Pause, Play } from 'phosphor-react';
import playPiano from '../../../../assets/audio/piano_1.mp3'
import { useSearchParams } from 'react-router-dom';
import { playlists } from '../../../Home/components/MainContent';
import './playlist.css'

export function Playlist() {
  function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
    document.getElementById('btn-play').style.display = 'none'
    document.getElementById('btn-pause').style.display = 'block'
  }

  function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
    document.getElementById('btn-pause').style.display = 'none'
    document.getElementById('btn-play').style.display = 'block'
  }

  const [searchParams] = useSearchParams()

  const playlistId = searchParams.get('id')
  const selectedPlaylist = playlists.find(({ id }) => id === playlistId)

  return (
    <div id="main " class="main d-flex flex-column">
      <div id="grid-container">
        <div class="main-container d-flex align-items-center mb-3">
          <div class="card">
            <img src={selectedPlaylist.img} class="card-img" />
            <div class="btn-play" id='btn-play'>
              <button onClick={playAudio} class="d-flex justify-content-center align-items-center">
                <Play size={22} />
              </button>
            </div>

            <div class="btn-pause" id='btn-pause'>
              <button onClick={pauseAudio} class="d-flex justify-content-center align-items-center">
                <Pause size={22} />
              </button>
            </div>
          </div>

          <div class="ms-4 mb-auto">
            <div class="tittle">
              <h6>Playlist</h6>
              <h1>{selectedPlaylist.title}</h1>
            </div>
            <audio id="myAudio">
              <source src={playPiano} type="audio/mpeg" />
              Seu navegador não possui suporte ao elemento audio
            </audio>
          </div>

        </div>

        <table class="table-dark">
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
              <th colspan="4">
                <hr></hr>
              </th>
            </tr>

            {selectedPlaylist.musics.map(({ title, album, duration, src }, index) => {
              function playAudio() {
                let x = document.getElementById(title);
                x.play();
                document.getElementById(`btn-play${index}`).style.display = 'none'
                document.getElementById(`btn-pause${index}`).style.display = 'flex'
              }

              function pauseAudio() {
                let x = document.getElementById(title);
                x.pause();
                document.getElementById(`btn-pause${index}`).style.display = 'none'
                document.getElementById(`btn-play${index}`).style.display = 'flex'
              }

              return (
                <>
                  <audio id={title}>
                    <source src={src} type="audio/mpeg" />
                    Seu navegador não possui suporte ao elemento audio
                  </audio>

                  <tr>
                    <th scope="row">{index + 1}</th>
                    <th>
                      <div className='start-music' id={`btn-play${index}`} onClick={playAudio}>
                        <Play />
                      </div>
                      <div className='pause-music' id={`btn-pause${index}`} onClick={pauseAudio}>
                        <Pause />
                      </div>
                    </th>
                    <td>{title}</td>
                    <td>{album}</td>
                    <td>{duration}</td>
                  </tr>
                </>
              )
            })}

          </tbody>
        </table>
      </div>

    </div>
  );
}


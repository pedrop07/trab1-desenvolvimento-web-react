import { Pause, Play } from 'phosphor-react';
import cardImg from '../../../../assets/images/card-img.jpg'
import playPiano from '../../../../assets/audio/piano_1.mp3'
import {playAudio , pauseAudio} from '../../Scripts/player.js'

export function Playlist(){
    return(
      <div id="main " class="main d-flex flex-column">
        
        <div class="margin-top"></div>
  
          <div class="main-container d-flex align-items-center mb-3">
            <div class="card">
              <img src={cardImg} class="card-img" />
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
            
            <div class = "ms-4 mb-auto">
              <div class= "tittle">
                <h6>Playlist</h6>
                <h1>Peaceful Piano</h1>
              </div>
              <audio id="myAudio">
                <source src={playPiano} type="audio/mpeg"/>
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
                
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>2:34</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>1:43</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td >Test</td>
                    <td>3:34</td>
                </tr>
              </tbody>
            </table>
          
          
      </div>
    );
}
    

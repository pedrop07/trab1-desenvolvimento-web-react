import { Play } from 'phosphor-react';
import cardImg from '../../../../assets/images/card-img.jpg'
import cardImg2 from '../../../../assets/images/card2-img.jpg'
import cardImg3 from '../../../../assets/images/card3-img.jpg'
import cardImg4 from '../../../../assets/images/card4-img.jpg'
import cardImg5 from '../../../../assets/images/card5-img.jpg'
import cardImg6 from '../../../../assets/images/card6-img.jpg'



export function MainContent() {
  const tocadoRecente = [
    {
      title: "Piano",
      description: "Relaxe com piano",
      img: cardImg,
    },
    {
      title: "Manhã Relax",
      description: "Para começar bem o seu dia",
      img: cardImg2,
    },
    {
      title: "Faxina Nostalgia",
      description: "Grandes sucessos dos anos 80 para começar seu dia",
      img: cardImg3,
    },
    {
      title: "Retrôvisor",
      description: "Grandes sucessos para embalar a sua viagem",
      img: cardImg4,
    },
    {
      title: "Rádio de Frank Ocean",
      description: "De Spotify",
      img: cardImg5,
    },
    {
      title: "The Wall",
      description: "1977. Álbum",
      img: cardImg6,
    },
  ];

  return (
    <div id="main " class="main d-flex flex-column">
      <div class="margin-top"></div>

      <div class="main-container d-flex align-items-center mb-3">
        <h2 class="tittle">Tocado Recentemente</h2>
      </div>

      <div class="row list mb-5 ms-3">
        {tocadoRecente.map((card) => {
          return (
            <div class="col-12 col-md-3 col-lg-2">
              <div class="card">
                <a href="">
                </a>

                <div class="card-body p-0">
                  <a href="">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text">{card.description}</p>
                    <img src={card.img} class="card-img" /> 
                  </a>
                </div>

                <div class="btn-play">
                  <button class="d-flex justify-content-center align-items-center">
                    <Play size={22} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div class="main-container d-flex align-items-center mb-3">
        <div>
          <h2 class="tittle mb-1">Spotify Playlist</h2>
          <span class="subtitle"></span>
        </div>
      </div>
      <div class="row list mb-5 ms-3">
        {tocadoRecente.map((card) => {
          return (
            <div class="col-12 col-md-3 col-lg-2">
              <div class="card">
                <a href="">
                </a>

                <div class="card-body p-0">
                  <a href="">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text">{card.description}</p>
                    <img src={card.img} class="card-img" /> 
                  </a>
                </div>

                <div class="btn-play">
                  <button class="d-flex justify-content-center align-items-center">
                    <Play size={22} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
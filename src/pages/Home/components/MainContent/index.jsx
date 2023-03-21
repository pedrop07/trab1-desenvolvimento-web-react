import { Play } from 'phosphor-react';
import cardImg from '../../../../assets/images/card-img.jpg'

export function MainContent() {
  const tocadoRecente = [
    {
      title: "Piano",
      description: "Relaxe com piano",
    },
    {
      title: "Piano",
      description: "Relaxe com piano",
    },
    {
      title: "Piano",
      description: "Relaxe com piano",
    },
    {
      title: "Piano",
      description: "Relaxe com piano",
    },
    {
      title: "Piano",
      description: "Relaxe com piano",
    },
    {
      title: "Piano",
      description: "Relaxe com piano",
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
                  <img
                    src={cardImg}
                    class="card-img-top rouded-0 mb-3"
                  />
                </a>

                <div class="card-body p-0">
                  <a href="">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text">{card.description}</p>
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
                  <img
                    src={cardImg}
                    class="card-img-top rouded-0 mb-3"
                  />
                </a>

                <div class="card-body p-0">
                  <a href="">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text">{card.description}</p>
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

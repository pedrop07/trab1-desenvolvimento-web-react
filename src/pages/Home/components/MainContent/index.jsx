import { Play } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import cardImg from '../../../../assets/images/card-img.jpg'
import cardImg2 from '../../../../assets/images/card2-img.jpg'
import cardImg3 from '../../../../assets/images/card3-img.jpg'
import cardImg4 from '../../../../assets/images/card4-img.jpg'
import cardImg5 from '../../../../assets/images/card5-img.jpg'
import cardImg6 from '../../../../assets/images/card6-img.jpg'

export const playlists = [
  {
    id: 'playlist-1',
    title: "Piano",
    description: "Relaxe com piano",
    img: cardImg,
    musics: [
      {
        title: 'John Doe',
        album: 'Canada',
        duration: '2:34'
      },
      {
        title: 'Lucas',
        album: 'Brasil',
        duration: '2:50'
      },
      {
        title: 'Rio de Janeiro',
        album: 'BRASIL',
        duration: '3:22'
      }
    ]
  },
  {
    id: 'playlist-2',
    title: "Manhã Relax",
    description: "Para começar bem o seu dia",
    img: cardImg2,
    musics: [
      {
        title: 'Lua Cheia',
        album: 'Constelaçao',
        duration: '4:44'
      },
      {
        title: 'Sol',
        album: 'Constelaçao',
        duration: '5:55'
      },
      {
        title: 'Mar',
        album: 'Oceano',
        duration: '6:66'
      }
    ]
  },
  {
    id: 'playlist-3',
    title: "Faxina Nostalgia",
    description: "Grandes sucessos dos anos 80 para começar seu dia",
    img: cardImg3,
    musics: [
      {
        title: 'Mar',
        album: 'Canada',
        duration: '3:33'
      },
      {
        title: 'Onda',
        album: 'Brasil',
        duration: '2:50'
      },
      {
        title: 'Lua',
        album: 'BRASIL',
        duration: '3:22'
      }
    ]
  },
  {
    id: 'playlist-4',
    title: "Retrôvisor",
    description: "Grandes sucessos para embalar a sua viagem",
    img: cardImg4,
    musics: [
      {
        title: 'Guerra',
        album: 'Paris',
        duration: '1:11'
      },
      {
        title: 'Lucas',
        album: 'França',
        duration: '2:22'
      },
      {
        title: 'Paris',
        album: 'França',
        duration: '3:3'
      }
    ]
  },
  {
    id: 'playlist-5',
    title: "Rádio de Frank Ocean",
    description: "De Spotify",
    img: cardImg5,
    musics: [
      {
        title: 'Aguia',
        album: 'Canada',
        duration: '2:34'
      },
      {
        title: 'WATER',
        album: 'Agent',
        duration: '2:50'
      },
      {
        title: '777',
        album: 'Agent',
        duration: '3:22'
      }
    ]
  },
  {
    id: 'playlist-6',
    title: "The Wall",
    description: "1977. Álbum",
    img: cardImg6,
    musics: [
      {
        title: 'Ocean',
        album: 'THE WALL',
        duration: '2:34'
      },
      {
        title: 'WOlf',
        album: 'THE WALL',
        duration: '2:50'
      },
      {
        title: '002',
        album: 'THE WALL',
        duration: '3:22'
      }
    ]
  },
];

export function MainContent() {

  const tocadosRecente = [
    {
      title: "MPB",
      img: cardImg,
    },
    {
      title: "Pagode",
      img: cardImg2,
    },
    {
      title: "Rock",
      img: cardImg3,
    },
    {
      title: "Rap",
      img: cardImg4,
    },
    {
      title: "Pop",
      img: cardImg5,
    },
    {
      title: "Hip-hop",
      img: cardImg6,
    },
  ]

  return (
    <div id="main " class="main d-flex flex-column">
      <div class="margin-top"></div>

      <div class="main-container d-flex align-items-center mb-3">
        <h2 class="tittle">Tocado Recentemente</h2>
      </div>

      <div class="row list mb-5 ms-3">
        {tocadosRecente.map((card) => {
          return (
            <div class="col-12 col-md-3 col-lg-2">
              <div class="card">
                <div class="card-body p-0">
                  <a href="">
                    <h5 class="card-title">{card.title}</h5>
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
        {playlists.map((card) => {
          return (
            <div key={card.id} class="col-12 col-md-3 col-lg-2">
              <NavLink to={`/playlist?id=${card.id}`}>
                <div class="card">
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
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
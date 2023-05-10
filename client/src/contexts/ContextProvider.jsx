import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState([])
  const [musics, setMusics] = useState([])
  const [loggedUser, setLoggedUser] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const spotifyPlaylistResponse = await axios.get(
          'http://localhost:3000/spotify_playlists',
        )
        setSpotifyPlaylist(spotifyPlaylistResponse.data)

        const musicsResponse = await axios.get('http://localhost:3000/musics')
        setMusics(musicsResponse.data)
      } catch (error) {
        toast.error('Servidor offline')
      }
    }

    fetchData()

    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setLoggedUser(user)
    }
  }, [])

  return (
    <Context.Provider
      value={{
        spotifyPlaylist,
        setLoggedUser,
        loggedUser,
        musics,
        setMusics,
      }}
    >
      {children}
    </Context.Provider>
  )
}

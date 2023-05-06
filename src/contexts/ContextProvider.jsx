import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState([])
  const [loggedUser, setLoggedUser] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:3000/spotify_playlists',
        )
        setSpotifyPlaylist(response.data)
      } catch (error) {
        toast.error('Servidor offline')
      }
    }

    fetchData()

    const user = JSON.parse(localStorage.getItem('user'))
    const playlists = JSON.parse(localStorage.getItem('playlists'))
    if (user) {
      setLoggedUser({ ...user, playlists })
    }
  }, [])

  return (
    <Context.Provider
      value={{
        spotifyPlaylist,
        setLoggedUser,
        loggedUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}

import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

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
        console.log(error)
      }
    }

    fetchData()

    const user = localStorage.getItem('user')

    if (user) {
      setLoggedUser(JSON.parse(user))
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

import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState([])

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
  }, [])

  return (
    <Context.Provider
      value={{
        spotifyPlaylist,
      }}
    >
      {children}
    </Context.Provider>
  )
}

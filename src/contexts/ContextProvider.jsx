import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({})

export function ContextProvider({ children }){
    const [spotifyPlaylist, setSpotifyPlaylist] = useState([])

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get('http://localhost:3000/spotify-playlist')
                setSpotifyPlaylist(response)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    console.log(spotifyPlaylist)

    return (
        <Context.Provider value={{
            spotifyPlaylist
        }}>
            {children}
        </Context.Provider>
    )
}
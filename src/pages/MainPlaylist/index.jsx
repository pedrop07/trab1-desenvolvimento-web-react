import { useEffect } from 'react'
import { Aside } from '../Home/components/Aside'
import { Footer } from '../Home/components/Footer'
import { Header } from '../Home/components/Header'
import { Playlist } from './components/Playlist'
import '../Home/styles.css'

export function SpotifyPlaylist() {
  useEffect(() => {
    document.title = 'Spotify - Playlist'
  }, [])

  return (
    <div className="root">
      <Aside />
      <Header />
      <Playlist />
      <Footer />
    </div>
  )
}

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { SpotifyPlaylist } from './pages/SpotifyPlaylist'
import { Cadastro } from './pages/Cadastro'
import { MinhaConta } from './pages/MinhaConta'
import { UserPlaylist } from './pages/UserPlaylist'
import { Search } from './pages/Search'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist-spotify/:id" element={<SpotifyPlaylist />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/user-playlist/:id" element={<UserPlaylist />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  )
}

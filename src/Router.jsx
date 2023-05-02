import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { MainPlaylist } from './pages/MainPlaylist'
import { Cadastro } from './pages/Cadastro'
import { MinhaConta } from './pages/MinhaConta'
import { UserPlaylist } from './pages/UserPlaylist'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<MainPlaylist />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/user-playlist/:id" element={<UserPlaylist />} />
      </Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { MainPlaylist } from './pages/MainPlaylist'
import { Cadastro } from './pages/Cadastro'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<MainPlaylist />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  )
}

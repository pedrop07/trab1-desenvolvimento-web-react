import { Aside } from '../Home/components/Aside'
import { Footer } from '../Home/components/Footer'
import { Header } from './components/Header'
import { MusicsContainer } from './components/MusicsContainer'

export function Search() {
  return (
    <div className="root">
      <Aside />
      <Header />
      <MusicsContainer />
      <Footer />
    </div>
  )
}

import { Aside } from '../Home/components/Aside'
import { Footer } from '../Home/components/Footer'
import { MainContent } from '../Home/components/MainContent'
import { Header } from './components/Header'
import './styles.css'

export function Search() {
  return (
    <div className="root">
      <Aside />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

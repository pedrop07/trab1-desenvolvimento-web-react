import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './styles.css'

export function Logo() {
  return (
    <NavLink to={'/'} title={'voltar para home'}>
      <img className="logo" alt="Logo" src={logo} />
    </NavLink>
  )
}

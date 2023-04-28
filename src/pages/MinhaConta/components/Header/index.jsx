import { Logo } from '../../../../components/Logo'
import { HeaderContainer, NavContainer, StyledHeader } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <StyledHeader>
        <Logo />
        <NavContainer>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/faq'}>FAQ</NavLink>
        </NavContainer>
      </StyledHeader>
    </HeaderContainer>
  )
}

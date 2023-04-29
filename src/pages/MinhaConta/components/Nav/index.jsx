import { NavLink } from 'react-router-dom'
import { NavContainer, StyledNavigation } from './styles'
import { House, Question } from 'phosphor-react'

export function Nav() {
  return (
    <NavContainer>
      <StyledNavigation>
        <div>
          <NavLink to={'/'}>
            <House size={30} /> Home
          </NavLink>
          <NavLink to={'/'}>
            <Question size={30} /> FAQ
          </NavLink>
        </div>
      </StyledNavigation>
    </NavContainer>
  )
}

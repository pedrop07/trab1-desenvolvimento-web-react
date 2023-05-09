import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledNavigation = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  background: #121212;

  div {
    padding: 4px 12px;

    a,
    button {
      all: unset;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 20px;
      height: 40px;

      color: #b3b3b3;
      transition: color 0.2s linear;

      &:hover {
        color: #fff;
      }
    }
  }
`

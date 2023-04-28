import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;

  padding: 1rem 0.75rem;
  background-color: #000;
`

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 0.5rem;
    position: relative;

    &:before {
      background-color: #fff;
      width: 0%;
      border-radius: 1px;
      bottom: -4px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transition: 0.3s ease;
    }
    &:hover::before {
      width: 100%;
    }
  }
`

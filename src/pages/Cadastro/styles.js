import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  background: #fff;
`

export const StyledLogo = styled(NavLink)`
  margin: 3rem auto;

  img {
    max-width: 15rem;
  }
`

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 20px;
`

export const TabButton = styled.button`
  all: unset;
  cursor: pointer;

  background: none;
  color: #000;
  font-weight: 500;
  border-bottom: ${({ active }) =>
    active ? '2px solid #1db954' : '2px solid transparent'};

  transition: border-bottom 0.3s ease;
`

export const Error = styled.div`
  color: #d31225;
  margin-top: 2px;

  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 15px;
  }
`

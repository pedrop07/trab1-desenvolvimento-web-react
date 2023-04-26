import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
`

export const BackgroundImage = styled.img`
  height: auto;
  max-width: 60%;
`

export const StyledLogo = styled.img`
  margin-bottom: 70px;
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
  color: #fff;
  border-bottom: ${({ active }) =>
    active ? '2px solid #1db954' : '2px solid transparent'};

  transition: border-bottom 0.3s ease;
`

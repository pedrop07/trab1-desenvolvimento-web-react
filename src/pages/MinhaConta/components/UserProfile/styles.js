import styled from 'styled-components'

export const UserProfileContainer = styled.main`
  padding: 2rem 1rem 2rem 5rem;
`

export const StyledUserProfile = styled.div`
  background-color: #212121;
  padding: 0.75rem;
  border-radius: 4px;
  height: 100%;
  width: fit-content;
`

export const UserName = styled.div`
  text-transform: capitalize;
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;

  margin-bottom: 0.5rem;
`

export const UserEmail = styled.div`
  svg {
    margin-right: 0.5rem;
    color: #1db954;
  }

  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
`

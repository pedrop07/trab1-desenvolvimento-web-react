import styled from 'styled-components'

export const DetailsContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  background-color: #121212;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const PlaylistDetails = styled.div`
  color: #fff;
  height: 30vh;
  max-height: 400px;
  min-height: 340px;
  background: linear-gradient(
    0deg,
    rgba(44, 44, 44, 1) 0%,
    rgba(55, 55, 55, 1) 65%,
    rgba(62, 62, 62, 1) 100%
  );
  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PlaylistTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 3rem;
  font-weight: 600;

  span {
    font-size: 14px;
  }
`

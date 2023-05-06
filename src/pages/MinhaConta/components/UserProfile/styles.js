import styled from 'styled-components'

export const UserProfileContainer = styled.main`
  border-radius: 8px;
  width: 100%;
  background-color: #121212;

  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  position: relative;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 20vh;
  height: 300px;
  background: linear-gradient(
    0deg,
    rgba(44, 44, 44, 1) 0%,
    rgba(55, 55, 55, 1) 65%,
    rgba(62, 62, 62, 1) 100%
  );

  padding: 8px 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const UserEdit = styled.button`
  all: unset;
  cursor: pointer;
  background: none;
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;

  &:hover {
    background-color: #ffffff1a;
  }
`

export const UserProfilePicture = styled.div`
  height: 200px;
  width: 200px;

  border-radius: 50%;
  align-items: center;
  background-color: #282828;
  color: #7f7f7f;
  display: flex;
  justify-content: center;
  text-align: center;

  box-shadow: 0px 7px 20px 0px #0000002b;
`

export const UserName = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  color: #fff;
  width: 100%;
  font-size: 2.5rem;

  margin-bottom: 0.5rem;
`

export const UserDetail = styled.div`
  svg {
    margin-right: 1rem;
    color: #7f7f7f;
  }

  font-size: 1.35rem;
  font-weight: 500;
  color: #fff;
`

export const SaveButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    all: unset;
    cursor: pointer;
    background: #fff;
    color: #121212;
    font-weight: 600;
    border-radius: 500px;
    max-width: fit-content;
    padding: 6px 10px;

    &:hover {
      background-color: #ffffffc9;
    }
  }
`

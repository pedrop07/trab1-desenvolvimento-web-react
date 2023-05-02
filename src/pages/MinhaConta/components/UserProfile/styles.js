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
  height: 232px;
  min-width: 232px;
  width: 232px;

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
  margin: 0.08em 0px 0.12em;
  visibility: visible;
  width: 100%;
  font-size: 4.5rem;

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

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
`

export const Modal = styled.div`
  background-color: #282828;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 524px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;

  button {
    all: unset;
    cursor: pointer;
    background: none;
    height: 40px;
    width: 40px;

    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &:hover {
      background-color: #ffffff1a;
    }
  }
`

export const ModalContent = styled.div`
  padding: 0 24px 24px;

  display: flex;
  flex-direction: column;

  label {
    color: #fff;
    margin-bottom: 0.35rem;
  }

  input {
    margin-bottom: 0.75rem;
    background: #ffffff1a;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    height: 40px;
    padding: 0 12px;
    width: 100%;
    outline: none;
  }
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

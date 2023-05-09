import styled from 'styled-components'

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

export const StyledModal = styled.div`
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
`

export const CloseModalButton = styled.button`
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

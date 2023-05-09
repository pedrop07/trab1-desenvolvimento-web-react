import { X } from 'phosphor-react'
import {
  CloseModalButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  StyledModal,
} from './styles'

export function Modal({ children, open, setOpen, title }) {
  return (
    <>
      {open && (
        <ModalContainer>
          <StyledModal>
            <ModalHeader>
              {title}
              <CloseModalButton onClick={() => setOpen(false)}>
                <X size={25} />
              </CloseModalButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </StyledModal>
        </ModalContainer>
      )}
    </>
  )
}

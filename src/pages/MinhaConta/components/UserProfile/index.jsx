import { useContext } from 'react'
import {
  StyledUserProfile,
  UserEmail,
  UserName,
  UserProfileContainer,
} from './styles'
import { Context } from '../../../../contexts/ContextProvider'
import { EnvelopeSimple } from 'phosphor-react'

export function UserProfile() {
  const { loggedUser } = useContext(Context)

  return (
    <UserProfileContainer>
      <StyledUserProfile>
        <UserName>Bem-vindo, {loggedUser.name}</UserName>
        <UserEmail>
          <EnvelopeSimple size={20} />
          {loggedUser.email}
        </UserEmail>
      </StyledUserProfile>
    </UserProfileContainer>
  )
}

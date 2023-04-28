import { useContext } from 'react'
import { Context } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { UserProfile } from './components/UserProfile'
import { MinhaContaContainer } from './styles'

export function MinhaConta() {
  const { loggedUser } = useContext(Context)

  return (
    <>
      {loggedUser ? (
        <MinhaContaContainer>
          <Header>Minha conta</Header>
          <UserProfile />
        </MinhaContaContainer>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  )
}

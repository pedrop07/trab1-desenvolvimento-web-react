import { useContext } from 'react'
import { Context } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'
import { UserProfile } from './components/UserProfile'
import { MinhaContaContainer } from './styles'
import { Nav } from './components/Nav'

export function MinhaConta() {
  const { loggedUser } = useContext(Context)

  return (
    <>
      {loggedUser ? (
        <MinhaContaContainer>
          <Nav />
          <UserProfile />
        </MinhaContaContainer>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  )
}

import { useContext, useState } from 'react'
import { Context } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'
import { UserProfile } from './components/UserProfile'
import { MinhaContaContainer } from './styles'
import { Nav } from './components/Nav'

export function MinhaConta() {
  const { loggedUser } = useContext(Context)
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false)

  return (
    <>
      {loggedUser ? (
        <MinhaContaContainer>
          <Nav setOpenPlaylistModal={setOpenPlaylistModal} />
          <UserProfile
            setOpenPlaylistModal={setOpenPlaylistModal}
            openPlaylistModal={openPlaylistModal}
          />
        </MinhaContaContainer>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  )
}

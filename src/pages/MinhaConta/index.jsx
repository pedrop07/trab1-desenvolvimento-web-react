import { useContext } from 'react'
import { Context } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

export function MinhaConta() {
  const { loggedUser } = useContext(Context)

  return (
    <>{loggedUser ? <div>Minha conta</div> : <Navigate to="/" replace />}</>
  )
}

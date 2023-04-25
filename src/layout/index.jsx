import { Outlet } from 'react-router-dom'
import { ContextProvider } from '../contexts/ContextProvider'

export function DefaultLayout() {
  return (
    <ContextProvider>
      {/* <Header /> */}
      <Outlet />
    </ContextProvider>
  )
}

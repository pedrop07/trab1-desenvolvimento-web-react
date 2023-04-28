import { Outlet } from 'react-router-dom'
import { ContextProvider } from '../contexts/ContextProvider'
import { Toaster } from 'react-hot-toast'

export function DefaultLayout() {
  return (
    <ContextProvider>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Header /> */}
      <Outlet />
    </ContextProvider>
  )
}

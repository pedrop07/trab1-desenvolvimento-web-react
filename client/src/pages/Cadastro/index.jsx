import {
  StyledLogo,
  RegisterContainer,
  TabContainer,
  TabButton,
  ContentContainer,
} from './styles'
import logo from '../../assets/images/black-logo.png'
import { useState, useEffect, useContext } from 'react'
import { SignOut } from './components/SignOut'
import { SignIn } from './components/SignIn'
import { Context } from '../../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

export function Cadastro() {
  useEffect(() => {
    document.title = 'Spotify | Cadastro'
  }, [])
  const { loggedUser } = useContext(Context)

  const [activeForm, setActiveForm] = useState('signIn')

  function renderForm() {
    if (activeForm === 'signIn') {
      return <SignIn />
    } else {
      return <SignOut setActiveForm={setActiveForm} />
    }
  }

  return (
    <>
      {loggedUser ? (
        <Navigate to="/" replace />
      ) : (
        <RegisterContainer>
          <ContentContainer>
            <StyledLogo to={'/'}>
              <img src={logo} alt="logo" />
            </StyledLogo>

            <TabContainer>
              <TabButton
                active={activeForm === 'signIn'}
                onClick={() => setActiveForm('signIn')}
              >
                LOGIN
              </TabButton>
              <TabButton
                active={activeForm === 'signUp'}
                onClick={() => setActiveForm('signUp')}
              >
                CRIAR CONTA
              </TabButton>
            </TabContainer>

            {renderForm()}
          </ContentContainer>
        </RegisterContainer>
      )}
    </>
  )
}

import {
  StyledLogo,
  RegisterContainer,
  TabContainer,
  TabButton,
  ContentContainer,
} from './styles'
import logo from '../../assets/images/black-logo.png'
import { useState, useEffect } from 'react'
import { SignOut } from './components/SignOut'
import { SignIn } from './components/SignIn'

export function Cadastro() {
  useEffect(() => {
    document.title = 'Spotify | Cadastro'
  }, [])
  const [activeForm, setActiveForm] = useState('signIn')

  function renderForm() {
    if (activeForm === 'signIn') {
      return <SignIn />
    } else {
      return <SignOut />
    }
  }

  return (
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
  )
}

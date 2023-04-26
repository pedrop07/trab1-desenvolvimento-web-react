import {
  BackgroundImage,
  StyledLogo,
  RegisterContainer,
  TabContainer,
  TabButton,
  ContentContainer,
} from './styles'
import bgImg from '../../assets/images/bg-img-login.jpg'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import { SignOut } from './components/SignOut'
import { SignIn } from './components/SignIn'
import { NavLink } from 'react-router-dom'

export function Cadastro() {
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
      <BackgroundImage src={bgImg} alt="" />

      <ContentContainer>
        <NavLink to={'/'}>
          <StyledLogo src={logo} alt="logo" width={'100%'} height={'70px'} />
        </NavLink>

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

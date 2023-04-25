import { NavLink } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Form, RegisterContainer } from './styles'

export function Register() {
  return (
    <RegisterContainer>
      <Logo />
      <Form>
        <input type="text" placeholder="Usuário" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Data nascimento" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <button>Cadastrar</button>
      </Form>
      <NavLink to={'/login'}>Voltar para login</NavLink>
    </RegisterContainer>
  )
}

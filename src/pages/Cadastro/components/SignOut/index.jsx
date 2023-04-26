import { Form, InputContainer, FormContainer } from './styles'

export function SignOut() {
  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <input type="text" placeholder="Usuário" />
          <input type="email" placeholder="Email" />
        </InputContainer>
        <input type="text" placeholder="Data nascimento" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <button>Cadastrar</button>
      </Form>
    </FormContainer>
  )
}

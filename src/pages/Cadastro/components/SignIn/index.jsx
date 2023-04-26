import { CheckboxContainer, Form, FormContainer } from './styles'

export function SignIn() {
  return (
    <FormContainer>
      <Form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <CheckboxContainer>
          <label>
            <input type="checkbox" />
            Continuar logado
          </label>
        </CheckboxContainer>
        <button>Logar</button>
      </Form>
    </FormContainer>
  )
}

import { useState } from 'react'
import { Form, FormContainer, Input, SubmitButton } from './styles'
import { Error } from '../../styles'
import { WarningCircle } from 'phosphor-react'

export function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    username: '',
    password: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    setError({
      username: '',
      password: '',
    })

    if (!username) {
      setError((prevState) => ({
        ...prevState,
        username: 'Não pode ser vazio',
      }))
    }

    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: 'Não pode ser vazio',
      }))
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
            error={!!error.username}
          />
          {error.username && (
            <Error>
              <WarningCircle size={20} weight="fill" />
              <span>{error.username}</span>
            </Error>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            error={!!error.password}
          />
          {error.password && (
            <Error>
              <WarningCircle size={20} weight="fill" />
              <span>{error.password}</span>
            </Error>
          )}
        </div>

        <SubmitButton>Entrar</SubmitButton>
      </Form>
    </FormContainer>
  )
}

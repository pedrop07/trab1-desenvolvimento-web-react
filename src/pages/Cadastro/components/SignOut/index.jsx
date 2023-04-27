import { useState } from 'react'
import {
  Form,
  InputContainer,
  FormContainer,
  Input,
  SubmitButton,
} from './styles'
import { WarningCircle } from 'phosphor-react'
import { Error } from '../../styles'

export function SignOut() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  })

  function validate() {
    if (!username) {
      setError((prevState) => ({
        ...prevState,
        username: 'Você deve inserir seu nome usuário.',
      }))
    }
    if (!email) {
      setError((prevState) => ({
        ...prevState,
        email: 'Você deve inserir seu e-mail.',
      }))
    }
    if (!dateOfBirth) {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira uma data valida.',
      }))
    }
    if (!confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: 'Você precisa confirmar sua senha.',
      }))
    }
    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: 'Você precisa inserir uma senha.',
      }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    validate()
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
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
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              error={!!error.email}
            />
            {error.email && (
              <Error>
                <WarningCircle size={20} weight="fill" />
                <span>{error.email}</span>
              </Error>
            )}
          </div>
        </InputContainer>
        <div>
          <Input
            type="text"
            placeholder="Data nascimento"
            onChange={(e) => setDateOfBirth(e.target.value)}
            error={!!error.dateOfBirth}
          />
          {error.dateOfBirth && (
            <Error>
              <WarningCircle size={20} weight="fill" />
              <span>{error.dateOfBirth}</span>
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
        <div>
          <Input
            type="password"
            placeholder="Confirmar senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!error.confirmPassword}
          />
          {error.confirmPassword && (
            <Error>
              <WarningCircle size={20} weight="fill" />
              <span>{error.confirmPassword}</span>
            </Error>
          )}
        </div>
        <SubmitButton>Cadastrar</SubmitButton>
      </Form>
    </FormContainer>
  )
}

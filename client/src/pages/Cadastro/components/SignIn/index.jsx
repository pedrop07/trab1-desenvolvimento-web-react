import { useContext, useState } from 'react'
import { Form, FormContainer, Input, SubmitButton } from './styles'
import { Error } from '../../styles'
import { WarningCircle } from 'phosphor-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../contexts/ContextProvider'

export function SignIn() {
  const navigate = useNavigate()
  const { setLoggedUser } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  function validate() {
    setError({
      email: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: '',
    })
    let haveError = false

    if (!email) {
      setError((prevState) => ({
        ...prevState,
        email: 'Insira seu E-mail',
      }))
      haveError = true
    }

    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: 'Insira sua senha',
      }))
      haveError = true
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if (!regexEmail.test(email) && email) {
      setError((prevState) => ({
        ...prevState,
        email: 'E-mail inválido.',
      }))
      haveError = true
    }

    return haveError
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!validate()) {
      async function userSignIn() {
        const response = await axios.get(
          `http://localhost:3000/user?email=${email}`,
        )

        if (response.data.length === 0) {
          setError((prevState) => ({
            ...prevState,
            email: 'E-mail não cadastrado',
          }))
        } else {
          const user = response.data[0]
          if (user.password !== password) {
            setError((prevState) => ({
              ...prevState,
              password: 'Senha incorreta.',
            }))
          } else {
            localStorage.setItem('user', JSON.stringify(user))
            setLoggedUser(user)
            toast.success('Login realizado')
            navigate('/')
          }
        }
      }

      userSignIn()
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            placeholder="E-mail"
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

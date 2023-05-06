import { useState } from 'react'
import {
  Form,
  FormContainer,
  Input,
  SubmitButton,
  DateOfBirthInput,
} from './styles'
import { WarningCircle } from 'phosphor-react'
import { Error } from '../../styles'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { verifyExistUser } from '../../../../util/verifyExistUser'

export function SignOut({ setActiveForm }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
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
        email: 'Você deve inserir seu e-mail.',
      }))
      haveError = true
    }
    if (!name) {
      setError((prevState) => ({
        ...prevState,
        name: 'Você deve inserir seu nome.',
      }))
      haveError = true
    }
    if (!dateOfBirth) {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira uma data válida.',
      }))
      haveError = true
    }
    if (!confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: 'Você precisa confirmar sua senha.',
      }))
      haveError = true
    }
    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: 'Você precisa inserir uma senha.',
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

    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

    if (!regexName.test(name) && name) {
      setError((prevState) => ({
        ...prevState,
        name: 'Preencha o campo de nome apenas com LETRAS.',
      }))
      haveError = true
    }

    if (dateOfBirth.length < 10 && dateOfBirth) {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira uma data válida.',
      }))
      haveError = true
    }

    const fullDate = dateOfBirth.split('/')
    const day = fullDate[0]
    const month = fullDate[1]
    const year = fullDate[2]

    if (day > '31' || day === '00') {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira um dia válido.',
      }))
      haveError = true
    }

    if (month > '12' || month === '00') {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira um mês válido.',
      }))
      haveError = true
    }

    if (year > String(new Date().getFullYear()) || year < '1900') {
      setError((prevState) => ({
        ...prevState,
        dateOfBirth: 'Insira um ano válido.',
      }))
      haveError = true
    }

    if (password !== confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: 'A confirmação de senha não confere.',
      }))
      haveError = true
    }

    return haveError
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!validate()) {
      async function createUser() {
        const existUser = await verifyExistUser(email)

        if (existUser) {
          toast.error('Esse e-mail já está vinculado a uma conta.')
        } else {
          const age =
            new Date().getFullYear() - new Date(dateOfBirth).getFullYear()

          axios.post(`http://localhost:3000/user`, {
            name,
            email,
            date_of_birth: new Date(dateOfBirth),
            password,
            age,
          })

          toast.success('Usuário criado com sucesso !')
          setActiveForm('signIn')
        }
      }

      createUser()
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
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            error={!!error.name}
          />
          {error.name && (
            <Error>
              <WarningCircle size={20} weight="fill" />
              <span>{error.name}</span>
            </Error>
          )}
        </div>
        <div>
          <DateOfBirthInput
            type="text"
            placeholder="Data de nascimento"
            mask="00/00/0000"
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

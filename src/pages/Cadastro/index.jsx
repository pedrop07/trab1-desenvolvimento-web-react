import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import './styles.css'

export function validatePassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return false
  }
  return true
}

export function Cadastro() {
  const [fullName, setFullName] = useState('')
  const [profileName, setProfileName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isCheckednews, setIsCheckednews] = useState(false)
  const [isCheckedtermos, setIsCheckedtermos] = useState(false)

  const handleCheckboxChangenews = (event) => {
    setIsCheckednews(event.target.checked)
  }
  const handleCheckboxChangetermos = (event) => {
    setIsCheckedtermos(event.target.checked)
  }
  // handle input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordsMatch(validatePassword(event.target.value, confirmPassword))
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
    setPasswordsMatch(validatePassword(password, event.target.value))
  }
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [gender, setGender] = useState('outros')
  const onOptionChange = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) ?? []
    if (users.find((user) => user.email === email)) {
      return console.log('email ja cadastrado')
    }
    users.push({ email, password })
    localStorage.setItem('users', JSON.stringify(users))
    console.log(users)
    console.log(
      'Usuario ' +
        profileName +
        ' do genero ' +
        gender +
        ' e de email ' +
        email +
        ' e com news (' +
        isCheckednews +
        ') foi cadastrado com sucesso',
    )
  }

  useEffect(() => {
    document.title = 'Spotify - Cadastro'
  }, [])

  return (
    <>
      <Header />

      <div className="container">
        <div className="title">Cadastro</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Nome completo</span>
              <input
                type="text"
                placeholder="Insira seu nome completo"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input__box">
              <span className="details">Nome do perfil</span>
              <input
                type="text"
                placeholder="Insira seu nome de perfil"
                required
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
              />
            </div>
            <div className="input__box">
              <span className="details">E-mail</span>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input__box">
              <span className="details">Número de telefone</span>
              <input
                type="tel"
                placeholder="Número de celular com DDD"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input__box">
              <span className="details">Senha</span>
              <input
                type="password"
                placeholder="********"
                pattern=".{8,}"
                title="Eight or more characters"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input__box">
              <span className="details">Confirmar senha</span>
              <input
                type="password"
                placeholder="********"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!passwordsMatch && (
                <p style={{ color: 'red' }}>As senhas não são iguais.</p>
              )}
            </div>
          </div>
          <div className="gender__details">
            <input
              type="radio"
              name="gender"
              id="dot-1"
              value="masculino"
              checked={gender === 'masculino'}
              onChange={onOptionChange}
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              value="feminino"
              checked={gender === 'feminino'}
              onChange={onOptionChange}
            />
            <input
              type="radio"
              name="gender"
              id="dot-3"
              value="outros"
              checked={gender === 'outros'}
              onChange={onOptionChange}
            />
            <span className="gender__title">Gênero</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span>Masculino</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span>Feminino</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span>Outros</span>
              </label>
            </div>
          </div>
          <div className="checkbox__details">
            <input
              type="checkbox"
              id="check-1"
              name="check-1"
              checked={isCheckednews}
              onChange={handleCheckboxChangenews}
            />
            <label htmlFor="news"> Eu quero receber novidades por e-mail</label>
            <br />
            <input
              type="checkbox"
              id="check-2"
              name="check-2"
              checked={isCheckedtermos}
              onChange={handleCheckboxChangetermos}
              required="required"
            />
            <label htmlFor="termos">
              {' '}
              Eu concordo com os termos e condições de uso
            </label>
            <br />
          </div>
          <div className="button">
            <input type="submit" value="Registrar-se" />
          </div>
        </form>
      </div>
    </>
  )
}

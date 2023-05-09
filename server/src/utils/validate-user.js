const validateEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  return regex.test(email) && !!email
}

const validateName = (name) => {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

  return regex.test(name) && !!name
}

const validateAge = (age) => {
  return !!age
}

const validatePassword = (password) => {
  return !!password
}

export const validateUser = ({ email, name, age, password }) => {
  return (
    validateEmail(email) &&
    validateName(name) &&
    validateAge(age) &&
    validatePassword(password)
  )
}

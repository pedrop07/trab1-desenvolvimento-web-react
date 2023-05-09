import { prisma } from '../../../lib/prisma.js'
import { validateUser } from '../../../utils/validate-user.js'

export async function registerUser(request, response) {
  const { name, email, age, password } = request.body

  if (!validateUser({ name, email, age, password })) {
    return response.status(400).send({ message: 'Dados inválidos.' })
  }

  const data = {
    name,
    email,
    age,
    password,
  }

  try {
    await prisma.user.create({ data })
    return response.status(201).send(data)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

import { prisma } from '../../../lib/prisma.js'

export async function listUsers(request, response) {
  try {
    const users = await prisma.user.findMany()
    return response.status(200).send(users)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

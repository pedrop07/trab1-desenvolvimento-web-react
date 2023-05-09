import { prisma } from '../../../lib/prisma.js'

export async function updateUser(request, response) {
  const { id } = request.params
  const { name, email } = request.body

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return response.status(404).send({ message: 'Usuário não foi encontrado' })
  }

  try {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    })

    return response.status(200).send(updateUser)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

import { prisma } from '../../../lib/prisma.js'

export async function findUser(request, response) {
  const { id } = request.params

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        playlists: true,
      },
    })

    return response.status(200).send(user)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

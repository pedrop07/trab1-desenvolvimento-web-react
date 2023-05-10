import { prisma } from '../../../lib/prisma.js'

export async function listUsers(request, response) {
  const { email } = request.query

  try {
    const users = await prisma.user.findMany({
      include: {
        playlists: {
          include: {
            musics: true,
          },
        },
      },
      where: {
        email,
      },
    })
    return response.status(200).send(users)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

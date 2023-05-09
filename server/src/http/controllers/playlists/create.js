import { prisma } from '../../../lib/prisma.js'

export async function createPlaylist(request, response) {
  const { name } = request.body
  const { userId } = request.params

  try {
    const playlist = await prisma.playlist.create({
      data: {
        name,
        user_id: userId,
      },
    })

    return response.status(201).send(playlist)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

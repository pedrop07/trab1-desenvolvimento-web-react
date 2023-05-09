import { prisma } from '../../../lib/prisma.js'

export async function findPlaylist(request, response) {
  const { id } = request.params

  try {
    const playlist = await prisma.playlist.findUnique({
      where: {
        id,
      },
      include: {
        musics: true,
      },
    })

    return response.status(200).send(playlist)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

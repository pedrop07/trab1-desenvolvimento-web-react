import { prisma } from '../../../lib/prisma.js'

export async function listMusics(request, response) {
  try {
    const musics = await prisma.music.findMany({
      include: {
        playlists: true,
        spotify_playlists: true,
      },
    })
    return response.status(200).send(musics)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

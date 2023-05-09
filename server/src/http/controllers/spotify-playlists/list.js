import { prisma } from '../../../lib/prisma.js'

export async function listSpotifyPlaylists(request, response) {
  try {
    const playlists = await prisma.spotifyPlaylist.findMany({
      include: {
        musics: true,
      },
    })
    return response.status(200).send(playlists)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

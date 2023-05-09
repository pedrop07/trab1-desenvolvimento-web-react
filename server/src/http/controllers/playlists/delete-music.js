import { prisma } from '../../../lib/prisma.js'

export async function deleteMusicToPlaylist(request, response) {
  const { playlistId, musicId } = request.params

  try {
    const updatePlaylist = await prisma.playlist.update({
      where: {
        id: playlistId,
      },
      data: {
        musics: {
          disconnect: {
            id: musicId,
          },
        },
      },
    })

    return response.status(200).send(updatePlaylist)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

import { prisma } from '../../../lib/prisma.js'

export async function addMusicToPlaylist(request, response) {
  const { playlistId } = request.params
  const music = request.body

  try {
    const updatePlaylist = await prisma.playlist.update({
      where: {
        id: playlistId,
      },
      data: {
        musics: {
          connect: {
            id: music.id,
          },
        },
      },
    })

    return response.status(201).send(updatePlaylist)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

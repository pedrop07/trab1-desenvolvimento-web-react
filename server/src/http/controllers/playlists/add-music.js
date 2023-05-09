import { prisma } from '../../../lib/prisma.js'

export async function addMusicToPlaylist(request, response) {
  const { id } = request.params
  const music = request.body

  try {
    const updatePlaylist = await prisma.playlist.update({
      where: {
        id,
      },
      data: {
        musics: {
          connect: {
            id: music.id,
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

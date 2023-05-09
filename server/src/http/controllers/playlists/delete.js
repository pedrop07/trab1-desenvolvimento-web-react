import { prisma } from '../../../lib/prisma.js'

export async function deletePlaylist(request, response) {
  const { id } = request.params

  try {
    const deletedPlaylist = await prisma.playlist.delete({
      where: {
        id,
      },
    })

    return response.status(201).send(deletedPlaylist)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

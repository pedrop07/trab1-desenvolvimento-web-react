import { prisma } from '../../../lib/prisma.js'

export async function searchMusics(request, response) {
  const { name } = request.query

  try {
    const musics = await prisma.music.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    })
    return response.status(200).send(musics)
  } catch (error) {
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

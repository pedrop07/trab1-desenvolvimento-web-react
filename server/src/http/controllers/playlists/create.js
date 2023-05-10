import { prisma } from '../../../lib/prisma.js'

export async function createPlaylist(request, response) {
  const { name, user_id } = request.body

  if (!name) {
    return response
      .status(400)
      .send({ message: 'Campo de nome não pode ser vazio' })
  }

  if (!user_id) {
    return response.status(400).send({ message: 'Necessário user_id' })
  }

  try {
    const playlist = await prisma.playlist.create({
      data: {
        name,
        user_id,
      },
      include: {
        musics: true,
      },
    })

    return response.status(201).send(playlist)
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: 'Erro no servidor' })
  }
}

import { prisma } from '../../lib/prisma.js'

export async function verifyExistUser(request, response) {
  const { email } = request.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    return response.status(409).send({ message: 'Email já cadastrado.' })
  }
}

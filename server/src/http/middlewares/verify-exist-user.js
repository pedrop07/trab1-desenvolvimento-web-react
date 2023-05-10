import { prisma } from '../../lib/prisma.js'
import { validateEmail } from '../../utils/validate-user.js'

export async function verifyExistUser(request, response, next) {
  const { email } = request.body
  const { id } = request.params

  if (!validateEmail(email)) {
    return response.status(400).send({ message: 'Email está inválido.' })
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user && user.id !== id) {
    return response.status(409).send({ message: 'Email já cadastrado.' })
  } else {
    next()
  }
}

import express from 'express'
import { registerUser } from './http/controllers/users/register.js'
import { verifyExistUser } from './http/middlewares/verify-exist-user.js'
import { listUsers } from './http/controllers/users/list.js'
import { updateUser } from './http/controllers/users/update.js'
const app = express()
app.use(express.json())

app.get('/user', listUsers)
app.post('/user', verifyExistUser, registerUser)
app.patch('/user/:id', updateUser)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

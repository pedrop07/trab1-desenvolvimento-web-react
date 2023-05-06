import axios from 'axios'
import { toast } from 'react-hot-toast'

export async function verifyExistUser(email) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user?email=${email}`,
    )

    if (response.data.length) {
      return true
    } else {
      return false
    }
  } catch (error) {
    toast.error('Servidor offline.')
  }
}

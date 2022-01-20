import { URI } from '@constants/uri.constants'
import axios from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: URI.DOMAIN,
})

export default api

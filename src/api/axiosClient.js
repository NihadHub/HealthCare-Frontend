import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use((config) => {
  const auth = localStorage.getItem('auth')
  if (auth) {
    const token = JSON.parse(auth).token
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      localStorage.removeItem('auth')
      window.location.href = '/login'
    }

    const messages = {
      400: 'Requête invalide',
      403: 'Accès refusé',
      404: 'Ressource introuvable',
      500: 'Erreur serveur, réessayez plus tard'
    }

    error.message = messages[status] || 'Une erreur est survenue'

    return Promise.reject(error)
  }
)

export default axiosClient
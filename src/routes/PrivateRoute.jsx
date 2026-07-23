import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PrivateRoute({ children }) {
  const { auth, loading } = useAuth()

  if (loading) {
    return <p>Chargement...</p>
  }

  if (!auth) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute
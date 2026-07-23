import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RoleGuard({ roles, children }) {
  const { auth } = useAuth()

  if (!roles.includes(auth.role)) {
    return <Navigate to="/" />
  }

  return children
}

export default RoleGuard
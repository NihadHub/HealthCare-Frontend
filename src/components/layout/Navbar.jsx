import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const navigate = useNavigate()
  const { auth, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/patients">Patients</NavLink>
      <NavLink to="/medecins">Médecins</NavLink>
      <NavLink to="/rendez-vous">Rendez-vous</NavLink>
      <NavLink to="/dossiers-medicaux">Dossiers médicaux</NavLink>
      <NavLink to="/a-propos">À propos</NavLink>

      {auth && (
        <>
          <span>{auth.username}</span>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      )}
    </nav>
  )
}

export default Navbar
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/patients">Patients</NavLink>
      <NavLink to="/medecins">Médecins</NavLink>
      <NavLink to="/rendez-vous">Rendez-vous</NavLink>
      <NavLink to="/dossiers-medicaux">Dossiers médicaux</NavLink>
      <NavLink to="/a-propos">À propos</NavLink>
    </nav>
  )
}

export default Navbar
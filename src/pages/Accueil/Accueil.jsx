import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Accueil() {
  const { auth } = useAuth()

  return (
    <div>
      <h1>Bienvenue sur HealthCare+</h1>
      <p>Connecté en tant que {auth?.username} ({auth?.role})</p>

      <h2>Fonctionnalités</h2>

      <ul>
        <li>
          <Link to="/patients">Gestion des patients</Link>
          <p>Consulter, ajouter, modifier et supprimer les patients</p>
        </li>

        <li>
          <Link to="/medecins">Gestion des médecins</Link>
          <p>Consulter, ajouter, modifier et supprimer les médecins</p>
        </li>

        <li>
          <Link to="/rendez-vous">Gestion des rendez-vous</Link>
          <p>Planifier, consulter, modifier et annuler des rendez-vous</p>
        </li>

        <li>
          <Link to="/dossiers-medicaux">Dossiers médicaux</Link>
          <p>Consulter et compléter les dossiers médicaux des patients</p>
        </li>
      </ul>
    </div>
  )
}

export default Accueil
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDossiers } from '../../api/dossiersApi'

function DossiersList() {
  const [dossiers, setDossiers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    getDossiers()
      .then((res) => setDossiers(res.data.content))
      .catch((error) => setErrorMsg(error.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Chargement...</p>

  return (
    <div>
      <h1>Dossiers médicaux</h1>

      <Link to="/dossiers-medicaux/nouveau">Ajouter un dossier médical</Link>

      {errorMsg && <p>{errorMsg}</p>}

      <table>
        <thead>
          <tr>
            <th>Date création</th>
            <th>Diagnostic</th>
            <th>Observation</th>
            <th>Patient</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map((dossier) => (
            <tr key={dossier.id}>
              <td>{dossier.dateCreation}</td>
              <td>{dossier.diagnostic}</td>
              <td>{dossier.observation}</td>
              <td>{dossier.patient?.nom}</td>
              <td>
                <Link to={`/dossiers-medicaux/${dossier.id}`}>Voir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DossiersList
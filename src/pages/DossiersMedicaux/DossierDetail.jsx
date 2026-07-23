import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDossierById, ajouterDiagnostic, ajouterObservation } from '../../api/dossiersApi'

function DossierDetail() {
  const { id } = useParams()
  const [dossier, setDossier] = useState(null)
  const [diagnostic, setDiagnostic] = useState('')
  const [observation, setObservation] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchDossier = () => {
    getDossierById(id).then((res) => setDossier(res.data))
  }

  useEffect(() => {
    fetchDossier()
  }, [id])

  const handleDiagnostic = async () => {
    try {
      await ajouterDiagnostic(id, diagnostic)
      fetchDossier()
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  const handleObservation = async () => {
    try {
      await ajouterObservation(id, observation)
      fetchDossier()
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  if (!dossier) return <p>Chargement...</p>

  return (
    <div>
      <h1>Dossier médical</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <p>Date de création: {dossier.dateCreation}</p>
      <p>Diagnostic: {dossier.diagnostic}</p>
      <p>Observation: {dossier.observation}</p>

      <div>
        <label>Modifier le diagnostic</label>
        <input type="text" value={diagnostic} onChange={(e) => setDiagnostic(e.target.value)} />
        <button onClick={handleDiagnostic}>Enregistrer</button>
      </div>

      <div>
        <label>Modifier l'observation</label>
        <input type="text" value={observation} onChange={(e) => setObservation(e.target.value)} />
        <button onClick={handleObservation}>Enregistrer</button>
      </div>

      <Link to="/dossiers-medicaux">Retour à la liste</Link>
    </div>
  )
}

export default DossierDetail
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getRendezVousById } from '../../api/rendezVousApi'

function RendezVousDetail() {
  const { id } = useParams()
  const [rdv, setRdv] = useState(null)

  useEffect(() => {
    getRendezVousById(id).then((res) => setRdv(res.data))
  }, [id])

  if (!rdv) return <p>Chargement...</p>

  return (
    <div>
      <h1>Rendez-vous</h1>
      <p>Date: {rdv.dateRendezVous}</p>
      <p>Statut: {rdv.statutRendezVous}</p>
      <p>Patient ID: {rdv.patientId}</p>
      <p>Médecin ID: {rdv.medecinId}</p>

      <Link to="/rendez-vous">Retour à la liste</Link>
    </div>
  )
}

export default RendezVousDetail
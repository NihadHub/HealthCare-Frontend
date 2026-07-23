import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMedecinById } from '../../api/medecinsApi'

function MedecinDetail() {
  const { id } = useParams()
  const [medecin, setMedecin] = useState(null)

  useEffect(() => {
    getMedecinById(id).then((res) => setMedecin(res.data))
  }, [id])

  if (!medecin) return <p>Chargement...</p>

  return (
    <div>
      <h1>{medecin.nom}</h1>
      <p>Spécialité: {medecin.specialite}</p>
      <p>Email: {medecin.email}</p>
      <p>Téléphone: {medecin.telephone}</p>

      <Link to="/medecins">Retour à la liste</Link>
    </div>
  )
}

export default MedecinDetail
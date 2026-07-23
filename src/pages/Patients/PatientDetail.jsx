import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPatientById } from '../../api/patientsApi'

function PatientDetail() {
  const { id } = useParams()
  const [patient, setPatient] = useState(null)

  useEffect(() => {
    getPatientById(id).then((res) => setPatient(res.data))
  }, [id])

  if (!patient) return <p>Chargement...</p>

  return (
    <div>
      <h1>{patient.nom} {patient.prenom}</h1>
      <p>Email: {patient.email}</p>
      <p>Téléphone: {patient.telephone}</p>
      <p>Date de naissance: {patient.dateNaissance}</p>

      <Link to="/patients">Retour à la liste</Link>
    </div>
  )
}

export default PatientDetail
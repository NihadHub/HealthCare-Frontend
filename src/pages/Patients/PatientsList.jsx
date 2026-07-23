import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPatients, deletePatient } from '../../api/patientsApi'

function PatientsList() {
  const [patients, setPatients] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchPatients = async () => {
    try {
      const res = await getPatients(page)
      setPatients(res.data.content)
      setTotalPages(res.data.totalPages)
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  useEffect(() => {
    fetchPatients()
  }, [page])

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce patient ?')) return

    try {
      await deletePatient(id)
      fetchPatients()
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>Patients</h1>

      <Link to="/patients/nouveau">Ajouter un patient</Link>

      {errorMsg && <p>{errorMsg}</p>}

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.nom}</td>
              <td>{patient.prenom}</td>
              <td>{patient.email}</td>
              <td>{patient.telephone}</td>
              <td>
                <Link to={`/patients/${patient.id}`}>Voir</Link>
                <Link to={`/patients/${patient.id}/modifier`}>Modifier</Link>
                <button onClick={() => handleDelete(patient.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Précédent</button>
        <span> Page {page + 1} / {totalPages} </span>
        <button disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)}>Suivant</button>
      </div>
    </div>
  )
}

export default PatientsList
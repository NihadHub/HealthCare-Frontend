import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRendezVous, annulerRendezVous } from '../../api/rendezVousApi'

function RendezVousList() {
  const [rendezVous, setRendezVous] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    getRendezVous()
      .then((res) => {
        setRendezVous(res.data.content)
      })
      .catch((error) => {
        setErrorMsg(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleAnnuler = async (id) => {
    if (!confirm('Annuler ce rendez-vous ?')) return

    try {
      await annulerRendezVous(id)
      const res = await getRendezVous()
      setRendezVous(res.data.content)
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  if (loading) return <p>Chargement...</p>

  return (
    <div>
      <h1>Rendez-vous</h1>

      <Link to="/rendez-vous/nouveau">Ajouter un rendez-vous</Link>

      {errorMsg && <p>{errorMsg}</p>}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Statut</th>
            <th>Patient</th>
            <th>Médecin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendezVous.map((rdv) => (
            <tr key={rdv.id}>
              <td>{rdv.dateRendezVous}</td>
              <td>{rdv.statutRendezVous}</td>
              <td>{rdv.patient?.nom}</td>
              <td>{rdv.medecin?.nom}</td>
              <td>
                <Link to={`/rendez-vous/${rdv.id}`}>Voir</Link>
                <Link to={`/rendez-vous/${rdv.id}/modifier`}>Modifier</Link>
                <button onClick={() => handleAnnuler(rdv.id)}>Annuler</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RendezVousList
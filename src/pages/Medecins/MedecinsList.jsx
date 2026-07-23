import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMedecins, deleteMedecin } from '../../api/medecinsApi'

function MedecinsList() {
  const [medecins, setMedecins] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchMedecins = async () => {
    try {
      const res = await getMedecins(page)
      setMedecins(res.data.content)
      setTotalPages(res.data.totalPages)
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  useEffect(() => {
    fetchMedecins()
  }, [page])

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce médecin ?')) return

    try {
      await deleteMedecin(id)
      fetchMedecins()
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>Médecins</h1>

      <Link to="/medecins/nouveau">Ajouter un médecin</Link>

      {errorMsg && <p>{errorMsg}</p>}

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medecins.map((medecin) => (
            <tr key={medecin.id}>
              <td>{medecin.nom}</td>
              <td>{medecin.specialite}</td>
              <td>{medecin.email}</td>
              <td>{medecin.telephone}</td>
              <td>
                <Link to={`/medecins/${medecin.id}`}>Voir</Link>
                <Link to={`/medecins/${medecin.id}/modifier`}>Modifier</Link>
                <button onClick={() => handleDelete(medecin.id)}>Supprimer</button>
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

export default MedecinsList
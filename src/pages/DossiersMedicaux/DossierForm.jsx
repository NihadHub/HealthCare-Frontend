import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createDossier } from '../../api/dossiersApi'
import { getPatients } from '../../api/patientsApi'

function DossierForm() {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState(null)
  const [patients, setPatients] = useState([])

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    getPatients(0, 100).then((res) => setPatients(res.data.content))
  }, [])

  const onSubmit = async (data) => {
    try {
      await createDossier(data)
      navigate('/dossiers-medicaux')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>Ajouter un dossier médical</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Date de création</label>
          <input type="datetime-local" {...register('dateCreation')} />
        </div>

        <div>
          <label>Patient</label>
          <select {...register('patientId')}>
            <option value="">-- Choisir --</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
            ))}
          </select>
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default DossierForm
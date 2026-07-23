import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { rendezVousSchema } from '../../schemas/rendezVousSchema'
import { getRendezVousById, createRendezVous, updateRendezVous } from '../../api/rendezVousApi'
import { getPatients } from '../../api/patientsApi'
import { getMedecins } from '../../api/medecinsApi'

function RendezVousForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id
  const [errorMsg, setErrorMsg] = useState(null)
  const [patients, setPatients] = useState([])
  const [medecins, setMedecins] = useState([])

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(rendezVousSchema)
  })

  useEffect(() => {
    getPatients(0, 100).then((res) => setPatients(res.data.content))
    getMedecins(0, 100).then((res) => setMedecins(res.data.content))

    if (isEditMode) {
      getRendezVousById(id).then((res) => reset(res.data))
    }
  }, [id])

  const onSubmit = async (data) => {
    try {
      if (isEditMode) {
        await updateRendezVous(id, data)
      } else {
        await createRendezVous(data)
      }
      navigate('/rendez-vous')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>{isEditMode ? 'Modifier le rendez-vous' : 'Ajouter un rendez-vous'}</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Date</label>
          <input type="datetime-local" {...register('dateRendezVous')} />
          {errors.dateRendezVous && <p>{errors.dateRendezVous.message}</p>}
        </div>

        <div>
          <label>Statut</label>
          <select {...register('statutRendezVous')}>
            <option value="">-- Choisir --</option>
            <option value="PROGRAMME">Programmé</option>
            <option value="CONFIRME">Confirmé</option>
            <option value="TERMINE">Terminé</option>
            <option value="ANNULER">Annulé</option>
          </select>
          {errors.statutRendezVous && <p>{errors.statutRendezVous.message}</p>}
        </div>

        <div>
          <label>Patient</label>
          <select {...register('patientId')}>
            <option value="">-- Choisir --</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
            ))}
          </select>
          {errors.patientId && <p>{errors.patientId.message}</p>}
        </div>

        <div>
          <label>Médecin</label>
          <select {...register('medecinId')}>
            <option value="">-- Choisir --</option>
            {medecins.map((m) => (
              <option key={m.id} value={m.id}>{m.nom}</option>
            ))}
          </select>
          {errors.medecinId && <p>{errors.medecinId.message}</p>}
        </div>

        <button type="submit">{isEditMode ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </div>
  )
}

export default RendezVousForm
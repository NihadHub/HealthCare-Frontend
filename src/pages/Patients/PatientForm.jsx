import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { patientSchema } from '../../schemas/patientSchema'
import { getPatientById, createPatient, updatePatient } from '../../api/patientsApi'


function PatientForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id
  const [errorMsg, setErrorMsg] = useState(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(patientSchema)
  })

  useEffect(() => {
    if (isEditMode) {
      getPatientById(id).then((res) => {
        reset(res.data)
      })
    }
  }, [id])

  const onSubmit = async (data) => {
    try {
      if (isEditMode) {
        await updatePatient(id, data)
      } else {
        await createPatient(data)
      }
      navigate('/patients')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>{isEditMode ? 'Modifier le patient' : 'Ajouter un patient'}</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nom</label>
          <input type="text" {...register('nom')} />
          {errors.nom && <p>{errors.nom.message}</p>}
        </div>

        <div>
          <label>Prénom</label>
          <input type="text" {...register('prenom')} />
          {errors.prenom && <p>{errors.prenom.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Téléphone</label>
          <input type="text" {...register('telephone')} />
          {errors.telephone && <p>{errors.telephone.message}</p>}
        </div>

        <div>
          <label>Date de naissance</label>
          <input type="date" {...register('dateNaissance')} />
          {errors.dateNaissance && <p>{errors.dateNaissance.message}</p>}
        </div>

        <button type="submit">{isEditMode ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </div>
  )
}

export default PatientForm
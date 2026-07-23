import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { medecinSchema } from '../../schemas/medecinSchema'
import { getMedecinById, createMedecin, updateMedecin } from '../../api/medecinsApi'

function MedecinForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id
  const [errorMsg, setErrorMsg] = useState(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(medecinSchema)
  })

  useEffect(() => {
    if (isEditMode) {
      getMedecinById(id).then((res) => reset(res.data))
    }
  }, [id])

  const onSubmit = async (data) => {
    try {
      if (isEditMode) {
        await updateMedecin(id, data)
      } else {
        await createMedecin(data)
      }
      navigate('/medecins')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div>
      <h1>{isEditMode ? 'Modifier le médecin' : 'Ajouter un médecin'}</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nom</label>
          <input type="text" {...register('nom')} />
          {errors.nom && <p>{errors.nom.message}</p>}
        </div>

        <div>
          <label>Spécialité</label>
          <input type="text" {...register('specialite')} />
          {errors.specialite && <p>{errors.specialite.message}</p>}
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

        <button type="submit">{isEditMode ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </div>
  )
}

export default MedecinForm
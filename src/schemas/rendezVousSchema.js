import * as yup from 'yup'

export const rendezVousSchema = yup.object({
  dateRendezVous: yup.string().required('La date est obligatoire'),
  statutRendezVous: yup.string().required('Le statut est obligatoire'),
  patientId: yup.number().typeError('Le patient est obligatoire').required(),
  medecinId: yup.number().typeError('Le médecin est obligatoire').required()
})
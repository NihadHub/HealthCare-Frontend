import * as yup from 'yup'

export const dossierSchema = yup.object({
  diagnostic: yup.string(),
  observation: yup.string(),
  dateCreation: yup.string().required('La date est obligatoire'),
  patientId: yup.number().typeError('Le patient est obligatoire').required()
})
import * as yup from 'yup'

export const medecinSchema = yup.object({
  nom: yup.string().required('Le nom est obligatoire'),
  specialite: yup.string().required('La spécialité est obligatoire'),
  email: yup.string().email('Email invalide').required('L\'email est obligatoire'),
  telephone: yup.string().required('Le téléphone est obligatoire')
})
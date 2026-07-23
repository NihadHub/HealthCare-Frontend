import * as yup from 'yup'

export const patientSchema = yup.object({
  nom: yup.string().required('Le nom est obligatoire'),
  prenom: yup.string().required('Le prénom est obligatoire'),
  email: yup.string().email('Email invalide').required('L\'email est obligatoire'),
  telephone: yup.string().required('Le téléphone est obligatoire'),
  dateNaissance: yup.date()
    .max(new Date(), 'La date doit être une date passée')
    .required('La date de naissance est obligatoire')
})
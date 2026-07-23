import * as yup from 'yup'

export const loginSchema = yup.object({
    username: yup.string().required('le nom d\'utilisateur est requis'),
    password: yup.string().required('le not de passe est requis')
})
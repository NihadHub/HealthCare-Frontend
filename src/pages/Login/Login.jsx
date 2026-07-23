import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../../schemas/loginSchema'
import { login } from '../../api/authApi'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login: authLogin } = useAuth()
  const { register, handleSubmit } = useForm({ resolver: yupResolver(loginSchema) })

  const onSubmit = async (formData) => {
    const res = await login(formData)
    authLogin({ token: res.data.token, role: res.data.role, username: formData.username })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nom d'utilisateur" {...register('username')} />
      <input type="password" placeholder="Mot de passe" {...register('password')} />
      <button type="submit">Se connecter</button>
    </form>
  )
}

export default Login
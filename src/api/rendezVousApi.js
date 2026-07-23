import axiosClient from './axiosClient'

export const getRendezVous = (page = 0, size = 10) =>
  axiosClient.get(`/RendezVous?page=${page}&size=${size}`)

export const getRendezVousById = (id) => axiosClient.get(`/RendezVous/${id}`)
export const createRendezVous = (data) => axiosClient.post('/RendezVous', data)
export const updateRendezVous = (id, data) => axiosClient.put(`/RendezVous/${id}`, data)
export const annulerRendezVous = (id) => axiosClient.post(`/RendezVous/${id}/annuler`)
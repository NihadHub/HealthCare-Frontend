import axiosClient from './axiosClient'

export const getMedecins = (page = 0, size = 10) =>
  axiosClient.get(`/medecin?page=${page}&size=${size}`)

export const getMedecinById = (id) => axiosClient.get(`/medecin/${id}`)
export const createMedecin = (data) => axiosClient.post('/medecin', data)
export const updateMedecin = (id, data) => axiosClient.put(`/medecin/${id}`, data)
export const deleteMedecin = (id) => axiosClient.delete(`/medecin/${id}`)
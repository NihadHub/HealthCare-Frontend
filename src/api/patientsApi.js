import axiosClient from './axiosClient'

export const getPatients = (page = 0, size = 10) =>
  axiosClient.get(`/patients?page=${page}&size=${size}`)

export const searchPatients = (nom, page = 0, size = 10) =>
  axiosClient.get(`/patients/search/${nom}?page=${page}&size=${size}`)

export const getPatientById = (id) => axiosClient.get(`/patients/${id}`)
export const createPatient = (data) => axiosClient.post('/patients', data)
export const updatePatient = (id, data) => axiosClient.put(`/patients/${id}`, data)
export const deletePatient = (id) => axiosClient.delete(`/patients/${id}`)
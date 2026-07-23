import axiosClient from './axiosClient'

export const getDossiers = (page = 0, size = 10) =>
  axiosClient.get(`/dossiers-medecaux?page=${page}&size=${size}`)

export const getDossierById = (id) => axiosClient.get(`/dossiers-medecaux/${id}`)
export const createDossier = (data) => axiosClient.post('/dossiers-medecaux', data)
export const ajouterDiagnostic = (id, diagnostic) =>
  axiosClient.post(`/dossiers-medecaux/${id}/diagnostic`, diagnostic, {
    headers: { 'Content-Type': 'text/plain' }
  })
export const ajouterObservation = (id, observation) =>
  axiosClient.post(`/dossiers-medecaux/${id}/observation`, observation, {
    headers: { 'Content-Type': 'text/plain' }
  })
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PrivateRoute from './PrivateRoute'
import RoleGuard from './RoleGuard'
import Login from '../pages/Login/Login'
import Accueil from '../pages/Accueil/Accueil'
import PatientsList from '../pages/Patients/PatientsList'
import PatientDetail from '../pages/Patients/PatientDetail'
import PatientForm from '../pages/Patients/PatientForm'
import MedecinsList from '../pages/Medecins/MedecinsList'
import MedecinDetail from '../pages/Medecins/MedecinDetail'
import MedecinForm from '../pages/Medecins/MedecinForm'
import RendezVousList from '../pages/RendezVous/RendezVousList'
import RendezVousDetail from '../pages/RendezVous/RendezVousDetail'
import RendezVousForm from '../pages/RendezVous/RendezVousForm'
import DossiersList from '../pages/DossiersMedicaux/DossiersList'
import DossierDetail from '../pages/DossiersMedicaux/DossierDetail'
import DossierForm from '../pages/DossiersMedicaux/DossierForm'
import APropos from '../pages/APropos/APropos'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          <Route index element={<Accueil />} />

          <Route path="patients" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_PATIENT', 'ROLE_DOCTOR']}>
              <PatientsList />
            </RoleGuard>
          } />

          <Route path="patients/nouveau" element={
            <RoleGuard roles={['ROLE_ADMIN']}>
              <PatientForm />
            </RoleGuard>
          } />

          <Route path="patients/:id/modifier" element={
            <RoleGuard roles={['ROLE_ADMIN']}>
              <PatientForm />
            </RoleGuard>
          } />

          <Route path="patients/:id" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <PatientDetail />
            </RoleGuard>
          } />

          <Route path="medecins" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <MedecinsList />
            </RoleGuard>
          } />

          <Route path="medecins/nouveau" element={
            <RoleGuard roles={['ROLE_ADMIN']}>
              <MedecinForm />
            </RoleGuard>
          } />

          <Route path="medecins/:id/modifier" element={
            <RoleGuard roles={['ROLE_ADMIN']}>
              <MedecinForm />
            </RoleGuard>
          } />

          <Route path="medecins/:id" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <MedecinDetail />
            </RoleGuard>
          } />

          <Route path="rendez-vous" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT']}>
              <RendezVousList />
            </RoleGuard>
          } />

          <Route path="rendez-vous/nouveau" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_PATIENT']}>
              <RendezVousForm />
            </RoleGuard>
          } />

          <Route path="rendez-vous/:id/modifier" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <RendezVousForm />
            </RoleGuard>
          } />

          <Route path="rendez-vous/:id" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT']}>
              <RendezVousDetail />
            </RoleGuard>
          } />

          <Route path="dossiers-medicaux" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <DossiersList />
            </RoleGuard>
          } />

          <Route path="dossiers-medicaux/nouveau" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT']}>
              <DossierForm />
            </RoleGuard>
          } />

          <Route path="dossiers-medicaux/:id" element={
            <RoleGuard roles={['ROLE_ADMIN', 'ROLE_DOCTOR']}>
              <DossierDetail />
            </RoleGuard>
          } />

          <Route path="a-propos" element={<APropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
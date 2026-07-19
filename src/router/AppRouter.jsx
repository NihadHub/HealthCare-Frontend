import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Accueil from '../pages/Accueil/Accueil'
import PatientsList from '../pages/Patients/PatientsList'
import MedecinsList from '../pages/Medecins/MedecinsList'
import RendezVousList from '../pages/RendezVous/RendezVousList'
import DossiersList from '../pages/DossiersMedicaux/DossiersList'
import APropos from '../pages/APropos/APropos'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="patients" element={<PatientsList />} />
          <Route path="medecins" element={<MedecinsList />} />
          <Route path="rendez-vous" element={<RendezVousList />} />
          <Route path="dossiers-medicaux" element={<DossiersList />} />
          <Route path="a-propos" element={<APropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
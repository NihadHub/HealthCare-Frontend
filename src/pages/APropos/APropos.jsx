function APropos() {
  return (
    <div>
      <h1>À propos de HealthCare+</h1>

      <p>
        HealthCare+ est une application de gestion médicale permettant aux administrateurs,
        médecins et patients de gérer efficacement les patients, les médecins, les rendez-vous
        et les dossiers médicaux.
      </p>

      <h2>Fonctionnalités principales</h2>
      <ul>
        <li>Gestion des patients (ajout, modification, suppression, consultation)</li>
        <li>Gestion des médecins et de leurs spécialités</li>
        <li>Prise et suivi des rendez-vous médicaux</li>
        <li>Gestion des dossiers médicaux (diagnostic, observation)</li>
        <li>Authentification sécurisée avec gestion des rôles (Admin, Médecin, Patient)</li>
      </ul>

      <h2>Technologies utilisées</h2>
      <ul>
        <li>Frontend: React, React Router, React Hook Form, Yup, Axios</li>
        <li>Backend: Spring Boot, Spring Security, JWT, MySQL</li>
      </ul>
    </div>
  )
}

export default APropos
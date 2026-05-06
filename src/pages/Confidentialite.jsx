import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function Art({ n, title, children }) {
  return (
    <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid #E5E5E5' }}>
      <h2 style={{ fontSize: 22, marginBottom: 16 }}>Article {n} — {title}</h2>
      <div style={{ fontSize: 16, lineHeight: 1.85, color: '#3A3A3A' }}>{children}</div>
    </div>
  )
}

export default function Confidentialite() {
  return (
    <div className="page">
      <Nav />
      <section style={{ padding: '100px 64px 48px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Légal</span>
          <h1 style={{ fontSize: 64, marginTop: 20 }}>Politique de confidentialité</h1>
          <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 16 }}>Dernière mise à jour : 1er janvier 2026 · Applicable à partir du 1er mars 2026</p>
        </div>
      </section>
      <section style={{ padding: '60px 64px 100px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ padding: '24px 32px', background: '#E8EFFC', borderRadius: 16, marginBottom: 40, borderLeft: '4px solid #0E47AB' }}>
            <p style={{ fontSize: 15, color: '#0a0a0a', margin: 0, lineHeight: 1.7 }}>
              <strong>En résumé :</strong> Vos données vous appartiennent. Nous collectons le strict minimum nécessaire au fonctionnement de Society. Nous ne vendons jamais vos données. Elles sont hébergées en Afrique et vous pouvez les supprimer à tout moment.
            </p>
          </div>

          <Art n={1} title="Identité du responsable de traitement">
            <p>Le responsable du traitement est <strong>Difero Fundry SARL</strong>, immatriculée au RCCM d'Abidjan sous le numéro CI-ABJ-2025-B-12345, dont le siège social est situé à l'Immeuble CCIG, Avenue Franchet d'Esperey, Plateau, Abidjan, Côte d'Ivoire.</p>
            <p style={{ marginTop: 12 }}>Contact DPO (Délégué à la Protection des Données) : <strong>dpo@society.ci</strong></p>
          </Art>

          <Art n={2} title="Données collectées">
            <p><strong>Lors de l'inscription :</strong> Nom de la communauté, type, description, pays, ville, email du fondateur, téléphone (optionnel).</p>
            <p style={{ marginTop: 12 }}><strong>Lors de l'utilisation :</strong> Données des membres que vous ajoutez (nom, email, rôle), transactions financières effectuées via Society, logs d'activité pour la sécurité.</p>
            <p style={{ marginTop: 12 }}><strong>Automatiquement :</strong> Adresse IP, type de navigateur, pages visitées, durée des sessions. Ces données sont anonymisées sous 30 jours.</p>
          </Art>

          <Art n={3} title="Finalités du traitement">
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>Fourniture et amélioration des services Society</li>
              <li>Facturation et gestion des abonnements</li>
              <li>Support client et résolution de problèmes</li>
              <li>Prévention de la fraude et sécurité des comptes</li>
              <li>Statistiques d'usage agrégées et anonymisées</li>
              <li>Communications relatives aux mises à jour importantes du service</li>
            </ul>
          </Art>

          <Art n={4} title="Durée de conservation">
            <p>Les données des comptes actifs sont conservées pendant toute la durée du contrat et 2 ans après sa résiliation.</p>
            <p style={{ marginTop: 12 }}>Les données de facturation sont conservées 10 ans conformément aux obligations comptables ivoiriennes.</p>
            <p style={{ marginTop: 12 }}>Les données anonymisées à des fins statistiques peuvent être conservées indéfiniment.</p>
          </Art>

          <Art n={5} title="Vos droits">
            <p>Conformément au RGPD et à la loi ivoirienne n°2013-450 relative à la protection des données à caractère personnel, vous disposez des droits suivants :</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 12 }}>
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer à certains traitements</li>
            </ul>
            <p style={{ marginTop: 16 }}>Pour exercer ces droits, contactez : <strong>dpo@society.ci</strong>. Réponse garantie sous 30 jours.</p>
          </Art>

          <Art n={6} title="Cookies">
            <p>Society utilise des cookies essentiels au fonctionnement du service (session, authentification) et des cookies analytiques anonymisés. Aucun cookie publicitaire n'est utilisé.</p>
            <p style={{ marginTop: 12 }}>Vous pouvez configurer vos préférences cookies via les paramètres de votre navigateur.</p>
          </Art>

          <Art n={7} title="Hébergement et transferts">
            <p>L'ensemble de vos données est hébergé dans des datacenters situés sur le continent africain (Côte d'Ivoire et Ouganda). Aucun transfert hors d'Afrique n'est effectué sans votre consentement explicite.</p>
          </Art>
        </div>
      </section>
      <Footer />
    </div>
  )
}

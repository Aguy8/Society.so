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

export default function CGU() {
  return (
    <div className="page">
      <Nav />
      <section style={{ padding: '100px 64px 48px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Légal</span>
          <h1 style={{ fontSize: 64, marginTop: 20 }}>Conditions Générales d'Utilisation</h1>
          <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 16 }}>Version 1.0 · Entrée en vigueur le 1er mars 2026</p>
        </div>
      </section>
      <section style={{ padding: '60px 64px 100px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <Art n={1} title="Objet">
            <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Society, éditée par Difero Fundry SARL. En accédant à Society, l'utilisateur accepte sans réserve les présentes CGU.</p>
          </Art>

          <Art n={2} title="Accès au service">
            <p>L'accès à Society est ouvert à toute personne physique majeure ou à toute personne morale légalement constituée. L'utilisateur s'engage à fournir des informations exactes lors de son inscription.</p>
            <p style={{ marginTop: 12 }}>Society se réserve le droit de refuser ou de suspendre l'accès à tout utilisateur qui ne respecterait pas les présentes CGU ou dont le comportement serait préjudiciable au bon fonctionnement de la plateforme.</p>
          </Art>

          <Art n={3} title="Comptes et responsabilités">
            <p>Chaque communauté dispose d'un compte géré par un ou plusieurs administrateurs. Le fondateur de la communauté est seul responsable des données saisies, des actions effectuées depuis son compte et de la conformité de son usage avec les lois applicables.</p>
            <p style={{ marginTop: 12 }}>Les identifiants de connexion sont strictement confidentiels. Society ne pourra être tenu responsable des dommages causés par l'utilisation non autorisée d'un compte.</p>
          </Art>

          <Art n={4} title="Utilisation acceptable">
            <p>Il est strictement interdit d'utiliser Society pour :</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 12 }}>
              <li>Des activités illégales, frauduleuses ou contraires à l'ordre public</li>
              <li>La diffusion de contenus à caractère haineux, discriminatoire ou diffamatoire</li>
              <li>Le spam, le harcèlement ou toute forme de sollicitation non désirée</li>
              <li>La collecte de données personnelles sans consentement explicite</li>
              <li>Toute activité portant atteinte aux droits de tiers</li>
            </ul>
          </Art>

          <Art n={5} title="Propriété intellectuelle">
            <p>La plateforme Society, son code source, ses interfaces, ses marques et logos sont la propriété exclusive de Difero Fundry SARL. Toute reproduction non autorisée est interdite.</p>
            <p style={{ marginTop: 12 }}>Le contenu créé par les utilisateurs (descriptions, publications, médias) reste leur propriété. En le publiant sur Society, l'utilisateur accorde à Difero Fundry une licence non exclusive d'utilisation à des fins de fonctionnement du service.</p>
          </Art>

          <Art n={6} title="Paiements et remboursements">
            <p>Les tarifs applicables sont ceux affichés sur la page Tarifs au moment de la souscription. Society se réserve le droit de modifier ses tarifs avec un préavis de 30 jours.</p>
            <p style={{ marginTop: 12 }}>En cas d'insatisfaction, un remboursement intégral peut être demandé dans les 14 jours suivant la souscription, sans justification.</p>
          </Art>

          <Art n={7} title="Résiliation">
            <p>L'utilisateur peut résilier son compte à tout moment depuis les paramètres de son tableau de bord. Les données seront conservées 30 jours puis supprimées définitivement.</p>
            <p style={{ marginTop: 12 }}>Society peut résilier un compte sans préavis en cas de violation grave des présentes CGU.</p>
          </Art>

          <Art n={8} title="Limitation de responsabilité">
            <p>Society est fourni "en l'état". Difero Fundry ne peut être tenu responsable des dommages indirects, pertes de données ou interruptions de service au-delà du montant des sommes versées au cours des 12 derniers mois.</p>
          </Art>

          <Art n={9} title="Droit applicable et juridiction compétente">
            <p>Les présentes CGU sont régies par le droit ivoirien. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux d'Abidjan, Côte d'Ivoire.</p>
          </Art>
        </div>
      </section>
      <Footer />
    </div>
  )
}

import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 24, borderBottom: '2px solid #E5E5E5', paddingBottom: 12, marginBottom: 20 }}>{title}</h2>
      <div style={{ fontSize: 16, lineHeight: 1.8, color: '#3A3A3A' }}>{children}</div>
    </div>
  )
}

export default function MentionsLegales() {
  return (
    <div className="page">
      <Nav />
      <section style={{ padding: '100px 64px 48px' }}>
        <div className="container">
          <span className="eyebrow">Légal</span>
          <h1 style={{ fontSize: 64, marginTop: 20 }}>Mentions légales</h1>
          <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 16 }}>Dernière mise à jour : 1er janvier 2026</p>
        </div>
      </section>
      <section style={{ padding: '0 64px 100px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <Section title="Éditeur du site">
            <p><strong>Raison sociale :</strong> Difero Fundry SARL</p>
            <p><strong>Siège social :</strong> Immeuble CCIG, 2ème étage, Avenue Franchet d'Esperey, Plateau, Abidjan, Côte d'Ivoire</p>
            <p><strong>RCCM :</strong> CI-ABJ-2025-B-12345</p>
            <p><strong>Capital social :</strong> 10 000 000 FCFA</p>
            <p><strong>Directeur de la publication :</strong> Ange-Samuel KEKE</p>
            <p><strong>Contact :</strong> legal@society.ci</p>
          </Section>
          <Section title="Hébergement">
            <p><strong>Hébergeur principal :</strong> Africa Data Centers (ADC), Johannesburg, Afrique du Sud</p>
            <p><strong>Hébergeur secondaire :</strong> Raxio Data Centre, Kampala, Ouganda</p>
            <p>Conformément à notre politique de souveraineté des données, l'ensemble des données utilisateurs est hébergé sur le continent africain.</p>
          </Section>
          <Section title="Propriété intellectuelle">
            <p>L'ensemble du contenu de ce site — textes, images, graphismes, logos, icônes, sons — est la propriété exclusive de Difero Fundry SARL ou de ses partenaires et est protégé par les lois ivoiriennes et internationales relatives à la propriété intellectuelle.</p>
            <p style={{ marginTop: 12 }}>Toute reproduction, représentation, modification ou exploitation non autorisée de tout ou partie des éléments du site est strictement interdite et constitue une contrefaçon sanctionnée par les articles 29 et suivants de la Loi n°2013-865 du 23 décembre 2013 relative à la lutte contre la cybercriminalité en Côte d'Ivoire.</p>
          </Section>
          <Section title="Responsabilité">
            <p>Difero Fundry s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, la société ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Difero Fundry décline toute responsabilité pour les imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.</p>
          </Section>
          <Section title="Droit applicable">
            <p>Le présent site et les présentes mentions légales sont soumis au droit ivoirien. En cas de litige, les tribunaux d'Abidjan seront seuls compétents.</p>
          </Section>
          <Section title="Contact">
            <p>Pour toute question relative aux présentes mentions légales, contactez-nous à : <strong>legal@society.ci</strong></p>
          </Section>
        </div>
      </section>
      <Footer />
    </div>
  )
}

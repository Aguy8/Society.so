import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

export default function APropos() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 64px' }}>
        <div className="container">
          <span className="eyebrow">À propos</span>
          <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9, maxWidth: 1000 }}>
            Nous bâtissons<br />
            <span style={{ color: '#0E47AB' }}>l'infrastructure</span><br />
            de l'économie<br />communautaire africaine.
          </h1>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section style={{ padding: '64px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ padding: 48, background: 'white', borderRadius: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#0E47AB' }}>● MISSION</div>
              <h2 style={{ fontSize: 40, marginTop: 16, lineHeight: 1.05 }}>Donner aux communautés africaines les outils d'une plateforme professionnelle.</h2>
              <p style={{ fontSize: 16, marginTop: 20 }}>Pour gérer leurs membres, organiser des événements, lever des fonds et créer une économie autour de leur projet commun.</p>
            </div>
            <div style={{ padding: 48, background: '#0a0a0a', color: 'white', borderRadius: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#D4A75B' }}>● VISION</div>
              <h2 style={{ fontSize: 40, marginTop: 16, lineHeight: 1.05, color: 'white' }}>Devenir le « Circle » africain — ancré dans nos réalités locales.</h2>
              <p style={{ fontSize: 16, marginTop: 20, color: 'rgba(255,255,255,0.85)' }}>Mobile Money, langues locales, culture de la solidarité. Bâtir l'infrastructure numérique de l'économie communautaire africaine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Notre histoire</span>
              <h2 style={{ fontSize: 56, marginTop: 24 }}>D'un constat<br />à une plateforme.</h2>
            </div>
            <div style={{ display: 'grid', gap: 24 }}>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: '#0a0a0a' }}>Society est née d'une frustration que partagent des dizaines de milliers de leaders communautaires africains : <b>il n'existe aucun outil digne de ce nom pour gérer une communauté.</b></p>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>WhatsApp pour communiquer. Excel pour les cotisations. Google Forms pour les inscriptions. Facebook pour la visibilité. Et toujours rien à montrer aux bailleurs au moment du rapport annuel.</p>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>En 2025, l'équipe Difero Fundry, basée à Abidjan, a démarré une enquête de validation auprès de 25 leaders. Le constat était unanime — et le vide à combler, immense.</p>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Society est notre réponse : <b>une plateforme conçue en Afrique, pour l'Afrique</b> — qui parle nos langues, accepte nos paiements, comprend nos rythmes communautaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section style={{ padding: '80px 64px', background: '#0E47AB', color: 'white' }}>
        <div className="container">
          <span className="eyebrow white">En chiffres</span>
          <h2 style={{ fontSize: 56, marginTop: 24, color: 'white' }}>Une opportunité immense. Un moment décisif.</h2>
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { n: '150 000+', t: 'Communautés en CI', d: 'Associations, mutuelles, réseaux, groupes religieux — un marché inexploité.' },
              { n: '85 %', t: 'Sans outil adapté', d: 'La quasi-totalité gère encore avec WhatsApp et Excel.' },
              { n: '5–10h', t: 'Perdues/semaine', d: 'Chaque leader communautaire perd ce temps en administration manuelle.' },
              { n: '1', t: 'Plateforme dédiée', d: 'Society — conçue en Afrique, pour les réalités africaines.' },
            ].map((m, i) => (
              <div key={i} style={{ position: 'relative', padding: '32px 0' }}>
                <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', color: '#D4A75B', lineHeight: 1 }}>{m.n}</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 12, color: 'white' }}>{m.t}</div>
                <p style={{ fontSize: 14, marginTop: 8, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">Équipe</span>
              <h2 style={{ fontSize: 56, marginTop: 20 }}>Difero Fundry.</h2>
              <p style={{ fontSize: 17, marginTop: 12, maxWidth: 560 }}>Un studio basé à Abidjan, qui conçoit des outils digitaux pour les communautés africaines.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { n: 'Ange-Samuel KEKE', r: 'Co-fondateur · CEO', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
              { n: 'Aïssatou D.', r: 'Head of Product', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80' },
              { n: 'Mamadou T.', r: 'Lead Engineering', img: 'https://images.unsplash.com/photo-1578021046678-7fc9dcc0d07b?auto=format&fit=crop&w=800&q=80' },
              { n: 'Salimata B.', r: 'Community & Growth', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden' }}>
                  <img src={`./assets/${m.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={m.n} />
                </div>
                <div style={{ marginTop: 16, fontWeight: 700, fontSize: 17 }}>{m.n}</div>
                <div style={{ fontSize: 14, color: '#6B6B6B' }}>{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ padding: '120px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Nos valeurs</span>
          <h2 style={{ fontSize: 56, marginTop: 24, maxWidth: 700 }}>Trois principes<br />qui guident chaque ligne de code.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
            {[
              { n: '01', t: 'Souveraineté communautaire', d: "Vos données vous appartiennent. Aucun algorithme n'altère vos relations. Vous êtes propriétaire de votre communauté." },
              { n: '02', t: 'Adaptation locale', d: 'Pensé pour le mobile, pour le Mobile Money, pour les langues locales, pour les usages réels — pas pour Silicon Valley.' },
              { n: '03', t: 'Impact mesurable', d: 'Chaque action de votre communauté laisse une trace. Bénéficiaires, fonds, projets — tout est documenté, automatiquement.' },
            ].map((v, i) => (
              <div key={i} style={{ padding: 40, background: 'white', borderRadius: 24 }}>
                <div style={{ fontSize: 72, fontWeight: 800, color: '#E8EFFC', letterSpacing: '-0.04em', lineHeight: 1 }}>{v.n}</div>
                <h3 style={{ fontSize: 22, marginTop: 12 }}>{v.t}</h3>
                <p style={{ fontSize: 15, marginTop: 12, lineHeight: 1.6 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

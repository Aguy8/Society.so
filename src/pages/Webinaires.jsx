import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const UPCOMING = [
  { date: 'Prochainement', h: '18h00 GMT', t: 'Gérer sa trésorerie communautaire avec Society', desc: 'Comment automatiser les cotisations, relances et reporting en moins d\'une heure par mois.', speaker: 'Équipe Society', cat: 'Finances', color: '#D4A75B', bg: '#F6EDD8' },
  { date: 'Prochainement', h: '17h30 GMT', t: 'Convaincre un bailleur institutionnel : le rapport d\'impact parfait', desc: 'Structure, indicateurs, mise en forme — ce que les bailleurs regardent vraiment.', speaker: 'Équipe Society', cat: 'Impact', color: '#166534', bg: '#DCFCE7' },
  { date: 'Prochainement', h: '19h00 GMT', t: 'Monétiser sa communauté sans la perdre', desc: 'Les modèles qui fonctionnent en Afrique : abonnements, cagnottes, billetterie, premium.', speaker: 'Équipe Society', cat: 'Monétisation', color: '#5C2E91', bg: '#F3F0FF' },
]

const PAST = [
  { t: 'Lancer une mutuelle avec Society — de A à Z', views: '2 840', cat: 'Mutuelles' },
  { t: 'Construire son réseau alumni en 90 jours', views: '1 920', cat: 'Alumni' },
  { t: 'Mobile Money pour les associations : tout ce qu\'il faut savoir', views: '3 100', cat: 'Paiements' },
  { t: 'ONG & bailleurs : comment prouver son impact avec Society', views: '2 200', cat: 'ONG' },
]

export default function Webinaires() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a' }}>
        <div className="container">
          <span className="eyebrow dark">Webinaires gratuits</span>
          <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Formez-vous.<br />
            <span style={{ color: '#D4A75B' }}>Gratuitement.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 620, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Chaque mois, des sessions live pour aider les leaders communautaires africains à maîtriser Society et développer leurs communautés.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
            {[['Gratuit', '100 % des sessions'], ['Live', 'Interaction directe'], ['Replay', 'Sessions enregistrées'], ['Francophone', 'Support local']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#D4A75B' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <span className="eyebrow">Prochaines sessions</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Inscrivez-vous.</h2>
          </Reveal>
          <div style={{ display: 'grid', gap: 24 }}>
            {UPCOMING.map((w, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ padding: 36, background: 'white', borderRadius: 28, border: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ padding: '16px 20px', background: w.bg, borderRadius: 16, textAlign: 'center', minWidth: 120, flexShrink: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: w.color }}>{w.cat.toUpperCase()}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#0a0a0a', marginTop: 8 }}>{w.date}</div>
                      <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>{w.h}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ padding: '3px 10px', background: w.bg, color: w.color, borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{w.cat}</span>
                      <h3 style={{ fontSize: 22, marginTop: 10, lineHeight: 1.2 }}>{w.t}</h3>
                      <p style={{ fontSize: 14, color: '#3A3A3A', marginTop: 8, lineHeight: 1.6 }}>{w.desc}</p>
                      <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 10 }}>Animé par <strong style={{ color: '#0a0a0a' }}>{w.speaker}</strong></div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
                    <button className="btn btn-primary" style={{ justifyContent: 'center' }}>
                      Je m'inscris <Icon name="arrow" size={14} color="white" />
                    </button>
                    <button className="btn btn-outline" style={{ justifyContent: 'center', fontSize: 13 }}>
                      Recevoir un rappel
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <span className="eyebrow">Replays disponibles</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Sessions passées.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {PAST.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-lift" style={{ padding: 28, background: 'white', borderRadius: 20, border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: '#0E47AB', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon name="play" size={22} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{p.t}</div>
                    <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 4 }}>{p.views} vues · {p.cat}</div>
                  </div>
                  <Icon name="arrow" size={16} color="#6B6B6B" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

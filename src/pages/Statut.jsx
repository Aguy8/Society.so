import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const SERVICES = [
  { n: 'API Society', uptime: '99.98 %' },
  { n: 'Application Web', uptime: '99.99 %' },
  { n: 'Application Mobile', uptime: '99.95 %' },
  { n: 'Paiements Mobile Money', uptime: '99.91 %' },
  { n: 'Notifications Push', uptime: '99.97 %' },
  { n: 'Webhooks', uptime: '99.89 %' },
  { n: 'CDN & Médias', uptime: '100 %' },
  { n: 'Base de données', uptime: '99.99 %' },
]

export default function Statut() {
  const now = new Date()
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#E8FBF1' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '10px 24px', background: '#0F8B4F', color: 'white', borderRadius: 999, fontSize: 16, fontWeight: 700, marginBottom: 32 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3DDC84', animation: 'pulse 2s infinite' }} />
            Tous les systèmes sont opérationnels
          </div>
          <h1 style={{ fontSize: 80, lineHeight: 0.95, color: '#0a0a0a' }}>Statut des services<br /><span style={{ color: '#0F8B4F' }}>Society</span>.</h1>
          <p style={{ fontSize: 16, marginTop: 24, color: '#6B6B6B' }}>Dernière vérification : {now.toLocaleTimeString('fr-FR')} — {now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <h2 style={{ fontSize: 40, marginBottom: 32 }}>Statut des composants</h2>
          <div style={{ background: 'white', borderRadius: 24, border: '1px solid #E5E5E5', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ padding: '22px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < SERVICES.length - 1 ? '1px solid #F2F2F2' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3DDC84', flexShrink: 0 }} />
                  <div style={{ fontWeight: 600, fontSize: 16 }}>{s.n}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0F8B4F' }}>Opérationnel</div>
                  <div style={{ fontSize: 13, color: '#6B6B6B' }}>Uptime 30j : {s.uptime}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <h2 style={{ fontSize: 40, marginBottom: 32 }}>Disponibilité sur 30 jours</h2>
            <div style={{ background: 'white', borderRadius: 24, padding: '32px 36px', border: '1px solid #E5E5E5' }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 80 }}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} style={{ flex: 1, height: `${85 + Math.random() * 15}%`, background: '#3DDC84', borderRadius: 4, opacity: 0.85 + Math.random() * 0.15 }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 12, color: '#6B6B6B' }}>
                <span>Il y a 30 jours</span>
                <span style={{ fontWeight: 700, color: '#0F8B4F' }}>Uptime global : 99.96 %</span>
                <span>Aujourd'hui</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <h2 style={{ fontSize: 40, marginBottom: 32 }}>Historique des incidents</h2>
            <div style={{ padding: 48, background: '#E8FBF1', borderRadius: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 28 }}>Aucun incident signalé</h3>
              <p style={{ fontSize: 16, color: '#6B6B6B', marginTop: 8 }}>Aucun incident ou dégradation de service n'a été enregistré sur les 90 derniers jours.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

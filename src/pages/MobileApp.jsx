import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { NavLink } from 'react-router-dom'

export default function MobileApp() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px', background: '#0E47AB', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#D4A75B', opacity: 0.15, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow white">Application mobile</span>
              <h1 style={{ fontSize: 80, marginTop: 24, lineHeight: 0.9, color: 'white' }}>Society<br />dans votre<br /><span style={{ color: '#D4A75B' }}>poche</span>.</h1>
              <p style={{ fontSize: 18, marginTop: 32, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: 480 }}>
                Gérez votre communauté depuis votre téléphone. Mobile-first, pensé pour l'Afrique, disponible hors-ligne partiel.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'white', color: '#0a0a0a', borderRadius: 14, cursor: 'pointer' }}>
                  <div style={{ fontSize: 28 }}>🍎</div>
                  <div>
                    <div style={{ fontSize: 10, color: '#6B6B6B', fontWeight: 600 }}>Télécharger sur l'</div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>App Store</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, cursor: 'pointer' }}>
                  <div style={{ fontSize: 28 }}>🤖</div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Disponible sur</div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>Google Play</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 32, padding: 20, background: 'rgba(255,255,255,0.1)', borderRadius: 16, display: 'inline-block' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Lancement Q4 2026 · Rejoignez la liste d'attente</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input type="email" placeholder="votre@email.com" style={{ flex: 1, padding: '10px 14px', border: 'none', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
                  <button style={{ padding: '10px 16px', background: '#D4A75B', color: '#0a0a0a', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Notifier</button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'flex-end' }}>
              {[
                { bg: '#1a4fc2', label: 'Tableau de bord', h: 500 },
                { bg: '#0a3a9e', label: 'Membres', h: 560 },
                { bg: '#1a4fc2', label: 'Paiements', h: 480 },
              ].map((p, i) => (
                <div key={i} style={{ width: 140, height: p.h, background: p.bg, borderRadius: 28, border: '4px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Fonctionnalités mobiles</span>
            <h2 style={{ fontSize: 56, marginTop: 24 }}>Tout Society, <span style={{ color: '#0E47AB' }}>optimisé mobile</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { e: '📱', t: 'Interface native', d: 'Conçu pour iOS et Android. Gestures naturelles, animations fluides, performance optimale même sur entrée de gamme.' },
              { e: '🔌', t: 'Hors-ligne partiel', d: 'Consultez vos membres, validez des présences et accédez aux données clés même sans connexion. Synchronisation à la reconnexion.' },
              { e: '🔔', t: 'Notifications push', d: 'Nouvelle cotisation, membre qui rejoint, message important. Restez informé en temps réel sans ouvrir l\'app.' },
              { e: '📸', t: 'Scanner QR', d: 'Scan de billets d\'événements, validation de présences, partage de profil membre. Le QR code intégré à l\'app.' },
              { e: '💰', t: 'Paiement en 2 taps', d: 'Orange Money, Wave, MTN MoMo. Payez ou collectez en 2 taps. Confirmation instantanée, reçu automatique.' },
              { e: '🌍', t: 'Multi-langues', d: 'Français, Anglais, Dioula, Mooré. Sélectionnez la langue préférée de vos membres pour une adoption maximale.' },
            ].map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', background: '#F8F8F8', borderRadius: 24 }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>{f.e}</div>
                <h3 style={{ fontSize: 22 }}>{f.t}</h3>
                <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 10, lineHeight: 1.6 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56 }}>Disponible en Q4 2026.</h2>
          <p style={{ fontSize: 18, marginTop: 16, color: '#6B6B6B', maxWidth: 500, margin: '16px auto 0' }}>
            L'application est en développement. Rejoignez la bêta fermée pour en être parmi les premiers utilisateurs.
          </p>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>Rejoindre la bêta</NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}

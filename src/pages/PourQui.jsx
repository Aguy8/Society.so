import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import { SEGMENTS } from '../data/segments.js'

export default function PourQui() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 64px' }}>
        <div className="container">
          <span className="eyebrow">Pour qui ?</span>
          <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9 }}>
            Sept segments.<br />
            <span style={{ color: '#0E47AB' }}>Une promesse</span>.
          </h1>
          <p style={{ fontSize: 20, marginTop: 32, maxWidth: 700, lineHeight: 1.5 }}>
            Society s'adresse à toutes les communautés qui veulent passer du WhatsApp informel à une vraie infrastructure numérique.
          </p>
        </div>
      </section>

      {SEGMENTS.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <section key={s.slug} style={{ padding: '80px 64px', background: i % 2 === 0 ? 'white' : '#F8F8F8' }}>
            <div className="container">
              <div className="two-col-grid">
                <div style={{ order: reverse ? 2 : 1, borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                  <img src={`/assets/${s.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.nom} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 50%, ${s.color}cc 100%)` }} />
                  <div style={{ position: 'absolute', top: 24, left: 24, padding: '8px 16px', background: 'rgba(255,255,255,0.95)', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>
                    Segment {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ position: 'absolute', top: 24, right: 24, padding: '6px 12px', background: s.color, color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                    {s.count} en CI
                  </div>
                  <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, color: 'white' }}>
                    <div style={{ fontSize: 13, opacity: 0.9, fontWeight: 500, fontStyle: 'italic' }}>Exemples : {s.ex}</div>
                  </div>
                </div>
                <div style={{ order: reverse ? 1 : 2 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>{s.tagline}</div>
                  <h2 style={{ fontSize: 56 }}>{s.nom}.</h2>
                  <div style={{ marginTop: 28, padding: 24, background: '#FFE9E9', borderRadius: 16, borderLeft: '4px solid #C23B5A' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#C23B5A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Le problème</div>
                    <p style={{ marginTop: 8, fontSize: 16, color: '#0a0a0a', fontWeight: 500 }}>{s.pb}</p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Ce que Society apporte</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {s.sol.map((sol, j) => (
                        <div key={j} style={{ padding: '14px 18px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 22, height: 22, borderRadius: '50%', background: s.color, color: 'white', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</div>
                          <span style={{ fontSize: 14, fontWeight: 600 }}>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                    <NavLink to={`/pour-qui/${s.slug}`} className="btn btn-outline" style={{ display: 'inline-flex' }}>
                      Voir le détail <Icon name="arrow" size={14} />
                    </NavLink>
                    <NavLink to="/inscription" className="btn btn-dark" style={{ display: 'inline-flex' }}>
                      Inscrire ma communauté <Icon name="arrow" size={14} color="white" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section style={{ padding: '120px 64px', background: '#0E47AB', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 72, color: 'white' }}>Prêt à donner une voix<br />à votre communauté ?</h2>
          <p style={{ fontSize: 20, marginTop: 24, color: 'rgba(255,255,255,0.85)' }}>Inscrivez votre communauté en moins de 5 minutes. Accès gratuit pendant la phase bêta.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">Inscrire ma communauté</NavLink>
            <NavLink to="/tarifs" className="btn btn-outline-white btn-xl">Voir les tarifs</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

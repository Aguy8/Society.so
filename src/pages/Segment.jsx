import { useParams, NavLink, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import { SEGMENT_BY_SLUG, SEGMENTS } from '../data/segments.js'

export default function Segment() {
  const { slug } = useParams()
  const s = SEGMENT_BY_SLUG[slug]

  if (!s) return <Navigate to="/pour-qui" replace />

  const idx = SEGMENTS.findIndex(x => x.slug === slug)
  const prev = SEGMENTS[idx - 1]
  const next = SEGMENTS[idx + 1]

  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 600, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '0 64px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(/assets/${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>
            ← Tous les segments
          </NavLink>
          <div style={{ display: 'inline-block', padding: '6px 14px', background: s.color, color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
            {s.count} en Côte d'Ivoire
          </div>
          <h1 style={{ fontSize: 100, lineHeight: 0.9, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
          <p style={{ fontSize: 24, color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontStyle: 'italic' }}>{s.tagline}</p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '80px 64px', background: s.color }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {s.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 8 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLÈME DÉTAILLÉ */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Le problème</span>
              <h2 style={{ fontSize: 56, marginTop: 24 }}>Pourquoi ça ne fonctionne pas aujourd'hui.</h2>
              <p style={{ fontSize: 18, marginTop: 24, color: '#3A3A3A', lineHeight: 1.6 }}>{s.pb}</p>
              <div style={{ marginTop: 40, display: 'grid', gap: 12 }}>
                {s.pbDetail.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 24px', background: '#FFF5F5', borderRadius: 16, borderLeft: '4px solid #C23B5A', alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FEE2E2', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✕</div>
                    <p style={{ fontSize: 15, color: '#0a0a0a', margin: 0, lineHeight: 1.5 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">La solution Society</span>
              <h2 style={{ fontSize: 56, marginTop: 24, color: s.color }}>Ce que Society change.</h2>
              <div style={{ marginTop: 40, display: 'grid', gap: 12 }}>
                {s.sol.map((sol, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 24px', background: 'white', border: '1.5px solid #E5E5E5', borderRadius: 16, alignItems: 'center' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: s.color, color: 'white', display: 'grid', placeItems: 'center', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Modules recommandés</span>
            <h2 style={{ marginTop: 24, fontSize: 56 }}>Les modules clés pour <span style={{ color: s.color }}>{s.nom}</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {s.modules.map((mod, i) => {
              const icons = { 'Gestion communautaire': 'users', 'Monétisation': 'shield', 'Mise en relation': 'spark', 'Visibilité & Impact': 'globe', 'Espace Leader': 'star' }
              return (
                <div key={i} style={{ padding: 32, background: 'white', borderRadius: 24, border: `2px solid ${s.color}22`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color, display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                    <Icon name={icons[mod] || 'check'} size={22} color="white" />
                  </div>
                  <h3 style={{ fontSize: 22, lineHeight: 1.2 }}>{mod}</h3>
                  <NavLink to="/fonctionnalites" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 13, fontWeight: 600, color: s.color, textDecoration: 'none' }}>
                    Découvrir <Icon name="arrow" size={12} color={s.color} />
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '120px 64px', background: s.color }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}>
              <img src={`/assets/${s.temoignage.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.temoignage.auteur} />
            </div>
            <div>
              <div style={{ fontSize: 80, color: 'rgba(255,255,255,0.3)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -20 }}>"</div>
              <blockquote style={{ margin: 0, fontSize: 28, fontWeight: 600, lineHeight: 1.3, color: 'white' }}>
                {s.temoignage.texte}
              </blockquote>
              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: 'white' }}>{s.temoignage.auteur}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginTop: 4 }}>{s.temoignage.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section style={{ padding: '80px 64px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Plan recommandé</span>
            <h2 style={{ fontSize: 56, marginTop: 24 }}>Le plan <span style={{ color: s.color }}>{s.plan_recommande}</span> est fait pour vous.</h2>
            <p style={{ fontSize: 18, marginTop: 20, color: '#3A3A3A', lineHeight: 1.6 }}>
              Basé sur les besoins spécifiques des {s.nom.toLowerCase()}, notre équipe recommande le plan {s.plan_recommande} pour démarrer dans les meilleures conditions.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl">
                Démarrer gratuitement <Icon name="arrow" size={16} color="white" />
              </NavLink>
              <NavLink to="/tarifs" className="btn btn-outline btn-xl">
                Voir tous les plans
              </NavLink>
            </div>
          </div>
          <div style={{ padding: 40, background: s.color, borderRadius: 32, color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Plan recommandé</div>
            <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: '-0.04em', marginTop: 16 }}>{s.plan_recommande}</div>
            <div style={{ fontSize: 15, opacity: 0.85, marginTop: 8 }}>Idéal pour {s.nom}</div>
            <div style={{ marginTop: 28, padding: 20, background: 'rgba(255,255,255,0.1)', borderRadius: 16 }}>
              <div style={{ fontSize: 13, opacity: 0.8 }}>Accès gratuit en phase bêta · Sans carte bancaire</div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION ENTRE SEGMENTS */}
      <section style={{ padding: '40px 64px 80px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            {prev ? (
              <NavLink to={`/pour-qui/${prev.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <span style={{ fontSize: 18 }}>←</span>
                <div>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Segment précédent</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{prev.nom}</div>
                </div>
              </NavLink>
            ) : <div />}
            <NavLink to="/pour-qui" style={{ fontSize: 14, fontWeight: 600, color: '#6B6B6B', textDecoration: 'none' }}>Voir tous les segments</NavLink>
            {next ? (
              <NavLink to={`/pour-qui/${next.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Segment suivant</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{next.nom}</div>
                </div>
                <span style={{ fontSize: 18 }}>→</span>
              </NavLink>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

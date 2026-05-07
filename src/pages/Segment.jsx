import { useParams, NavLink, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import { SEGMENT_BY_SLUG, SEGMENTS } from '../data/segments.js'

const MODULE_ICONS = {
  'Gestion communautaire': 'users',
  'Monétisation': 'shield',
  'Mise en relation': 'spark',
  'Visibilité & Impact': 'globe',
  'Espace Leader': 'star',
}

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

      {/* HERO — immersif plein écran */}
      <section style={{ position: 'relative', minHeight: 680, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 64px 72px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>
            ← Tous les segments
          </NavLink>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: s.color, color: s.color === '#D4A75B' ? '#0a0a0a' : 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
                {s.count} en Côte d'Ivoire
              </div>
              <h1 style={{ fontSize: 96, lineHeight: 0.88, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
              <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', lineHeight: 1.45, maxWidth: 580 }}>{s.tagline}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, paddingBottom: 4, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-gold btn-lg">Démarrer gratuitement</NavLink>
              <NavLink to="/tarifs" className="btn btn-outline-white btn-lg">Voir les plans</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {s.stats.map((stat, i) => (
            <div key={i} style={{ padding: '40px 28px', background: i % 2 === 0 ? s.color : '#0a0a0a', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8, lineHeight: 1.4 }}>{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Diagnostic</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Ce que Society change<br />pour <span style={{ color: s.color }}>{s.nom}</span>.</h2>
          </div>
          <div className="two-col-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: '#FEE2E2', display: 'grid', placeItems: 'center' }}>
                  <span style={{ fontSize: 20 }}>✕</span>
                </div>
                <span className="eyebrow" style={{ color: '#C23B5A' }}>Le problème</span>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {s.pbDetail.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '18px 22px', background: '#FFF5F5', borderRadius: 14, borderLeft: '4px solid #C23B5A', alignItems: 'flex-start' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FEE2E2', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>✕</div>
                    <p style={{ fontSize: 15, color: '#0a0a0a', margin: 0, lineHeight: 1.55 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: s.color, display: 'grid', placeItems: 'center' }}>
                  <span style={{ fontSize: 20, color: 'white' }}>✓</span>
                </div>
                <span className="eyebrow" style={{ color: s.color }}>La solution Society</span>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {s.sol.map((sol, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '18px 22px', background: 'white', border: `1.5px solid ${s.color}22`, borderRadius: 14, alignItems: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: s.color, color: 'white', display: 'grid', placeItems: 'center', fontSize: 16, fontWeight: 800, flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ padding: '80px 64px 100px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Modules recommandés</span>
            <h2 style={{ marginTop: 24, fontSize: 52 }}>Les outils clés pour <span style={{ color: s.color }}>{s.nom}</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {s.modules.map((mod, i) => (
              <div key={i} style={{ padding: 32, background: 'white', borderRadius: 24, border: `2px solid ${s.color}18`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `${s.color}0d` }} />
                <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color, display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                  <Icon name={MODULE_ICONS[mod] || 'check'} size={22} color="white" />
                </div>
                <h3 style={{ fontSize: 18, lineHeight: 1.25 }}>{mod}</h3>
                <NavLink to="/fonctionnalites" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 13, fontWeight: 600, color: s.color, textDecoration: 'none' }}>
                  Découvrir <Icon name="arrow" size={12} color={s.color} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '100px 64px', background: s.color }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'center', gap: 64 }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 32px 64px rgba(0,0,0,0.25)' }}>
              <img src={`${s.temoignage.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.temoignage.auteur} />
            </div>
            <div>
              <div style={{ fontSize: 96, color: 'rgba(255,255,255,0.2)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -24 }}>"</div>
              <blockquote style={{ margin: 0, fontSize: 26, fontWeight: 600, lineHeight: 1.35, color: 'white' }}>
                {s.temoignage.texte}
              </blockquote>
              <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: 'white' }}>{s.temoignage.auteur}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginTop: 4 }}>{s.temoignage.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PLAN */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Plan recommandé</span>
              <h2 style={{ fontSize: 52, marginTop: 24 }}>Le plan <span style={{ color: s.color }}>{s.plan_recommande}</span> est fait pour vous.</h2>
              <p style={{ fontSize: 17, marginTop: 20, color: '#3A3A3A', lineHeight: 1.65 }}>
                Basé sur les besoins spécifiques des {s.nom.toLowerCase()}, le plan {s.plan_recommande} vous donne accès à tous les outils essentiels pour structurer et faire grandir votre communauté.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <NavLink to="/inscription" className="btn btn-primary btn-xl">
                  Démarrer gratuitement
                  <Icon name="arrow" size={16} color="white" />
                </NavLink>
                <NavLink to="/tarifs" className="btn btn-outline btn-xl">Voir tous les plans</NavLink>
              </div>
            </div>
            <div style={{ padding: 52, background: s.color, borderRadius: 32, color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em', position: 'relative' }}>Plan recommandé</div>
              <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: '-0.04em', marginTop: 12, position: 'relative' }}>{s.plan_recommande}</div>
              <div style={{ fontSize: 15, opacity: 0.85, marginTop: 8, position: 'relative' }}>Idéal pour {s.nom}</div>
              <div style={{ marginTop: 32, padding: '16px 20px', background: 'rgba(255,255,255,0.12)', borderRadius: 16, position: 'relative' }}>
                <div style={{ fontSize: 13, opacity: 0.9 }}>Accès gratuit · Phase bêta · Sans carte bancaire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION PRÉCÉDENT / SUIVANT */}
      <section style={{ padding: '40px 64px 80px', borderTop: '1px solid #E5E5E5' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            {prev ? (
              <NavLink to={`/pour-qui/${prev.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <span>←</span>
                <div>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Précédent</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{prev.nom}</div>
                </div>
              </NavLink>
            ) : <div />}
            <NavLink to="/pour-qui" style={{ fontSize: 14, fontWeight: 600, color: '#6B6B6B', textDecoration: 'none' }}>Tous les segments</NavLink>
            {next ? (
              <NavLink to={`/pour-qui/${next.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Suivant</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{next.nom}</div>
                </div>
                <span>→</span>
              </NavLink>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

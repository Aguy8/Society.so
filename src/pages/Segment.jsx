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

function StatBar({ stats, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#E5E5E5' }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ padding: '32px 24px', background: i % 2 === 0 ? color : '#0a0a0a', textAlign: 'center' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>{stat.l}</div>
        </div>
      ))}
    </div>
  )
}

function PbSolutionSplit({ s }) {
  return (
    <section style={{ padding: '100px 64px' }}>
      <div className="container">
        <div className="two-col-grid">
          <div>
            <span className="eyebrow">Le problème</span>
            <h2 style={{ fontSize: 48, marginTop: 24, lineHeight: 1.05 }}>Pourquoi ça ne fonctionne pas aujourd'hui.</h2>
            <div style={{ marginTop: 36, display: 'grid', gap: 12 }}>
              {s.pbDetail.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, padding: '18px 22px', background: '#FFF5F5', borderRadius: 14, borderLeft: `4px solid #C23B5A`, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#FEE2E2', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>✕</div>
                  <p style={{ fontSize: 15, color: '#0a0a0a', margin: 0, lineHeight: 1.55 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow" style={{ color: s.color }}>La solution</span>
            <h2 style={{ fontSize: 48, marginTop: 24, lineHeight: 1.05, color: s.color }}>Ce que Society change.</h2>
            <div style={{ marginTop: 36, display: 'grid', gap: 12 }}>
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
  )
}

/* Layout 0 — Standard (ONG) */
function LayoutStandard({ s }) {
  return (
    <>
      <section style={{ position: 'relative', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '0 64px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(/assets/${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>← Tous les segments</NavLink>
          <div style={{ display: 'inline-block', padding: '6px 16px', background: s.color, color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>{s.count} en Côte d'Ivoire</div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
          <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontStyle: 'italic', maxWidth: 600 }}>{s.tagline}</p>
        </div>
      </section>
      <StatBar stats={s.stats} color={s.color} />
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 1 — Inversé fond sombre (Mutuelles) */
function LayoutDark({ s }) {
  return (
    <>
      <section style={{ padding: '100px 64px', background: '#0a0a0a', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: s.color, opacity: 0.15, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>← Tous les segments</NavLink>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: s.color, color: s.color === '#D4A75B' ? '#0a0a0a' : 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>{s.count} en CI</div>
              <h1 style={{ fontSize: 80, lineHeight: 0.9, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
              <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, maxWidth: 480 }}>{s.tagline}</p>
              <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
                <NavLink to="/inscription" className="btn btn-gold btn-xl">Démarrer gratuitement</NavLink>
              </div>
            </div>
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
              <img src={`/assets/${s.heroImg}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.nom} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${s.color}44, transparent)` }} />
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {s.stats.map((stat, i) => (
            <div key={i} style={{ padding: '40px 32px', background: i % 2 === 0 ? '#F8F8F8' : 'white', textAlign: 'center', borderRight: '1px solid #E5E5E5' }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: s.color, letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
              <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 8, lineHeight: 1.4 }}>{stat.l}</div>
            </div>
          ))}
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 2 — Centré minimaliste (Alumni) */
function LayoutCentered({ s }) {
  return (
    <>
      <section style={{ padding: '120px 64px 80px', background: s.color, textAlign: 'center' }}>
        <div className="container">
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 40 }}>← Tous les segments</NavLink>
          <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 24 }}>{s.count} en Côte d'Ivoire</div>
          <h1 style={{ fontSize: 96, lineHeight: 0.9, color: 'white', maxWidth: 1000, margin: '0 auto 28px' }}>{s.nom}.</h1>
          <p style={{ fontSize: 24, color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontStyle: 'italic' }}>{s.tagline}</p>
          <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <NavLink to="/inscription" className="btn btn-white btn-xl">Inscrire ma communauté</NavLink>
          </div>
        </div>
      </section>
      <section style={{ padding: '0' }}>
        <div style={{ height: 320, backgroundImage: `url(/assets/${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </section>
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {s.stats.map((stat, i) => (
            <div key={i} style={{ padding: '48px 32px', background: i % 2 === 0 ? '#0a0a0a' : '#141414', textAlign: 'center' }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>{stat.l}</div>
            </div>
          ))}
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 3 — Split horizontal (Réseaux Pro) */
function LayoutSplit({ s }) {
  return (
    <>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
        <div style={{ padding: '120px 64px', background: s.color, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 'auto', paddingTop: 0 }}>← Retour</NavLink>
          <div style={{ marginTop: 'auto' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{s.count} en CI</div>
            <h1 style={{ fontSize: 72, lineHeight: 0.9, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, maxWidth: 420 }}>{s.tagline}</p>
            <NavLink to="/inscription" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 36, padding: '16px 28px', background: 'white', color: s.color, borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              Démarrer maintenant →
            </NavLink>
          </div>
        </div>
        <div style={{ backgroundImage: `url(/assets/${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
        </div>
      </section>
      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {s.stats.map((stat, i) => (
              <div key={i} style={{ padding: 28, background: 'white', borderRadius: 20, border: `2px solid ${i === 0 ? s.color : '#E5E5E5'}`, textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: i === 0 ? s.color : '#0a0a0a', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 8 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 4 — Immersif grand format (Religieux) */
function LayoutImmersive({ s }) {
  return (
    <>
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 64px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(/assets/${s.heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 48 }}>← Tous les segments</NavLink>
          <div style={{ maxWidth: 800 }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: s.color, color: s.color === '#D4A75B' ? '#0a0a0a' : 'white', borderRadius: 999, fontSize: 13, fontWeight: 700, marginBottom: 28 }}>{s.count} groupes en Côte d'Ivoire</div>
            <h1 style={{ fontSize: 96, lineHeight: 0.88, color: 'white', marginBottom: 32 }}>{s.nom}.</h1>
            <p style={{ fontSize: 28, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, fontStyle: 'italic' }}>{s.tagline}</p>
          </div>
          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {s.stats.map((stat, i) => (
              <div key={i} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 2 }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 6 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 5 — Creator/Leader style (Leaders) */
function LayoutCreator({ s }) {
  return (
    <>
      <section style={{ padding: '100px 64px', background: 'linear-gradient(135deg, #FFD9DE 0%, #E0D6FF 50%, #FFF8E5 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 40, right: 60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6B6B6B', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 48 }}>← Tous les segments</NavLink>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0,0,0,0.08)', color: '#0a0a0a', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>{s.count} créateurs en CI</div>
              <h1 style={{ fontSize: 80, lineHeight: 0.9, color: '#0a0a0a', marginBottom: 24 }}>{s.nom}.</h1>
              <p style={{ fontSize: 22, color: '#3A3A3A', lineHeight: 1.5, maxWidth: 480, fontStyle: 'italic' }}>{s.tagline}</p>
              <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
                <NavLink to="/inscription" className="btn btn-dark btn-xl">Créer mon espace</NavLink>
                <NavLink to="/tarifs" className="btn btn-outline btn-xl">Voir les plans</NavLink>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {s.stats.map((stat, i) => (
                <div key={i} style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#5C2E91', letterSpacing: '-0.04em', minWidth: 100 }}>{stat.n}</div>
                  <div style={{ fontSize: 14, color: '#3A3A3A', lineHeight: 1.4 }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

/* Layout 6 — Communauté, flexible et ouvert */
function LayoutFlex({ s }) {
  return (
    <>
      <section style={{ padding: '100px 64px', background: '#5C2E91', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(212,167,91,0.2)', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/pour-qui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 40 }}>← Tous les segments</NavLink>
          <div style={{ maxWidth: 760 }}>
            <h1 style={{ fontSize: 96, lineHeight: 0.9, color: 'white', marginBottom: 24 }}>{s.nom}.</h1>
            <p style={{ fontSize: 24, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45, fontStyle: 'italic' }}>{s.tagline}</p>
          </div>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {s.stats.map((stat, i) => (
              <div key={i} style={{ padding: '28px 20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 20, textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PbSolutionSplit s={s} />
    </>
  )
}

const LAYOUTS = [LayoutStandard, LayoutDark, LayoutCentered, LayoutSplit, LayoutImmersive, LayoutCreator, LayoutFlex]

export default function Segment() {
  const { slug } = useParams()
  const s = SEGMENT_BY_SLUG[slug]

  if (!s) return <Navigate to="/pour-qui" replace />

  const idx = SEGMENTS.findIndex(x => x.slug === slug)
  const prev = SEGMENTS[idx - 1]
  const next = SEGMENTS[idx + 1]
  const Layout = LAYOUTS[idx % LAYOUTS.length]

  return (
    <div className="page">
      <Nav />
      <Layout s={s} />

      {/* MODULES */}
      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Modules recommandés</span>
            <h2 style={{ marginTop: 24, fontSize: 56 }}>Les modules clés pour <span style={{ color: s.color }}>{s.nom}</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {s.modules.map((mod, i) => (
              <div key={i} style={{ padding: 32, background: 'white', borderRadius: 24, border: `2px solid ${s.color}22`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `${s.color}11` }} />
                <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color, display: 'grid', placeItems: 'center', marginBottom: 16, position: 'relative' }}>
                  <Icon name={MODULE_ICONS[mod] || 'check'} size={22} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2 }}>{mod}</h3>
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
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '1/1' }}>
              <img src={`/assets/${s.temoignage.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={s.temoignage.auteur} />
            </div>
            <div>
              <div style={{ fontSize: 96, color: 'rgba(255,255,255,0.25)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -24 }}>"</div>
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

      {/* PLAN + CTA */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Plan recommandé</span>
              <h2 style={{ fontSize: 56, marginTop: 24 }}>Le plan <span style={{ color: s.color }}>{s.plan_recommande}</span> est fait pour vous.</h2>
              <p style={{ fontSize: 18, marginTop: 20, color: '#3A3A3A', lineHeight: 1.6 }}>
                Basé sur les besoins spécifiques des {s.nom.toLowerCase()}, nous recommandons le plan {s.plan_recommande} pour démarrer dans les meilleures conditions.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <NavLink to="/inscription" className="btn btn-primary btn-xl">Démarrer gratuitement <Icon name="arrow" size={16} color="white" /></NavLink>
                <NavLink to="/tarifs" className="btn btn-outline btn-xl">Voir tous les plans</NavLink>
              </div>
            </div>
            <div style={{ padding: 48, background: s.color, borderRadius: 32, color: 'white', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Plan recommandé</div>
              <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: '-0.04em', marginTop: 12 }}>{s.plan_recommande}</div>
              <div style={{ fontSize: 15, opacity: 0.85, marginTop: 8 }}>Idéal pour {s.nom}</div>
              <div style={{ marginTop: 32, padding: 20, background: 'rgba(255,255,255,0.12)', borderRadius: 16 }}>
                <div style={{ fontSize: 13, opacity: 0.85 }}>Accès gratuit · Phase bêta · Sans carte bancaire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section style={{ padding: '40px 64px 80px', borderTop: '1px solid #E5E5E5' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            {prev ? (
              <NavLink to={`/pour-qui/${prev.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <span>←</span>
                <div><div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Précédent</div><div style={{ fontSize: 16, fontWeight: 700 }}>{prev.nom}</div></div>
              </NavLink>
            ) : <div />}
            <NavLink to="/pour-qui" style={{ fontSize: 14, fontWeight: 600, color: '#6B6B6B', textDecoration: 'none' }}>Tous les segments</NavLink>
            {next ? (
              <NavLink to={`/pour-qui/${next.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#F8F8F8', borderRadius: 16, textDecoration: 'none', color: '#0a0a0a' }}>
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Suivant</div><div style={{ fontSize: 16, fontWeight: 700 }}>{next.nom}</div></div>
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

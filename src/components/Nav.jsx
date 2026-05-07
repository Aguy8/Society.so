import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Pour qui ?', to: '/pour-qui' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'À propos', to: '/a-propos' },
]

export default function Nav({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [founderOpen, setFounderOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const navigate = useNavigate()

  const cls = variant === 'dark' ? 'nav dark' : variant === 'blue' ? 'nav blue' : 'nav'
  const logoColor = variant === 'blue' ? '#D4A75B' : '#0E47AB'
  const ghostColor = (variant === 'blue' || variant === 'dark') ? '#fff' : undefined

  return (
    <>
      <nav className={cls}>
        <a onClick={() => navigate('/')} className="nav-logo" style={{ cursor: 'pointer' }}>
          Society<span style={{ color: logoColor }}>.</span>
        </a>

        <div className="nav-links nav-links--desktop">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDiscoverOpen(o => !o)}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', color: variant === 'dark' || variant === 'blue' ? 'rgba(255,255,255,0.85)' : 'var(--so-ink)', padding: 0 }}>
              Découvrir
              <span style={{ fontSize: 9, transition: 'transform 0.2s', display: 'inline-block', transform: discoverOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {discoverOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 18px)', left: '50%', transform: 'translateX(-50%)', background: 'white', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid #E5E5E5', minWidth: 280, overflow: 'hidden', zIndex: 100, padding: '8px' }}>
                {[
                  { to: '/mobile-app', label: 'App mobile', desc: 'Society dans votre poche', icon: 'spark', color: '#0E47AB' },
                  { to: '/benevolat', label: 'Bénévolat', desc: 'Gérer vos volontaires', icon: 'heart', color: '#9D174D' },
                  { to: '/mise-en-relation', label: 'Mise en relation', desc: 'Connecter les communautés', icon: 'globe', color: '#166534' },
                  { to: '/etudes-de-cas', label: 'Études de cas', desc: 'Voir des exemples réels', icon: 'star', color: '#D4A75B' },
                  { to: '/blog', label: 'Blog & ressources', desc: 'Articles pour leaders', icon: 'chart', color: '#5C2E91' },
                  { to: '/centre-aide', label: 'Centre d\'aide', desc: 'Questions fréquentes', icon: 'shield', color: '#0a0a0a' },
                ].map(item => (
                  <NavLink key={item.to} to={item.to} onClick={() => setDiscoverOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', textDecoration: 'none', borderRadius: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}15`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <Icon name={item.icon} size={16} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0a0a0a' }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="nav-cta nav-cta--desktop" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setFounderOpen(o => !o)}
              className="btn btn-ghost"
              style={{ color: ghostColor, display: 'flex', alignItems: 'center', gap: 6 }}>
              Connexion
              <span style={{ fontSize: 10, transition: 'transform 0.2s', display: 'inline-block', transform: founderOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {founderOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: 'white', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid #E5E5E5', minWidth: 220, overflow: 'hidden', zIndex: 100 }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Espace membre</div>
                <button onClick={() => { setFounderOpen(false); alert('Connexion membre — disponible au lancement') }} style={{ width: '100%', padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}><Icon name="users" size={14} color="#0E47AB" /></div>
                  Se connecter
                </button>
                <div style={{ padding: '12px 16px', borderTop: '1px solid #F2F2F2', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fondateur Society</div>
                <NavLink to="/dashboard" onClick={() => setFounderOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', textDecoration: 'none', color: '#0a0a0a', fontSize: 14, fontWeight: 600 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#FFF8E5', display: 'grid', placeItems: 'center' }}><Icon name="grid" size={14} color="#D4A75B" /></div>
                  Dashboard admin
                </NavLink>
                <div style={{ padding: '10px 16px', background: '#F8F8F8', fontSize: 11, color: '#6B6B6B' }}>Réservé à l'équipe Difero Fundry</div>
              </div>
            )}
          </div>
          <NavLink to="/inscription" className={variant === 'blue' ? 'btn btn-white' : 'btn btn-dark'}>
            Inscrire ma communauté
            <Icon name="arrow" size={14} color="currentColor" />
          </NavLink>
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu" style={{ color: ghostColor || 'var(--so-ink)' }}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 12, marginBottom: 4 }}>Découvrir</div>
          <NavLink to="/mobile-app" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>App mobile</NavLink>
          <NavLink to="/benevolat" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Bénévolat</NavLink>
          <NavLink to="/mise-en-relation" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Mise en relation</NavLink>
          <NavLink to="/etudes-de-cas" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Études de cas</NavLink>
          <NavLink to="/blog" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/centre-aide" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Centre d'aide</NavLink>
          <NavLink to="/dashboard" className="nav-mobile-link" onClick={() => setMenuOpen(false)}
            style={{ color: '#D4A75B', fontWeight: 700, marginTop: 12 }}>
            Dashboard fondateur
          </NavLink>
          <NavLink to="/inscription" className="btn btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8 }}>
            Inscrire ma communauté
          </NavLink>
        </div>
      )}

      {founderOpen && (
        <div onClick={() => setFounderOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
      {discoverOpen && (
        <div onClick={() => setDiscoverOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
    </>
  )
}

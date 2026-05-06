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
                <button onClick={() => { setFounderOpen(false); alert('Connexion membre — disponible au lancement Q3 2026') }} style={{ width: '100%', padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10 }}>
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
          <NavLink to="/dashboard" className="nav-mobile-link" onClick={() => setMenuOpen(false)}
            style={{ color: '#D4A75B', fontWeight: 700 }}>
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
    </>
  )
}

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

        <div className="nav-cta nav-cta--desktop">
          <button className="btn btn-ghost" style={{ color: ghostColor }}>Se connecter</button>
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
          <NavLink to="/inscription" className="btn btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8 }}>
            Inscrire ma communauté
          </NavLink>
        </div>
      )}
    </>
  )
}

import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Society<span style={{ color: '#D4A75B' }}>.</span></div>
          <p className="footer-tagline">
            Structurez. Engagez. Monétisez.<br />
            L'infrastructure numérique des communautés africaines.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {['IG', 'X', 'LK', 'FB'].map(s => (
              <div key={s} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #2a2a2a', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 600, color: '#fff', cursor: 'pointer' }}>{s}</div>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h5>Produit</h5>
          <ul>
            <li><NavLink to="/fonctionnalites">Fonctionnalités</NavLink></li>
            <li><NavLink to="/tarifs">Tarifs</NavLink></li>
            <li><a href="#">Modules</a></li>
            <li><a href="#">Mobile App</a></li>
            <li><a href="#">Sécurité</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Pour qui ?</h5>
          <ul>
            <li><NavLink to="/pour-qui">ONG &amp; Associations</NavLink></li>
            <li><NavLink to="/pour-qui">Mutuelles</NavLink></li>
            <li><NavLink to="/pour-qui">Alumni</NavLink></li>
            <li><NavLink to="/pour-qui">Influenceurs</NavLink></li>
            <li><NavLink to="/pour-qui">Groupes religieux</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Société</h5>
          <ul>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
            <li><a href="#">Difero Fundry</a></li>
            <li><a href="#">Carrières</a></li>
            <li><a href="#">Presse</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Ressources</h5>
          <ul>
            <li><a href="#">Centre d'aide</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Études de cas</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Statut</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Society — Une création Difero Fundry · Abidjan, Côte d'Ivoire</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: '#6B6B6B', textDecoration: 'none' }}>Mentions légales</a>
          <a href="#" style={{ color: '#6B6B6B', textDecoration: 'none' }}>Confidentialité</a>
          <a href="#" style={{ color: '#6B6B6B', textDecoration: 'none' }}>CGU</a>
        </div>
      </div>
    </footer>
  )
}

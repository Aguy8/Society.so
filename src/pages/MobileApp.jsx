import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const FEATURES = [
  {
    icon: 'users',
    title: 'Feed communautaire',
    desc: 'Un fil d\'actualité vivant, centré sur les causes et les communautés qui vous ressemblent. Photos, vidéos, campagnes.',
    color: '#0E47AB',
    bg: '#E8F0FD',
  },
  {
    icon: 'shield',
    title: 'Espace fondateur',
    desc: 'Reporting, rapports financiers, gestion des membres, billetterie — tout votre tableau de bord dans votre poche.',
    color: '#166534',
    bg: '#F0FDF4',
  },
  {
    icon: 'heart',
    title: 'Campagnes & dons',
    desc: 'Lancez une collecte, suivez les dons en temps réel, remerciez vos contributeurs depuis l\'application.',
    color: '#9D174D',
    bg: '#FDF2F8',
  },
  {
    icon: 'calendar',
    title: 'Événements & billets',
    desc: 'Créez, publiez et vendez des billets. QR code de contrôle à l\'entrée, liste des présents, tout en mobile.',
    color: '#8B5E1A',
    bg: '#FDF6EC',
  },
  {
    icon: 'spark',
    title: 'Mise en relation',
    desc: 'Rejoignez d\'autres organisations, créez des partenariats, collaborez sur des projets à impact.',
    color: '#5C2E91',
    bg: '#F3F0FF',
  },
  {
    icon: 'star',
    title: 'Espace créateur',
    desc: 'Les leaders et personnalités publiques animent leur audience, diffusent du contenu exclusif, monétisent leur influence.',
    color: '#C23B5A',
    bg: '#FFF5F7',
  },
]

const SCREENS = [
  {
    label: 'Feed',
    title: "Un fil d'actualité vivant",
    desc: 'Découvrez les causes qui vous touchent. Suivez les communautés actives autour de vous. Chaque post raconte une histoire vraie.',
    bg: '#0E47AB',
    img: 'screen_app1.png',
    checks: ['Communautés certifiées avec badge', 'Stories et publications photo/vidéo', 'Fil personnalisé selon vos intérêts'],
    checkColor: '#0E47AB',
    checkBg: '#E8F0FD',
  },
  {
    label: 'Profil',
    title: "Le dashboard de l'organisation",
    desc: 'Reporting, membres, levées de fonds, gestion des bénévoles — toute la puissance de Society dans une interface sombre et claire.',
    bg: '#0a0a0a',
    img: 'screen_app2.png',
    checks: ['Reporting & statistiques temps réel', 'Gestion des membres et bénévoles', 'Rapports financiers exportables'],
    checkColor: '#D4A75B',
    checkBg: '#2a2a2a',
  },
  {
    label: 'Communauté',
    title: 'Explorez et rejoignez',
    desc: 'Parcourez par type : associations, ONG, mutuelles, institutions. Créez votre espace en quelques secondes.',
    bg: '#1a1a1a',
    img: 'screen_app3.png',
    checks: ['8 types de communautés disponibles', "Création d'espace en 3 étapes", 'Recommandations personnalisées'],
    checkColor: '#5C2E91',
    checkBg: '#F3F0FF',
  },
  {
    label: 'Créateur',
    title: "L'espace des leaders",
    desc: "Les influenceurs et personnalités publiques engagent leur audience, partagent du contenu exclusif et mobilisent leur communauté.",
    bg: '#1E3A6E',
    img: 'screen_app4.png',
    checks: ['153K+ abonnés, gestion de l\'audience', 'Contenu exclusif et live streaming', 'Monétisation de l\'influence'],
    checkColor: '#9D174D',
    checkBg: '#FDF2F8',
  },
]

export default function MobileApp() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, borderRadius: '50%', background: '#0E47AB', opacity: 0.12, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#D4A75B', opacity: 0.1, filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow dark">Application mobile</span>
              <h1 style={{ fontSize: 88, lineHeight: 0.88, color: 'white', marginTop: 28 }}>
                Society<br />
                <span style={{ color: '#D4A75B' }}>dans votre</span><br />
                poche.
              </h1>
              <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', marginTop: 28, lineHeight: 1.6, maxWidth: 460 }}>
                Gérez votre communauté, engagez vos membres, lancez des collectes et organisez des événements — depuis votre téléphone, à tout moment.
              </p>
              <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { icon: '▶', store: 'App Store', note: 'iOS bientôt' },
                  { icon: '◆', store: 'Google Play', note: 'Android bientôt' },
                ].map((btn, i) => (
                  <a key={i} href="#notify" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'white', borderRadius: 14, textDecoration: 'none', color: '#0a0a0a', fontWeight: 700, fontSize: 14 }}>
                    <div style={{ width: 32, height: 32, background: '#0a0a0a', borderRadius: 8, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'white', fontSize: 14 }}>{btn.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{btn.store}</div>
                      <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 500 }}>{btn.note}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: '12px 18px', background: 'rgba(255,255,255,0.06)', borderRadius: 12, display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Icon name="calendar" size={15} color="#D4A75B" />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Bientôt disponible · 2 000+ bêta-testeurs inscrits</span>
              </div>
            </div>

            {/* Phone cluster */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, height: 560, overflow: 'hidden' }}>
              <div className="phone-mockup" style={{ transform: 'rotate(-6deg) translateY(40px)', transformOrigin: 'bottom center' }}>
                <img src="./assets/screen_app3.png" className="phone-screen" alt="Communauté" />
              </div>
              <div className="phone-mockup" style={{ transform: 'scale(1.08)', zIndex: 2, boxShadow: '0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <img src="./assets/screen_app1.png" className="phone-screen" alt="Feed Society" />
              </div>
              <div className="phone-mockup" style={{ transform: 'rotate(6deg) translateY(40px)', transformOrigin: 'bottom center' }}>
                <img src="./assets/screen_app2.png" className="phone-screen" alt="Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '0', background: '#D4A75B' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { n: '4.8★', l: 'Note bêta-testeurs' },
            { n: '2 000+', l: 'Inscrits bêta' },
            { n: '< 2s', l: 'Temps de chargement' },
            { n: '98%', l: 'Satisfaction globale' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '32px 40px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.1)' : 'none', flex: 1, minWidth: 150 }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.6)', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ÉCRANS DÉTAILLÉS */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="eyebrow">Découverte de l'app</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Chaque écran,<br />une expérience.</h2>
          </div>

          <div style={{ display: 'grid', gap: 80 }}>
            {SCREENS.map((screen, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <span style={{ display: 'inline-block', padding: '5px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                    {screen.label}
                  </span>
                  <h3 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em' }}>{screen.title}</h3>
                  <p style={{ fontSize: 17, marginTop: 20, color: '#3A3A3A', lineHeight: 1.65 }}>{screen.desc}</p>
                  <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
                    {screen.checks.map((f, j) => (
                      <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: '#0a0a0a', fontWeight: 500 }}>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: screen.checkBg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <span style={{ color: screen.checkColor, fontSize: 13, fontWeight: 800 }}>✓</span>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}>
                  <div className="phone-mockup" style={{ background: screen.bg }}>
                    <img src={`./assets/${screen.img}`} className="phone-screen" alt={screen.label} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Fonctionnalités</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>Tout ce dont vous avez<br />besoin, en un seul endroit.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', background: f.bg, borderRadius: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: f.color, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <Icon name={f.icon} size={24} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÊTA SIGNUP */}
      <section id="notify" style={{ padding: '100px 64px 120px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div style={{ position: 'absolute', bottom: -120, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', background: '#0E47AB', opacity: 0.18, filter: 'blur(100px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(212,167,91,0.12)', border: '1px solid rgba(212,167,91,0.25)', borderRadius: 999, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D4A75B' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#D4A75B' }}>En développement actif</span>
          </div>
          <h2 style={{ fontSize: 64, color: 'white', lineHeight: 0.92, maxWidth: 700, margin: '0 auto' }}>
            Soyez parmi<br />
            <span style={{ color: '#D4A75B' }}>les premiers.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginTop: 24, maxWidth: 480, margin: '24px auto 0', lineHeight: 1.6 }}>
            Rejoignez la liste bêta et recevez un accès en avant-première à l'application Society.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="votre@email.com"
              style={{ padding: '18px 24px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: 15, width: 320, outline: 'none', maxWidth: '100%', boxSizing: 'border-box' }}
            />
            <button className="btn btn-gold btn-lg">
              Je m'inscris en bêta
              <Icon name="arrow" size={16} color="#0a0a0a" />
            </button>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>2 000+ personnes déjà inscrites · Aucun spam</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

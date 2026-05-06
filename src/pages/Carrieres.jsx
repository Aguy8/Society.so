import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const valeurs = [
  {
    icon: 'bolt',
    title: 'Impact avant tout',
    description: 'Chaque ligne de code, chaque décision produit, chaque campagne marketing a un impact mesurable sur des milliers de communautés africaines. On ne s\'ennuie pas.',
    color: '#E8F0FD',
    iconColor: '#0E47AB',
  },
  {
    icon: 'users',
    title: 'Grandir ensemble',
    description: 'Nous croyons à la progression collective. Mentoring interne, budget formation annuel de 300 000 FCFA, conférences tech africaines prises en charge.',
    color: '#FDF6EC',
    iconColor: '#8B5E1A',
  },
  {
    icon: 'heart',
    title: 'Authenticité africaine',
    description: 'Pas de copier-coller de Silicon Valley. Nos solutions naissent de nos réalités, de nos langues, de nos modes de paiement et de notre façon de vivre en communauté.',
    color: '#FDF2F8',
    iconColor: '#9D174D',
  },
]

const postes = [
  {
    titre: 'Ingénieur(e) Backend Senior',
    dept: 'Engineering',
    lieu: 'Abidjan, Plateau',
    type: 'CDI',
    remote: 'Hybride',
    description: 'Vous concevrez et maintiendrez l\'API REST qui alimente toutes les communautés Society. Stack : Node.js, PostgreSQL, Redis, AWS. Expérience requise : 4+ ans.',
    tags: ['Node.js', 'PostgreSQL', 'API REST', 'AWS'],
    isNew: true,
  },
  {
    titre: 'Développeur(se) Mobile React Native',
    dept: 'Engineering',
    lieu: 'Remote Afrique',
    type: 'CDI',
    remote: 'Full Remote',
    description: 'Vous buildez l\'application mobile Society pour iOS et Android. On cherche quelqu\'un qui a shipper des apps en production, pas juste des side projects.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
    isNew: false,
  },
  {
    titre: 'Product Manager — Communautés',
    dept: 'Produit',
    lieu: 'Abidjan, Plateau',
    type: 'CDI',
    remote: 'Hybride',
    description: 'Vous pilotez la roadmap produit de la suite "gestion de communautés". Vous êtes à l\'aise avec les données, les interviews utilisateurs et la priorisation dans un contexte de ressources limitées.',
    tags: ['Product', 'Roadmap', 'UX Research', 'OKR'],
    isNew: true,
  },
  {
    titre: 'Responsable Communautés & Activation',
    dept: 'Community',
    lieu: 'Abidjan, Cocody',
    type: 'CDI',
    remote: 'Sur site',
    description: 'Premier point de contact de nos communautés partenaires. Vous organisez des ateliers d\'onboarding, produisez du contenu en français et créez du lien entre les leaders Society.',
    tags: ['Community', 'Animation', 'Formation', 'WhatsApp'],
    isNew: false,
  },
  {
    titre: 'Business Developer — Partenariats Institutionnels',
    dept: 'Business Development',
    lieu: 'Abidjan + déplacements UEMOA',
    type: 'CDI',
    remote: 'Hybride',
    description: 'Vous développez les partenariats avec les ONG, mutuelles, fédérations et institutions publiques. Vous avez un réseau dans l\'écosystème associatif ivoirien ou UEMOA.',
    tags: ['B2B', 'Partenariats', 'ONG', 'UEMOA'],
    isNew: false,
  },
]

const avantages = [
  { icon: 'money', title: 'Rémunération compétitive', desc: 'Salaire au-dessus du marché ivoirien + participation aux bénéfices dès la rentabilité.' },
  { icon: 'calendar', title: '30 jours de congé', desc: 'Plus les jours fériés ivoiriens. On est sérieux là-dessus — vos congés, c\'est sacré.' },
  { icon: 'layers', title: 'Budget formation', desc: '300 000 FCFA/an pour des cours, certifications, conférences. Investissez dans vous-même.' },
  { icon: 'bolt', title: 'Matériel top niveau', desc: 'MacBook Pro ou PC haut de gamme de votre choix. Bureau ergonomique, double écran.' },
  { icon: 'heart', title: 'Mutuelle santé', desc: 'Couverture santé prise en charge à 100 % pour vous et à 50 % pour votre famille directe.' },
  { icon: 'users', title: 'Équipe de builders', desc: 'Vous travaillez avec des gens qui ont un biais pour l\'action et zéro tolérance pour les réunions inutiles.' },
]

const deptColors = {
  Engineering: { bg: '#E8F0FD', text: '#0E47AB' },
  Produit: { bg: '#FDF6EC', text: '#8B5E1A' },
  Community: { bg: '#F0FDF4', text: '#166534' },
  'Business Development': { bg: '#FDF2F8', text: '#9D174D' },
}

export default function Carrieres() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(135deg, #0E47AB 0%, #0a2d6e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: 200, width: 400, height: 400, borderRadius: 999, background: '#D4A75B', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 300, height: 300, borderRadius: 999, background: 'rgba(255,255,255,0.05)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow white">Carrières</span>
          <h1 style={{ fontSize: 90, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Construisez l'avenir<br />
            <span style={{ color: '#D4A75B' }}>de l'Afrique communautaire.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 32, maxWidth: 620, lineHeight: 1.55, color: 'rgba(255,255,255,0.8)' }}>
            Une petite équipe, une grande ambition. On cherche des builders qui veulent laisser une empreinte sur l'écosystème tech africain.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
            <a href="#postes" className="btn btn-gold btn-xl">
              Voir les postes ouverts
              <Icon name="arrow" size={16} color="#0a0a0a" />
            </a>
            <button style={{ padding: '16px 28px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>
              Notre culture en vidéo
            </button>
          </div>
          <div style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.15)', flexWrap: 'wrap' }}>
            {[['8', 'Personnes dans l\'équipe'], ['5', 'Postes ouverts'], ['Abidjan', 'Siège principal'], ['Remote Afrique', 'Politique de travail']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Notre culture</span>
          <h2 style={{ fontSize: 48, marginTop: 20, fontWeight: 800 }}>Ce en quoi nous croyons.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 48 }}>
            {valeurs.map((v, i) => (
              <div key={i} style={{ padding: '40px 36px', background: 'white', borderRadius: 24, border: '1px solid #EBEBEB' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Icon name={v.icon} size={24} color={v.iconColor} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800 }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: '#3A3A3A', marginTop: 14, lineHeight: 1.65 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="postes" style={{ padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span className="eyebrow">Postes ouverts</span>
              <h2 style={{ fontSize: 48, marginTop: 16, fontWeight: 800 }}>5 postes disponibles.</h2>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Tous', 'Engineering', 'Produit', 'Community', 'Business'].map(f => (
                <button key={f} style={{ padding: '8px 16px', border: f === 'Tous' ? '2px solid #0E47AB' : '1px solid #E5E5E5', background: f === 'Tous' ? '#0E47AB' : 'white', color: f === 'Tous' ? 'white' : '#3A3A3A', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 20 }}>
            {postes.map((p, i) => (
              <div key={i} style={{ padding: '36px 40px', border: '1px solid #EBEBEB', borderRadius: 24, background: 'white', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span style={{ padding: '5px 14px', background: deptColors[p.dept]?.bg || '#F2F2F2', color: deptColors[p.dept]?.text || '#3A3A3A', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>
                      {p.dept}
                    </span>
                    {p.isNew && (
                      <span style={{ padding: '5px 14px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em' }}>
                        NOUVEAU
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800 }}>{p.titre}</h3>
                  <div style={{ display: 'flex', gap: 20, marginTop: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, color: '#6B6B6B', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Icon name="globe" size={13} color="#6B6B6B" /> {p.lieu}
                    </span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>· {p.type}</span>
                    <span style={{ fontSize: 13, color: '#0E47AB', fontWeight: 600 }}>· {p.remote}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#3A3A3A', marginTop: 14, lineHeight: 1.6, maxWidth: 700 }}>{p.description}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ padding: '4px 12px', background: '#F2F2F2', borderRadius: 999, fontSize: 12, fontWeight: 600, color: '#3A3A3A' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary">
                  Postuler
                  <Icon name="arrow" size={15} color="white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#0a0a0a' }}>
        <div className="container">
          <span className="eyebrow white">Avantages</span>
          <h2 style={{ fontSize: 48, color: 'white', marginTop: 20, fontWeight: 800 }}>Prendre soin de notre équipe.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
            {avantages.map((a, i) => (
              <div key={i} style={{ padding: '32px 28px', background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(212,167,91,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={a.icon} size={20} color="#D4A75B" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'white' }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 10, lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, fontWeight: 800, maxWidth: 600, margin: '0 auto' }}>Vous ne trouvez pas votre poste ?</h2>
          <p style={{ fontSize: 18, color: '#6B6B6B', marginTop: 20, maxWidth: 480, margin: '20px auto 0', lineHeight: 1.6 }}>
            Envoyez-nous une candidature spontanée. Si votre profil nous intéresse, on vous contactera dès qu'une opportunité se présente.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <a href="mailto:carrieres@society.ci" className="btn btn-primary btn-xl">
              Candidature spontanée
              <Icon name="arrow" size={16} color="white" />
            </a>
          </div>
          <p style={{ fontSize: 13, color: '#9B9B9B', marginTop: 20 }}>carrieres@society.ci · On lit chaque candidature.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

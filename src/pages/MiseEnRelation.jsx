import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const MATCH_TYPES = [
  {
    icon: 'spark',
    title: 'Partenariats stratégiques',
    desc: 'Deux organisations complémentaires s\'associent pour un projet commun : une ONG de santé + une mutuelle locale pour une campagne de sensibilisation.',
    color: '#0E47AB',
    bg: '#E8F0FD',
    example: 'ONG + Mutuelle → Campagne santé',
  },
  {
    icon: 'users',
    title: 'Mutualisation de ressources',
    desc: 'Partagez des espaces, du matériel ou des compétences bénévoles entre organisations du même territoire.',
    color: '#166534',
    bg: '#F0FDF4',
    example: 'Alumni + Association → Salle partagée',
  },
  {
    icon: 'star',
    title: 'Co-financement de projets',
    desc: 'Plusieurs communautés s\'associent pour financer un projet à plus grand impact : récolte groupée, subvention partagée.',
    color: '#8B5E1A',
    bg: '#FDF6EC',
    example: '3 ONG → Puits d\'eau Bouaké',
  },
  {
    icon: 'heart',
    title: 'Référencement de bénéficiaires',
    desc: 'Orientez des personnes vers des organisations mieux placées pour les aider. Le réseau Society devient un filet de sécurité social.',
    color: '#9D174D',
    bg: '#FDF2F8',
    example: 'Fondation → Oriente vers AFJCI',
  },
  {
    icon: 'globe',
    title: 'Événements co-organisés',
    desc: 'Unissez vos réseaux pour organiser des événements plus grands, mieux financés et plus impactants.',
    color: '#5C2E91',
    bg: '#F3F0FF',
    example: 'Leaders + Alumni → Forum Impact 2026',
  },
  {
    icon: 'bolt',
    title: 'Transfert de savoir-faire',
    desc: 'Une organisation plus mature accompagne et forme une plus jeune. Mentorat institutionnel intégré dans la plateforme.',
    color: '#C23B5A',
    bg: '#FFF5F7',
    example: 'ONG senior → Accompagne 5 startups sociales',
  },
]

const HOW_STEPS = [
  {
    n: '01',
    title: 'Complétez votre profil',
    desc: "Renseignez votre domaine d'action, vos ressources disponibles, vos besoins et vos zones géographiques d'intervention.",
    color: '#0E47AB',
  },
  {
    n: '02',
    title: "L'algorithme suggère",
    desc: 'Society analyse les profils et vous propose les 5 organisations les plus complémentaires. Proximité géographique, synergies de mission, compatibilité de taille.',
    color: '#D4A75B',
  },
  {
    n: '03',
    title: 'Vous prenez contact',
    desc: "Envoyez une proposition de collaboration structurée. L'autre organisation reçoit une notification et peut accepter, décliner ou proposer une rencontre.",
    color: '#166534',
  },
  {
    n: '04',
    title: 'Vous collaborez',
    desc: 'Espace de travail partagé, messagerie, suivi de projet et bilan d\'impact commun — tout reste dans Society.',
    color: '#5C2E91',
  },
]

const SECTORS = [
  { label: 'Santé & Bien-être', orgs: 247, color: '#C23B5A' },
  { label: 'Éducation', orgs: 312, color: '#0E47AB' },
  { label: 'Agriculture & Environnement', orgs: 189, color: '#166534' },
  { label: 'Entrepreneuriat social', orgs: 428, color: '#D4A75B' },
  { label: 'Culture & Arts', orgs: 156, color: '#5C2E91' },
  { label: 'Genre & Inclusion', orgs: 203, color: '#8B5E1A' },
  { label: 'Jeunesse & Sport', orgs: 341, color: '#0E47AB' },
  { label: 'Urgences & Solidarité', orgs: 94, color: '#C23B5A' },
]

export default function MiseEnRelation() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -150, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#0E47AB', opacity: 0.15, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%', background: '#D4A75B', opacity: 0.12, filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow dark">Mise en relation intelligente</span>
          <h1 style={{ fontSize: 88, lineHeight: 0.88, color: 'white', marginTop: 28, maxWidth: 820 }}>
            Le réseau qui<br />
            <span style={{ color: '#D4A75B' }}>connecte</span> les<br />
            communautés.
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', marginTop: 28, lineHeight: 1.65, maxWidth: 520 }}>
            Society met en relation les associations, ONG, mutuelles et leaders qui partagent les mêmes valeurs et les mêmes territoires. Ensemble, vous faites plus.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap' }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">
              Rejoindre le réseau
              <Icon name="arrow" size={16} color="#0a0a0a" />
            </NavLink>
            <a href="#comment" className="btn btn-outline-white btn-xl">Voir comment ça marche</a>
          </div>

          {/* Mini réseau visuel */}
          <div style={{ marginTop: 72, display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', paddingBottom: 8 }}>
            {[
              { label: 'ONG Eau Vive', type: 'ONG', color: '#0E47AB' },
              { label: '+', type: null, color: null },
              { label: 'Mutuelle Espoir', type: 'Mutuelle', color: '#D4A75B' },
              { label: '+', type: null, color: null },
              { label: 'Alumni INPHB', type: 'Alumni', color: '#166534' },
              { label: '→', type: null, color: null },
              { label: 'Campagne Santé Bouaké', type: 'Projet commun', color: '#5C2E91' },
            ].map((node, i) => (
              node.type ? (
                <div key={i} style={{ padding: '12px 18px', background: `${node.color}18`, border: `1.5px solid ${node.color}44`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: node.color }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>{node.label}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>{node.type}</div>
                  </div>
                </div>
              ) : (
                <div key={i} style={{ fontSize: 24, color: 'rgba(255,255,255,0.25)', padding: '0 8px', flexShrink: 0 }}>{node.label}</div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n: '1 800+', l: 'Organisations sur Society' },
            { n: '620', l: 'Collaborations initiées' },
            { n: '3.2×', l: "Plus d'impact en réseau" },
            { n: '8', l: 'Pays couverts en Afrique de l\'Ouest' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '40px 28px', background: i % 2 === 0 ? '#0E47AB' : '#0a0a0a', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPES DE COLLABORATION */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">6 types de connexion</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>Collaborez selon<br />vos besoins.</h2>
            <p style={{ fontSize: 18, color: '#3A3A3A', marginTop: 16, maxWidth: 560, margin: '16px auto 0', lineHeight: 1.6 }}>
              Society identifie le type de collaboration le plus adapté à votre situation et vous met en contact avec les bonnes organisations.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {MATCH_TYPES.map((mt, i) => (
              <div key={i} style={{ padding: '36px 32px', background: mt.bg, borderRadius: 28, position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: mt.color, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <Icon name={mt.icon} size={24} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 12 }}>{mt.title}</h3>
                <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.6, marginBottom: 20 }}>{mt.desc}</p>
                <div style={{ padding: '8px 14px', background: 'white', borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Exemple réel :</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: mt.color }}>{mt.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment" style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Comment ça marche</span>
              <h2 style={{ fontSize: 52, marginTop: 20, lineHeight: 1.05 }}>De votre profil<br />à la collaboration.</h2>
              <div style={{ marginTop: 48, display: 'grid', gap: 32 }}>
                {HOW_STEPS.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: step.color, display: 'grid', placeItems: 'center', flexShrink: 0, fontWeight: 800, color: 'white', fontSize: 16 }}>
                      {step.n}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 8 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interface mockup */}
            <div style={{ background: '#0a0a0a', borderRadius: 32, padding: 32, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: '#0E47AB', opacity: 0.2, filter: 'blur(50px)' }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 20, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Suggestions pour vous
              </div>
              {[
                { name: 'Fondation SAMU Social CI', type: 'ONG · Santé', match: '96%', color: '#0E47AB' },
                { name: 'Mutuelle des Mamans d\'Abobo', type: 'Mutuelle · Finance solidaire', match: '91%', color: '#D4A75B' },
                { name: 'Alumni HEC Paris Abidjan', type: 'Alumni · Entrepreneuriat', match: '88%', color: '#166534' },
                { name: 'Jeunesse Catholique CI', type: 'Religion · Jeunesse', match: '84%', color: '#5C2E91' },
              ].map((org, i) => (
                <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: org.color, display: 'grid', placeItems: 'center', flexShrink: 0, fontWeight: 800, color: 'white', fontSize: 16 }}>
                    {org.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{org.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{org.type}</div>
                  </div>
                  <div style={{ padding: '4px 10px', background: `${org.color}33`, borderRadius: 999, fontSize: 12, fontWeight: 700, color: org.color, flexShrink: 0 }}>
                    {org.match}
                  </div>
                  <button style={{ padding: '8px 14px', background: org.color, borderRadius: 8, border: 'none', color: 'white', fontSize: 12, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>
                    Contacter
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Secteurs actifs</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>1 800+ organisations<br />prêtes à collaborer.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {SECTORS.map((sec, i) => (
              <div key={i} style={{ padding: '28px 24px', background: 'white', borderRadius: 20, border: '1px solid #EBEBEB', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: sec.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{sec.label}</div>
                  <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>{sec.orgs} orgs</div>
                </div>
                <div style={{ padding: '4px 10px', background: `${sec.color}12`, borderRadius: 999, fontSize: 11, fontWeight: 700, color: sec.color }}>
                  actif
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '100px 64px', background: '#0E47AB' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 96, color: 'rgba(255,255,255,0.15)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -24 }}>"</div>
            <blockquote style={{ margin: 0, fontSize: 28, fontWeight: 600, lineHeight: 1.35, color: 'white' }}>
              Society nous a mis en relation avec deux mutuelles de Yamoussoukro. En 6 mois, nous avons lancé une campagne de dépistage qui a touché 4 000 femmes. Seuls, c'était impossible.
            </blockquote>
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundImage: 'url(https://images.unsplash.com/photo-1531123897727-8f11ebb3a745?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: 17, color: 'white' }}>Dr. Aminata Coulibaly</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Directrice, Association Cansein CI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '100px 64px 120px' }}>
        <div className="container">
          <div style={{ background: '#0a0a0a', borderRadius: 36, padding: '72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: '#0E47AB', opacity: 0.12, filter: 'blur(80px)' }} />
            <span className="eyebrow dark" style={{ position: 'relative' }}>Rejoignez le réseau</span>
            <h2 style={{ fontSize: 60, color: 'white', marginTop: 20, lineHeight: 0.95, position: 'relative' }}>
              Ensemble, vous pouvez<br />
              <span style={{ color: '#D4A75B' }}>changer la donne.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginTop: 24, maxWidth: 480, margin: '24px auto 0', lineHeight: 1.6, position: 'relative' }}>
              Inscrivez votre organisation sur Society et accédez immédiatement au réseau de 1 800+ communautés africaines.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap', position: 'relative' }}>
              <NavLink to="/inscription" className="btn btn-gold btn-xl">
                Rejoindre le réseau
                <Icon name="arrow" size={16} color="#0a0a0a" />
              </NavLink>
              <NavLink to="/etudes-de-cas" className="btn btn-outline-white btn-xl">Voir des cas concrets</NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

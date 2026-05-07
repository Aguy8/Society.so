import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Publiez une mission',
    desc: "Décrivez le type d'engagement souhaité, les compétences requises, la durée et le lieu. Votre mission est visible par toute la communauté Society.",
    icon: 'target',
    color: '#0E47AB',
  },
  {
    n: '02',
    title: 'Les candidats postulent',
    desc: 'Les bénévoles intéressés envoient leur candidature directement dans l\'application. Vous consultez leurs profils, compétences et disponibilités.',
    icon: 'users',
    color: '#D4A75B',
  },
  {
    n: '03',
    title: 'Vous les accueillez',
    desc: "Confirmez, planifiez et communiquez avec vos bénévoles depuis votre tableau de bord. Partagez les documents et la logistique en un clic.",
    icon: 'calendar',
    color: '#166534',
  },
  {
    n: '04',
    title: 'Mesurez l\'impact',
    desc: 'Suivez les heures de bénévolat, exportez les attestations et générez un rapport d\'impact automatique pour vos bailleurs.',
    icon: 'chart',
    color: '#5C2E91',
  },
]

const FEATURES = [
  { icon: 'users', title: 'Profils bénévoles', desc: 'Chaque bénévole a un profil avec ses compétences, disponibilités, historique de missions et attestations.' },
  { icon: 'calendar', title: 'Planning intégré', desc: 'Organisez les rotations, envoyez des rappels automatiques et gérez les remplacements en cas d\'absence.' },
  { icon: 'shield', title: 'Attestations automatiques', desc: 'Society génère des attestations de bénévolat PDF officielles avec heures et signature électronique.' },
  { icon: 'chart', title: 'Suivi des heures', desc: 'Tableau de bord en temps réel des heures accomplies par bénévole, par mission et par période.' },
  { icon: 'heart', title: 'Programme de fidélisation', desc: 'Récompensez vos bénévoles avec des badges, des reconnaissances publiques et des avantages exclusifs.' },
  { icon: 'bolt', title: 'Formation intégrée', desc: 'Partagez des modules de formation, des guides et des ressources directement dans le profil de chaque bénévole.' },
]

const STATS = [
  { n: '18 000+', l: 'Bénévoles inscrits sur Society' },
  { n: '240h', l: 'de bénévolat suivi par org/an' },
  { n: '92%', l: 'Taux de satisfaction bénévoles' },
  { n: '3×', l: 'Plus de fidélisation vs. sans outil' },
]

export default function Benevolat() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 640, display: 'flex', alignItems: 'flex-end', padding: '0 64px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,71,171,0.4) 0%, rgba(10,10,10,0.88) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #0E47AB, #D4A75B)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <NavLink to="/fonctionnalites" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>
            ← Fonctionnalités
          </NavLink>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
                Nouveau · Module Bénévolat
              </div>
              <h1 style={{ fontSize: 92, lineHeight: 0.88, color: 'white', marginBottom: 24 }}>
                Engagez vos<br />
                <span style={{ color: '#D4A75B' }}>bénévoles.</span>
              </h1>
              <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', lineHeight: 1.45, maxWidth: 580 }}>
                Recrutez, organisez et valorisez vos bénévoles. Society transforme la gestion du volontariat en moteur de croissance pour votre organisation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, paddingBottom: 4, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-gold btn-lg">Activer le module</NavLink>
              <NavLink to="/tarifs" className="btn btn-outline-white btn-lg">Voir les plans</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ padding: '40px 28px', background: i % 2 === 0 ? '#0E47AB' : '#0a0a0a', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8, lineHeight: 1.4 }}>{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLÈME */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Le constat</span>
              <h2 style={{ fontSize: 52, marginTop: 20, lineHeight: 1.05 }}>Le bénévolat africain mérite mieux qu'Excel.</h2>
              <p style={{ fontSize: 17, marginTop: 24, color: '#3A3A3A', lineHeight: 1.7 }}>
                En Côte d'Ivoire, 80% des associations gèrent leurs bénévoles via WhatsApp ou des tableaux Excel. Résultat : absences non anticipées, heures non comptabilisées, bénévoles démotivés.
              </p>
              <div style={{ marginTop: 36, display: 'grid', gap: 12 }}>
                {[
                  'Aucun suivi des heures de bénévolat',
                  'Pas d\'attestations officielles disponibles',
                  'Difficultés à recruter au-delà du réseau proche',
                  'Bénévoles non valorisés, fort taux d\'abandon',
                ].map((pb, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 20px', background: '#FFF5F5', borderRadius: 12, borderLeft: '4px solid #C23B5A', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C23B5A', fontWeight: 800, flexShrink: 0 }}>✕</span>
                    <p style={{ fontSize: 15, color: '#0a0a0a', margin: 0, lineHeight: 1.5 }}>{pb}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', boxShadow: '0 32px 64px rgba(0,0,0,0.15)' }}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Bénévolat" />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: '20px 24px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', marginBottom: 8 }}>Module Bénévolat Society</div>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.03em' }}>47</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>bénévoles actifs</div>
                      </div>
                      <div style={{ width: 1, height: 40, background: '#E5E5E5' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#0E47AB', letterSpacing: '-0.03em' }}>312h</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>ce mois</div>
                      </div>
                      <div style={{ width: 1, height: 40, background: '#E5E5E5' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#166534', letterSpacing: '-0.03em' }}>94%</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>présents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Comment ça marche</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>De la mission à l'attestation<br />en 4 étapes.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ padding: '36px 28px', background: 'white', borderRadius: 24, border: '1.5px solid #EBEBEB', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -16, right: -16, fontSize: 80, fontWeight: 900, color: '#F2F2F2', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none' }}>{step.n}</div>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: step.color, display: 'grid', placeItems: 'center', marginBottom: 20, position: 'relative' }}>
                  <Icon name={step.icon} size={24} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 12, position: 'relative' }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.6, position: 'relative' }}>{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: -12, transform: 'translateY(-50%)', fontSize: 20, color: '#C9C9C9', zIndex: 1 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Fonctionnalités complètes</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>Tout pour valoriser<br />vos bénévoles.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', background: 'white', borderRadius: 24, border: '1px solid #EBEBEB' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#E8F0FD', display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <Icon name={f.icon} size={22} color="#0E47AB" />
                </div>
                <h3 style={{ fontSize: 19, lineHeight: 1.2, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '100px 64px', background: '#0E47AB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 32px 64px rgba(0,0,0,0.3)' }}>
              <img src="https://images.unsplash.com/photo-1489424731084-a3d5bc15a39b?auto=format&fit=crop&w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Testimonial" />
            </div>
            <div>
              <div style={{ fontSize: 96, color: 'rgba(255,255,255,0.15)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -24 }}>"</div>
              <blockquote style={{ margin: 0, fontSize: 26, fontWeight: 600, lineHeight: 1.35, color: 'white' }}>
                Avec Society, on a pu structurer notre réseau de 120 bénévoles, suivre 890 heures de volontariat et générer les attestations pour tous. Nos bailleurs ont été bluffés par notre rapport d'impact.
              </blockquote>
              <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: 'white' }}>Mariama Kouyaté</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginTop: 4 }}>Directrice, ONG Eau Vive Abidjan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 64px 120px' }}>
        <div className="container">
          <div style={{ background: '#0a0a0a', borderRadius: 36, padding: '72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: '#0E47AB', opacity: 0.15, filter: 'blur(60px)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: '#D4A75B', opacity: 0.1, filter: 'blur(40px)' }} />
            <span className="eyebrow dark" style={{ position: 'relative' }}>Prêt à démarrer ?</span>
            <h2 style={{ fontSize: 64, color: 'white', marginTop: 20, position: 'relative', lineHeight: 0.95 }}>
              Lancez votre programme<br />
              <span style={{ color: '#D4A75B' }}>bénévolat aujourd'hui.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginTop: 24, maxWidth: 520, margin: '24px auto 0', lineHeight: 1.6, position: 'relative' }}>
              Gratuit jusqu'à 30 bénévoles. Sans carte bancaire. Vos premières missions en ligne en moins de 10 minutes.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap', position: 'relative' }}>
              <NavLink to="/inscription" className="btn btn-gold btn-xl">
                Créer mon espace gratuitement
                <Icon name="arrow" size={16} color="#0a0a0a" />
              </NavLink>
              <NavLink to="/centre-aide" className="btn btn-outline-white btn-xl">En savoir plus</NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

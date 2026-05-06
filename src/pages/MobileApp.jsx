import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const features = [
  { icon: 'users', title: 'Gestion des membres', desc: 'Ajoutez, gerez et communiquez avec tous vos membres depuis votre poche. Annuaire, profils, roles.' },
  { icon: 'money', title: 'Cotisations Mobile Money', desc: 'Collectez les cotisations via Orange Money, Wave ou MTN MoMo en quelques secondes. Relances automatiques.' },
  { icon: 'calendar', title: 'Evenements & billets', desc: 'Creez vos evenements, gerez les inscriptions et scannez les QR codes a l\'entree le jour J.' },
  { icon: 'heart', title: 'Cagnottes solidaires', desc: 'Lancez et gerez des collectes de fonds depuis l\'app. Partagez en un tap sur WhatsApp ou Facebook.' },
  { icon: 'chart', title: 'Tableau de bord en direct', desc: 'Cotisations recues, taux de participation, croissance des membres : tout en temps reel.' },
  { icon: 'chat', title: 'Communication centralisee', desc: 'Canaux de discussion, annonces, sondages et notifications push pour engager vos membres.' },
]

const screenshots = [
  { title: 'Accueil', subtitle: 'Vue d\'ensemble', color: '#0E47AB', screen: '/assets/screen_app1.png' },
  { title: 'Cotisations', subtitle: 'Suivi en temps reel', color: '#0a0a0a', screen: '/assets/screen_app2.png' },
  { title: 'Evenements', subtitle: 'Billetterie integree', color: '#1a3a6e', screen: '/assets/screen_app3.png' },
]

export default function MobileApp() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(160deg, #0E47AB 0%, #0a2d6e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -60, width: 500, height: 500, borderRadius: 999, background: 'rgba(212,167,91,0.12)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: 200, width: 300, height: 300, borderRadius: 999, background: 'rgba(255,255,255,0.04)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(212,167,91,0.2)', borderRadius: 999, marginBottom: 32, border: '1px solid rgba(212,167,91,0.3)' }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: '#D4A75B' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#D4A75B', letterSpacing: '0.04em' }}>APPLICATION MOBILE</span>
              </div>
              <h1 style={{ fontSize: 72, lineHeight: 0.92, color: 'white', fontWeight: 900 }}>
                Votre communaute<br />
                <span style={{ color: '#D4A75B' }}>dans votre poche.</span>
              </h1>
              <p style={{ fontSize: 18, marginTop: 28, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: 480 }}>
                L'application Society est disponible sur Android et iOS. Gerez, engagez et faites grandir votre communaute de n'importe ou en Afrique.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 22px', background: '#0a0a0a', color: 'white', borderRadius: 14, cursor: 'pointer' }}>
                  <div style={{ width: 32, height: 32, background: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="bolt" size={16} color="#0a0a0a" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>DISPONIBLE SUR</div>
                    <div style={{ fontSize: 15, fontWeight: 800 }}>Google Play</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 22px', background: '#0a0a0a', color: 'white', borderRadius: 14, cursor: 'pointer' }}>
                  <div style={{ width: 32, height: 32, background: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="layers" size={16} color="#0a0a0a" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>TELECHARGER SUR</div>
                    <div style={{ fontSize: 15, fontWeight: 800 }}>App Store</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
                {[['4.8/5', 'Note moyenne'], ['12k+', 'Telechargements'], ['iOS & Android', 'Plateformes']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'flex-end' }}>
              {screenshots.map((s, i) => (
                <div key={i} style={{ width: 160, transform: i === 1 ? 'scale(1.12)' : 'scale(0.92)', transformOrigin: 'bottom center', transition: 'transform 0.2s' }}>
                  <div style={{ aspectRatio: '9 / 19.5', borderRadius: 36, border: '8px solid rgba(255,255,255,0.15)', background: s.color, overflow: 'hidden', boxShadow: i === 1 ? '0 40px 80px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.3)', position: 'relative' }}>
                    <img src={s.screen} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${s.color} 100%)` }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>{s.title}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>{s.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <span className="eyebrow">Fonctionnalites</span>
          <h2 style={{ fontSize: 48, marginTop: 20, fontWeight: 800 }}>Tout ce dont vous avez besoin.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 48 }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', border: '1px solid #EBEBEB', borderRadius: 24, background: 'white' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#E8F0FD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={f.icon} size={22} color="#0E47AB" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#3A3A3A', marginTop: 12, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Telechargement instantane</span>
              <h2 style={{ fontSize: 40, marginTop: 20, fontWeight: 800 }}>Scannez pour telecharger.</h2>
              <p style={{ fontSize: 16, color: '#3A3A3A', marginTop: 16, lineHeight: 1.65 }}>
                Scannez le QR code avec votre telephone pour etre redirige directement vers l'App Store ou le Google Play selon votre appareil. En moins de 2 minutes, votre communaute est dans votre poche.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <div style={{ padding: '14px 22px', background: '#0a0a0a', color: 'white', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  Google Play
                </div>
                <div style={{ padding: '14px 22px', background: '#0a0a0a', color: 'white', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  App Store
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 180, height: 180, background: '#0E47AB', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', position: 'relative' }}>
                  <div style={{ width: 120, height: 120, background: 'white', borderRadius: 12, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, padding: 12 }}>
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} style={{ background: [0,1,5,6,2,3,7,9,10,11,15,16,18,19,23,24].includes(i) ? '#0a0a0a' : 'white', borderRadius: 2 }} />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 12, color: '#0a0a0a' }}>Android</div>
                <div style={{ fontSize: 11, color: '#9B9B9B' }}>Google Play</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 180, height: 180, background: '#0a0a0a', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <div style={{ width: 120, height: 120, background: 'white', borderRadius: 12, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, padding: 12 }}>
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} style={{ background: [0,2,4,6,8,10,12,14,16,18,20,22,24,3,7,11,15,19].includes(i) ? '#0a0a0a' : 'white', borderRadius: 2 }} />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 12, color: '#0a0a0a' }}>iPhone</div>
                <div style={{ fontSize: 11, color: '#9B9B9B' }}>App Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 48, fontWeight: 800 }}>Pret a demarrer ?</h2>
          <p style={{ fontSize: 17, color: '#6B6B6B', marginTop: 16, maxWidth: 480, margin: '16px auto 0', lineHeight: 1.6 }}>
            Creez votre compte gratuitement et telechargez l'application en moins de 5 minutes.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <NavLink to="/inscription" className="btn btn-primary btn-xl">
              Creer mon compte gratuitement
              <Icon name="arrow" size={16} color="white" />
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

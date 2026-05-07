import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const contactCards = [
  {
    icon: 'chat',
    title: 'Support technique',
    description: 'Problème avec votre compte ou votre communauté ? Notre équipe support répond sous 24h.',
    contact: 'support@society.ci',
    badge: 'Lun – Ven · 8h–18h',
    color: '#E8F0FD',
    iconColor: '#0E47AB',
  },
  {
    icon: 'globe',
    title: 'Relations presse',
    description: 'Demandes d\'interview, citations, vérification d\'informations pour les journalistes.',
    contact: 'presse@society.ci',
    badge: 'Réponse sous 48h',
    color: '#FDF6EC',
    iconColor: '#8B5E1A',
  },
  {
    icon: 'users',
    title: 'Partenariats',
    description: 'Vous êtes une institution, une ONG ou une entreprise ? Discutons d\'un partenariat.',
    contact: 'partenariats@society.ci',
    badge: 'Réponse sous 72h',
    color: '#F0FDF4',
    iconColor: '#166534',
  },
]

const subjects = [
  'Choisir un sujet…',
  'Support technique',
  'Mon compte Society',
  'Facturation & abonnement',
  'Partenariat commercial',
  'Demande presse',
  'Signalement de bug',
  'Autre',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 style={{ fontSize: 80, marginTop: 24, lineHeight: 0.92, maxWidth: 700 }}>
            Parlons de<br />
            <span style={{ color: '#0E47AB' }}>votre communauté.</span>
          </h1>
          <p style={{ fontSize: 19, marginTop: 28, maxWidth: 560, lineHeight: 1.55, color: '#3A3A3A' }}>
            Notre équipe basée à Abidjan est disponible pour répondre à toutes vos questions. Choisissez la voie la plus adaptée à votre demande.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
            {contactCards.map((c, i) => (
              <div key={i} style={{ padding: '36px 32px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={c.icon} size={22} color={c.iconColor} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 12, lineHeight: 1.6 }}>{c.description}</p>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #F0F0F0' }}>
                  <a href={`mailto:${c.contact}`} style={{ fontSize: 14, fontWeight: 700, color: c.iconColor, textDecoration: 'none' }}>{c.contact}</a>
                  <div style={{ display: 'inline-block', marginLeft: 12, padding: '3px 10px', background: c.color, color: c.iconColor, borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
                    {c.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Formulaire de contact</span>
              <h2 style={{ fontSize: 40, marginTop: 20, fontWeight: 800 }}>Envoyez-nous un message.</h2>

              {sent ? (
                <div style={{ marginTop: 40, padding: '40px', background: '#F0FDF4', borderRadius: 24, border: '1px solid #D1FAE5', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 999, background: '#0E47AB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon name="check" size={26} color="white" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800 }}>Message envoyé !</h3>
                  <p style={{ color: '#3A3A3A', marginTop: 12, lineHeight: 1.6 }}>Merci {form.name.split(' ')[0]}. Notre équipe vous répondra d'ici 24 heures ouvrées.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} style={{ marginTop: 24, padding: '12px 24px', background: '#0E47AB', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ marginTop: 40, display: 'grid', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', display: 'block', marginBottom: 8 }}>Nom complet *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Aminata Koné" style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 15, outline: 'none', boxSizing: 'border-box', color: '#0a0a0a' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', display: 'block', marginBottom: 8 }}>Adresse e-mail *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="aminata@exemple.ci" style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 15, outline: 'none', boxSizing: 'border-box', color: '#0a0a0a' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', display: 'block', marginBottom: 8 }}>Sujet *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 15, outline: 'none', boxSizing: 'border-box', color: form.subject ? '#0a0a0a' : '#9B9B9B', background: 'white', cursor: 'pointer' }}>
                      {subjects.map(s => <option key={s} value={s === subjects[0] ? '' : s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', display: 'block', marginBottom: 8 }}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Décrivez votre demande en détail…" rows={6} style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 15, outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit', color: '#0a0a0a' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px', width: 'fit-content' }}>
                    Envoyer le message
                    <Icon name="arrow" size={16} color="white" />
                  </button>
                  <p style={{ fontSize: 12, color: '#9B9B9B' }}>En envoyant ce formulaire, vous acceptez notre <NavLink to="/confidentialite" style={{ color: '#0E47AB' }}>politique de confidentialité</NavLink>.</p>
                </form>
              )}
            </div>

            <div style={{ display: 'grid', gap: 24 }}>
              <div style={{ padding: '36px', background: '#0a0a0a', borderRadius: 28, color: 'white' }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#D4A75B', marginBottom: 20 }}>● BUREAU PRINCIPAL</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Difero Fundry SARL</h3>
                <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
                  {[
                    ['globe', 'Immeuble CCIA, Avenue Marchand'],
                    ['globe', 'Plateau, Abidjan — Côte d\'Ivoire'],
                    ['chat', 'contact@society.ci'],
                    ['calendar', 'Lun – Ven · 8h00 – 18h00 GMT'],
                  ].map(([icon, text], i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <Icon name={icon} size={16} color="rgba(255,255,255,0.5)" />
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '28px 32px', background: '#F8F8F8', borderRadius: 24, border: '1px solid #EBEBEB' }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#6B6B6B', marginBottom: 16 }}>RÉSEAUX SOCIAUX</div>
                <div style={{ display: 'grid', gap: 12 }}>
                  {[
                    { name: 'LinkedIn', handle: '/company/society-ci', color: '#0A66C2' },
                    { name: 'Twitter / X', handle: '@SocietyCi', color: '#0a0a0a' },
                    { name: 'Instagram', handle: '@society.ci', color: '#E4405F' },
                    { name: 'Facebook', handle: 'Society Abidjan', color: '#1877F2' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? '1px solid #F0F0F0' : 'none' }}>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</span>
                      <span style={{ fontSize: 13, color: s.color, fontWeight: 600 }}>{s.handle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderRadius: 24, overflow: 'hidden', height: 220, background: 'linear-gradient(135deg, #0E47AB 0%, #0a2d6e 100%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <Icon name="globe" size={40} color="rgba(255,255,255,0.3)" />
                  <div style={{ marginTop: 16, fontSize: 16, fontWeight: 700 }}>Plateau, Abidjan</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>5°19'N, 4°01'O · Côte d'Ivoire</div>
                  <div style={{ marginTop: 20, padding: '8px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: 999, display: 'inline-block', fontSize: 12, fontWeight: 600 }}>
                    Voir sur Google Maps →
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 20, right: 20, width: 8, height: 8, borderRadius: 999, background: '#D4A75B', boxShadow: '0 0 0 4px rgba(212,167,91,0.3)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

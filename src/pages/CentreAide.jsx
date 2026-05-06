import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const categories = [
  { icon: 'users', title: 'Gestion des membres', count: 12, color: '#E8F0FD', iconColor: '#0E47AB' },
  { icon: 'money', title: 'Cotisations & paiements', count: 9, color: '#FDF6EC', iconColor: '#8B5E1A' },
  { icon: 'calendar', title: 'Événements & billetterie', count: 7, color: '#F0FDF4', iconColor: '#166534' },
  { icon: 'heart', title: 'Cagnottes & collectes', count: 6, color: '#FDF2F8', iconColor: '#9D174D' },
  { icon: 'bolt', title: 'API & intégrations', count: 11, color: '#F0F4FF', iconColor: '#3730A3' },
  { icon: 'shield', title: 'Compte & sécurité', count: 8, color: '#FFFBEB', iconColor: '#92400E' },
]

const faqs = [
  {
    question: 'Comment ajouter des membres à ma communauté ?',
    answer: 'Depuis votre tableau de bord, allez dans « Membres » puis cliquez sur « Inviter ». Vous pouvez inviter par e-mail, générer un lien d\'invitation ou importer une liste CSV. Chaque membre reçoit un e-mail d\'invitation personnalisé avec le nom de votre communauté.',
  },
  {
    question: 'Quels moyens de paiement sont acceptés pour les cotisations ?',
    answer: 'Society accepte Orange Money, Wave, MTN MoMo, Moov Money et les cartes bancaires Visa/Mastercard. Toutes les transactions sont sécurisées et les fonds sont reversés sur votre compte Mobile Money ou bancaire sous 48h ouvrées.',
  },
  {
    question: 'Comment mettre en place une cotisation mensuelle automatique ?',
    answer: 'Dans « Finances → Cotisations », créez un nouveau plan de cotisation, définissez le montant et la fréquence (mensuelle, trimestrielle, annuelle). Les membres sont automatiquement relancés 5 jours avant l\'échéance par SMS et notification push.',
  },
  {
    question: 'Puis-je créer des sous-groupes au sein de ma communauté ?',
    answer: 'Oui, les sous-groupes (ou « cercles ») sont disponibles à partir du plan Communauté. Ils permettent de segmenter vos membres par région, intérêt ou rôle, avec une gestion indépendante des cotisations et des communications.',
  },
  {
    question: 'Comment publier un événement et vendre des billets ?',
    answer: 'Allez dans « Événements → Créer un événement ». Renseignez le titre, la date, le lieu et le prix (gratuit ou payant). Une fois publié, Society génère automatiquement une page de billetterie et des QR codes pour l\'accueil le jour J.',
  },
  {
    question: 'Les données de mes membres sont-elles sécurisées ?',
    answer: 'Absolument. Toutes les données sont chiffrées (AES-256 au repos, TLS 1.3 en transit). Elles sont hébergées dans des datacenters africains. Vous pouvez exporter ou supprimer toutes les données à tout moment. Nous sommes conformes à la loi ivoirienne n° 2013-450.',
  },
  {
    question: 'Comment lancer une cagnotte pour ma communauté ?',
    answer: 'Dans « Finances → Cagnottes », cliquez sur « Nouvelle cagnotte ». Définissez un titre, un objectif en FCFA, une date de fin et une description. Partagez le lien unique de votre cagnotte sur WhatsApp, Facebook ou par e-mail en un clic.',
  },
  {
    question: 'Puis-je utiliser Society sans carte bancaire ?',
    answer: 'Oui. Le plan Starter est entièrement gratuit et ne nécessite aucun moyen de paiement. Pour les plans payants, vous pouvez régler par Orange Money ou Wave directement depuis l\'application, sans carte bancaire requise.',
  },
  {
    question: 'Comment générer un rapport d\'activité pour mes bailleurs ?',
    answer: 'Depuis « Rapports », sélectionnez la période souhaitée et le type de rapport (membres, finances, événements ou impact global). Exportez en PDF ou Excel en un clic. Les rapports incluent des graphiques et un résumé exécutif prêt à partager.',
  },
  {
    question: 'Que se passe-t-il si je dépasse la limite de membres de mon plan ?',
    answer: 'Nous vous prévenons par e-mail et notification à 80 % et 100 % de la capacité. Vous avez 15 jours pour passer au plan supérieur sans interruption de service. Aucune donnée n\'est perdue et vos membres ne sont pas affectés.',
  },
]

export default function CentreAide() {
  const [open, setOpen] = useState(null)
  const [search, setSearch] = useState('')

  const toggle = i => setOpen(open === i ? null : i)

  const filtered = faqs.filter(f =>
    f.question.toLowerCase().includes(search.toLowerCase()) ||
    f.answer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#0E47AB', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 450, height: 450, borderRadius: 999, background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: -40, left: 100, width: 200, height: 200, borderRadius: 999, background: 'rgba(212,167,91,0.2)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="eyebrow white">Centre d'aide</span>
          <h1 style={{ fontSize: 72, marginTop: 24, lineHeight: 0.95, color: 'white', maxWidth: 700, margin: '24px auto 0' }}>
            Comment pouvons-nous<br />
            <span style={{ color: '#D4A75B' }}>vous aider ?</span>
          </h1>
          <p style={{ fontSize: 18, marginTop: 24, color: 'rgba(255,255,255,0.75)', maxWidth: 500, margin: '24px auto 0' }}>
            Toutes les réponses sur Society, organisées par thème.
          </p>
          <div style={{ marginTop: 40, maxWidth: 580, margin: '40px auto 0', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }}>
              <Icon name="target" size={18} color="rgba(255,255,255,0.5)" />
            </div>
            <input
              type="text"
              placeholder="Rechercher une question… ex : « cotisation mensuelle »"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '18px 24px 18px 52px', borderRadius: 16, border: 'none', background: 'rgba(255,255,255,0.12)', color: 'white', fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
            {['Cotisations', 'Inviter des membres', 'Mobile Money', "Rapport d'impact", 'API'].map(tag => (
              <button key={tag} onClick={() => setSearch(tag)} style={{ padding: '7px 16px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px' }}>
        <div className="container">
          <span className="eyebrow">Catégories</span>
          <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>Parcourir par thème.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 40 }}>
            {categories.map((cat, i) => (
              <div key={i} style={{ padding: '28px 28px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={cat.icon} size={22} color={cat.iconColor} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{cat.title}</div>
                  <div style={{ fontSize: 13, color: '#9B9B9B', marginTop: 4 }}>{cat.count} articles</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Icon name="arrow" size={16} color="#9B9B9B" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Questions fréquentes</span>
              <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>
                {search ? `${filtered.length} résultat${filtered.length !== 1 ? 's' : ''} pour « ${search} »` : 'Les 10 questions les plus posées.'}
              </h2>
            </div>
            {search && (
              <button onClick={() => setSearch('')} style={{ padding: '10px 20px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="x" size={14} color="#0a0a0a" />
                Effacer
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {filtered.length === 0 && (
              <div style={{ padding: '48px', textAlign: 'center', background: 'white', borderRadius: 20 }}>
                <Icon name="target" size={40} color="#DEDEDE" />
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 16, color: '#6B6B6B' }}>Aucun résultat pour « {search} »</div>
                <p style={{ fontSize: 14, color: '#9B9B9B', marginTop: 8 }}>Essayez d'autres mots-clés ou <NavLink to="/contact" style={{ color: '#0E47AB', fontWeight: 600 }}>contactez notre support</NavLink>.</p>
              </div>
            )}
            {filtered.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 20, border: '1px solid #EBEBEB', overflow: 'hidden' }}>
                <button onClick={() => toggle(i)} style={{ width: '100%', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, textAlign: 'left' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', lineHeight: 1.4 }}>{faq.question}</span>
                  <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 999, background: open === i ? '#0E47AB' : '#F2F2F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={open === i ? 'x' : 'arrow'} size={14} color={open === i ? 'white' : '#0a0a0a'} />
                  </div>
                </button>
                {open === i && (
                  <div style={{ padding: '0 28px 24px', borderTop: '1px solid #F0F0F0' }}>
                    <p style={{ fontSize: 15, color: '#3A3A3A', lineHeight: 1.7, marginTop: 20 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 120px' }}>
        <div className="container">
          <div style={{ background: '#0a0a0a', borderRadius: 32, padding: '56px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 36, color: 'white', fontWeight: 800 }}>Vous n'avez pas trouvé votre réponse ?</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 16, lineHeight: 1.6 }}>
                Notre équipe support basée à Abidjan répond à toutes les questions en français. Temps de réponse moyen : 4 heures ouvrées.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              <NavLink to="/contact" className="btn btn-gold" style={{ fontSize: 16, justifyContent: 'center' }}>
                Contacter le support
                <Icon name="arrow" size={16} color="#0a0a0a" />
              </NavLink>
              <a href="https://discord.gg/society-ci" target="_blank" rel="noreferrer" style={{ padding: '14px 24px', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <Icon name="chat" size={16} color="white" />
                Communauté Discord
              </a>
              <div style={{ padding: '14px 24px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="calendar" size={16} color="#D4A75B" />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Support disponible Lun–Ven · 8h–18h GMT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

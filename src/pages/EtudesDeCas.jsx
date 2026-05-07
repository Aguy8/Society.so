import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const etudes = [
  {
    id: 1,
    type: 'ONG',
    nom: 'Hope Life CI',
    segment: 'Organisation humanitaire',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f11ebb3a745?auto=format&fit=crop&w=800&q=80',
    personne: 'Aminata Coulibaly',
    role: 'Directrice exécutive',
    lieu: 'Adjamé, Abidjan',
    challenge: 'Hope Life CI gérait 340 bénévoles et donateurs via WhatsApp et des tableurs Excel. Les relances de dons étaient manuelles, les rapports inexistants, et 30 % des promesses de dons ne se concrétisaient jamais.',
    solution: 'Déploiement de Society avec cagnottes récurrentes, tableau de bord des dons en temps réel et rapports d\'impact automatiques pour les bailleurs institutionnels.',
    avant: [
      { label: 'Taux de conversion dons', val: '34 %' },
      { label: 'Temps rapport mensuel', val: '12 h' },
      { label: 'Membres actifs', val: '120' },
    ],
    apres: [
      { label: 'Taux de conversion dons', val: '71 %' },
      { label: 'Temps rapport mensuel', val: '45 min' },
      { label: 'Membres actifs', val: '340' },
    ],
    quote: 'Society nous a permis de professionnaliser notre collecte de fonds et de convaincre un bailleur européen de financer notre programme. C\'est concret.',
    typeColor: '#0E47AB',
    typeBg: '#E8F0FD',
  },
  {
    id: 2,
    type: 'Mutuelle',
    nom: 'Femmes d\'Abobo',
    segment: 'Mutuelle de solidarité féminine',
    photo: 'https://images.unsplash.com/photo-1489424731084-a3d5bc15a39b?auto=format&fit=crop&w=800&q=80',
    personne: 'Roseline Gnagne',
    role: 'Présidente de la mutuelle',
    lieu: 'Abobo, Abidjan',
    challenge: 'La mutuelle regroupait 180 femmes commerçantes qui cotisaient 5 000 FCFA par mois. Les impayés atteignaient 28 % chaque mois, et les conflits liés aux enregistrements manuels étaient fréquents.',
    solution: 'Automatisation complète des cotisations mensuelles via Orange Money, avec rappels SMS 5 jours avant échéance et tableau de bord transparent accessible à toutes les membres.',
    avant: [
      { label: 'Taux d\'impayés', val: '28 %' },
      { label: 'Conflits mensuels', val: '8-12' },
      { label: 'Temps comptabilité', val: '6 h/sem' },
    ],
    apres: [
      { label: 'Taux d\'impayés', val: '4 %' },
      { label: 'Conflits mensuels', val: '0-1' },
      { label: 'Temps comptabilité', val: '30 min/sem' },
    ],
    quote: 'Maintenant toutes les femmes voient leur solde en temps réel. La confiance a augmenté et on a même pu accueillir 40 nouvelles membres.',
    typeColor: '#9D174D',
    typeBg: '#FDF2F8',
  },
  {
    id: 3,
    type: 'Alumni',
    nom: 'INPHB Network',
    segment: 'Réseau d\'anciens élèves',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    personne: 'Kofi Mensah',
    role: 'Président du réseau alumni',
    lieu: 'Yamoussoukro & Abidjan',
    challenge: "Le réseau des anciens de l'INPHB comptait 2 400 membres dispersés en Côte d'Ivoire et dans la diaspora. Les événements annuels étaient sous-fréquentés par manque de communication centralisée. La cotisation annuelle de 10 000 FCFA était collectée à seulement 18 %.",
    solution: 'Création d\'un espace communautaire privé avec annuaire des membres, billetterie pour le gala annuel, et système de cotisation par Mobile Money ou carte bancaire (diaspora).',
    avant: [
      { label: 'Taux de cotisation', val: '18 %' },
      { label: 'Participants gala', val: '120' },
      { label: 'Membres actifs/an', val: '200' },
    ],
    apres: [
      { label: 'Taux de cotisation', val: '52 %' },
      { label: 'Participants gala', val: '480' },
      { label: 'Membres actifs/an', val: '1 100' },
    ],
    quote: 'Notre gala 2026 a réuni 4 fois plus de personnes que l\'édition précédente. Society nous a redonné une vraie vie associative.',
    typeColor: '#166534',
    typeBg: '#F0FDF4',
  },
  {
    id: 4,
    type: 'Leader',
    nom: 'Aissatou D. — Coach',
    segment: 'Leader & coach communautaire',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    personne: 'Aissatou Diallo',
    role: 'Coach & facilitatrice',
    lieu: 'Cocody, Abidjan',
    challenge: 'Aissatou animait une communauté de 600 femmes entrepreneures via plusieurs groupes WhatsApp. Aucune monétisation possible, pas de moyen de filtrer les membres sérieux des curieux, et une dispersion totale du contenu.',
    solution: 'Migration vers Society avec accès par abonnement mensuel de 3 500 FCFA, bibliothèque de ressources, sessions live et programme de mentorat peer-to-peer entre membres.',
    avant: [
      { label: 'Revenus communauté', val: '0 FCFA' },
      { label: 'Taux d\'engagement', val: '12 %' },
      { label: 'Membres premium', val: '0' },
    ],
    apres: [
      { label: 'Revenus communauté', val: '1,8 M FCFA/mois' },
      { label: 'Taux d\'engagement', val: '68 %' },
      { label: 'Membres premium', val: '520' },
    ],
    quote: 'J\'ai transformé ma passion en business viable en 4 mois. Society m\'a donné les outils que j\'attendais depuis des années.',
    typeColor: '#8B5E1A',
    typeBg: '#FDF6EC',
  },
]

export default function EtudesDeCas() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: 100, width: 400, height: 400, borderRadius: 999, background: '#0E47AB', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -40, width: 300, height: 300, borderRadius: 999, background: '#D4A75B', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow white">Etudes de cas</span>
          <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Ce que Society change<br />
            <span style={{ color: '#D4A75B' }}>vraiment sur le terrain.</span>
          </h1>
          <p style={{ fontSize: 19, marginTop: 32, maxWidth: 620, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)' }}>
            Quatre communautes ivoiriennes. Quatre transformations mesurables. Des chiffres reels, des temoignages authentiques.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
            {[['4', 'Communautes etudiees'], ['+180 %', 'Engagement moyen'], ['28→4 %', 'Reduction des impayes'], ['4 mois', 'Temps moyen de transformation']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 32, fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 80 }}>
            {etudes.map((e, i) => (
              <div key={e.id} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 0, border: '1px solid #EBEBEB', borderRadius: 32, overflow: 'hidden', background: 'white' }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative' }}>
                  <img src={e.photo} alt={e.personne} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 480, display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                    <div style={{ display: 'inline-block', padding: '6px 14px', background: e.typeBg, color: e.typeColor, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', marginBottom: 16 }}>
                      {e.type.toUpperCase()}
                    </div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>{e.personne}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>{e.role} · {e.lieu}</div>
                  </div>
                </div>

                <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: i % 2 === 0 ? '1px solid #EBEBEB' : 'none', borderRight: i % 2 !== 0 ? '1px solid #EBEBEB' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: e.typeColor, marginBottom: 12 }}>● {e.nom} · {e.segment}</div>
                    <h2 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>Le defi</h2>
                    <p style={{ fontSize: 15, color: '#3A3A3A', marginTop: 12, lineHeight: 1.65 }}>{e.challenge}</p>
                    <h2 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginTop: 32 }}>La solution</h2>
                    <p style={{ fontSize: 15, color: '#3A3A3A', marginTop: 12, lineHeight: 1.65 }}>{e.solution}</p>
                  </div>

                  <div style={{ marginTop: 40 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
                      <div style={{ padding: '20px', background: '#F8F8F8', borderRadius: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: '#9B9B9B', marginBottom: 12 }}>AVANT SOCIETY</div>
                        {e.avant.map((m, j) => (
                          <div key={j} style={{ marginBottom: 8 }}>
                            <div style={{ fontSize: 18, fontWeight: 800, color: '#0a0a0a' }}>{m.val}</div>
                            <div style={{ fontSize: 11, color: '#9B9B9B' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '20px', background: e.typeBg, borderRadius: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: e.typeColor, marginBottom: 12 }}>APRES SOCIETY</div>
                        {e.apres.map((m, j) => (
                          <div key={j} style={{ marginBottom: 8 }}>
                            <div style={{ fontSize: 18, fontWeight: 800, color: e.typeColor }}>{m.val}</div>
                            <div style={{ fontSize: 11, color: e.typeColor, opacity: 0.7 }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote style={{ padding: '20px 24px', background: '#0a0a0a', borderRadius: 16, borderLeft: `4px solid ${e.typeColor}`, margin: 0 }}>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>{e.quote}</p>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>— {e.personne}, {e.role}</div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px', background: '#0E47AB' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Votre communaute sera la prochaine etude de cas.
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 20, maxWidth: 500, margin: '20px auto 0', lineHeight: 1.6 }}>
            Rejoignez les centaines de leaders qui transforment leur communaute avec Society.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">
              Commencer gratuitement
              <Icon name="arrow" size={16} color="#0a0a0a" />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline btn-xl" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Parler a un expert
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

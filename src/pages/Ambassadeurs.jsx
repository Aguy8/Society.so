import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const PERKS = [
  { icon: 'money', color: '#0E47AB', bg: '#E8EFFC', t: '20 % de commission', d: 'Sur chaque abonnement payant des communautés que vous referrez, pendant 12 mois.' },
  { icon: 'star', color: '#D4A75B', bg: '#F6EDD8', t: 'Accès Pro gratuit', d: 'Un compte Society Pro entièrement offert pour vous, tant que vous êtes ambassadeur actif.' },
  { icon: 'spark', color: '#5C2E91', bg: '#F3F0FF', t: 'Formation certifiante', d: 'Un programme de certification Society Leader pour renforcer vos compétences en gestion communautaire.' },
  { icon: 'users', color: '#166534', bg: '#DCFCE7', t: 'Réseau ambassadeurs', d: 'Accès au groupe privé des ambassadeurs Society — échanges, stratégies, soutien mutuel.' },
  { icon: 'chart', color: '#9D174D', bg: '#FDF2F8', t: 'Dashboard de suivi', d: 'Tableau de bord en temps réel : commissions, filleuls actifs, volume généré.' },
  { icon: 'globe', color: '#0a0a0a', bg: '#F2F2F2', t: 'Visibilité & co-branding', d: 'Votre profil mis en avant sur le site Society et dans nos communications officielles.' },
]

const TEMOINS = [
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', n: 'Sébastien K.', r: 'Ambassadeur — Abidjan', gain: '840 000 FCFA/mois', q: 'J\'ai simplement partagé Society avec les responsables d\'associations que je connaissais. En 3 mois, 12 communautés avaient rejoint la plateforme.' },
  { img: 'https://images.unsplash.com/photo-1531123897727-8f11ebb3a745?auto=format&fit=crop&w=400&q=80', n: 'Mariam D.', r: 'Ambassadrice — Dakar', gain: '1,2 M FCFA/mois', q: 'Je suis consultante en développement associatif. Society est devenu un outil que je recommande systématiquement à mes clients.' },
  { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', n: 'Kofi A.', r: 'Ambassadeur — Accra', gain: '620 000 FCFA/mois', q: 'Le dashboard ambassadeur est transparent. Je vois exactement ce que je gagne et comment mes filleuls progressent.' },
]

export default function Ambassadeurs() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: '#D4A75B', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(212,167,91,0.15)', border: '1px solid rgba(212,167,91,0.3)', borderRadius: 999, marginBottom: 32 }}>
            <span style={{ color: '#D4A75B', fontWeight: 700, fontSize: 13 }}>● Programme ouvert</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Devenez<br /><span style={{ color: '#D4A75B' }}>Ambassadeur</span><br />Society.
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Partagez Society. Gagnez 20 % de commission sur chaque abonnement. Construisez un revenu passif tout en aidant les communautés africaines à se structurer.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <a href="#candidater" className="btn btn-gold btn-xl">Je deviens ambassadeur <Icon name="arrow" size={16} color="#0a0a0a" /></a>
            <a href="#fonctionnement" className="btn btn-outline-white btn-xl">Comment ça marche</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#D4A75B' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['20 %', 'Commission récurrente'], ['12 mois', 'Durée des commissions'], ['0 €', 'Pour rejoindre'], ['Illimité', 'Filleuls possibles']].map(([v, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 56, fontWeight: 900, color: '#0a0a0a', letterSpacing: '-0.04em' }}>{v}</div>
                <div style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)', marginTop: 4, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" style={{ padding: '100px 64px' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Comment ça marche</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Simple. Transparent. Rémunérateur.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { n: '01', t: 'Candidatez', d: 'Remplissez le formulaire ci-dessous. Notre équipe vous répond sous 48h.' },
              { n: '02', t: 'Recevez votre lien', d: 'Un lien de parrainage unique, un dashboard, une formation de démarrage.' },
              { n: '03', t: 'Recommandez', d: 'Partagez Society à des leaders communautaires autour de vous.' },
              { n: '04', t: 'Gagnez', d: '20 % de commission chaque mois sur les abonnements de vos filleuls.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div style={{ padding: 32, background: '#F8F8F8', borderRadius: 24 }}>
                  <div style={{ fontSize: 72, fontWeight: 900, color: '#E8EFFC', lineHeight: 1 }}>{s.n}</div>
                  <h3 style={{ fontSize: 20, marginTop: 12 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, marginTop: 10, lineHeight: 1.6, color: '#3A3A3A' }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Avantages</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Tout ce que vous gagnez.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PERKS.map((p, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div className="hover-lift" style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: p.bg, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                    <Icon name={p.icon} size={24} color={p.color} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 10 }}>{p.t}</h3>
                  <p style={{ fontSize: 14, color: '#3A3A3A', lineHeight: 1.6 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Témoignages</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Ils gagnent déjà.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEMOINS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ padding: 32, background: '#0a0a0a', borderRadius: 24, color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <img src={t.img} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} alt={t.n} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{t.n}</div>
                      <div style={{ fontSize: 12, color: '#6B6B6B' }}>{t.r}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#D4A75B', marginBottom: 16 }}>{t.gain}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, fontStyle: 'italic' }}>« {t.q} »</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="candidater" style={{ padding: '100px 64px 120px', background: '#0E47AB' }}>
        <div className="container" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800 }}>Candidater au programme.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginTop: 16, lineHeight: 1.6 }}>
              Réservé aux personnes qui ont un réseau dans l'écosystème communautaire africain.
            </p>
            <div style={{ display: 'grid', gap: 14, marginTop: 40, textAlign: 'left' }}>
              <input placeholder="Votre nom complet" style={{ padding: '18px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }} />
              <input placeholder="Votre email" type="email" style={{ padding: '18px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }} />
              <textarea placeholder="Décrivez votre réseau et pourquoi vous voulez devenir ambassadeur (3–5 lignes)..." rows={4} style={{ padding: '18px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
              <button className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Envoyer ma candidature <Icon name="arrow" size={16} color="#0a0a0a" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}

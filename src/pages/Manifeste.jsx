import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

const PRINCIPES = [
  {
    n: '01',
    t: 'Vous possédez votre communauté.',
    d: 'Les membres que vous construisez, le contenu que vous publiez, les données que vous générez — tout vous appartient. Aucun algorithme ne décide qui voit quoi. Aucune plateforme ne peut vous couper de vos membres. Society est l\'outil. Vous êtes le propriétaire.',
  },
  {
    n: '02',
    t: 'L\'Afrique mérite sa propre infrastructure.',
    d: 'Circle est américain. Facebook est pour le monde entier — donc pour personne en particulier. Les mutuelles ne sont pas des Facebook Groups. Les tontines ne se gèrent pas avec Excel. La diaspora ne paye pas avec Venmo. Nous avons construit Society pour nos réalités : Mobile Money, langues locales, usage mobile-first, résilience réseau.',
  },
  {
    n: '03',
    t: 'La communauté est le moteur économique.',
    d: 'Partout en Afrique, des réseaux d\'entraide, de solidarité et d\'investissement collectif font tourner l\'économie informelle. Ces flux existent depuis des générations. Society leur donne une infrastructure numérique digne, sans les formaliser à l\'excès ni les trahir.',
  },
  {
    n: '04',
    t: 'L\'impact se mesure, ou il ne compte pas.',
    d: 'Nous croyons que les actions des communautés africaines changent des vies chaque jour. Mais sans mesure, sans preuve, sans visibilité — ces actions restent invisibles pour les bailleurs, les partenaires, le monde. Society documente, automatiquement.',
  },
  {
    n: '05',
    t: 'Simple d\'abord. Puissant en dessous.',
    d: 'Le trésorier d\'une mutuelle de 50 femmes à Abobo ne doit pas avoir besoin d\'une formation de 3 jours. L\'interface de Society doit être aussi simple que WhatsApp, avec la puissance d\'un outil professionnel en dessous. Nous ne sacrifions pas l\'un pour l\'autre.',
  },
  {
    n: '06',
    t: 'Bâti en Afrique. Pour le monde.',
    d: 'Abidjan est notre quartier général. Mais les communautés africaines couvrent la planète — diaspora en France, au Canada, aux États-Unis, au Golfe. Society est conçu pour la communauté transnationale, celle qui cotise depuis Paris et se réunit à Bouaké.',
  },
]

export default function Manifeste() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <span className="eyebrow dark">Notre manifeste</span>
            <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 1000 }}>
              Nous croyons que<br />
              les communautés<br />
              <span style={{ color: '#D4A75B' }}>africaines méritent</span><br />
              mieux.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 22, marginTop: 40, maxWidth: 680, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)' }}>
              Ce texte explique pourquoi nous avons créé Society, ce en quoi nous croyons, et les principes qui guideront toujours nos décisions — même quand c'est difficile.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '100px 64px 120px' }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <Reveal>
              <p style={{ fontSize: 20, lineHeight: 1.8, color: '#3A3A3A', marginBottom: 64 }}>
                Il y a une vérité que tout leader communautaire africain connaît : <strong style={{ color: '#0a0a0a' }}>gérer une communauté, c'est un travail à plein temps.</strong> Et pourtant, les outils qui existent ne sont pas faits pour eux. WhatsApp pour communiquer. Excel pour les cotisations. Facebook pour la visibilité. Donorbox pour les dons. Et cinq autres outils par-dessus.
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.8, color: '#3A3A3A', marginBottom: 80 }}>
                Society est notre réponse. Et ce manifeste explique ce que nous croyons.
              </p>
            </Reveal>

            <div style={{ display: 'grid', gap: 64 }}>
              {PRINCIPES.map((p, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32 }}>
                    <div style={{ fontSize: 72, fontWeight: 900, color: '#E8EFFC', lineHeight: 1 }}>{p.n}</div>
                    <div>
                      <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.2, color: '#0a0a0a', marginBottom: 16 }}>{p.t}</h2>
                      <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>{p.d}</p>
                    </div>
                  </div>
                  {i < PRINCIPES.length - 1 && <div style={{ height: 1, background: '#E5E5E5', marginTop: 64 }} />}
                </Reveal>
              ))}
            </div>

            <Reveal style={{ marginTop: 80, padding: '48px 56px', background: '#0E47AB', borderRadius: 28, color: 'white', textAlign: 'center' }}>
              <blockquote style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                « L'infrastructure numérique des communautés africaines est la prochaine grande opportunité. Nous la construisons. »
              </blockquote>
              <div style={{ marginTop: 24, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>— L'équipe Difero Fundry, Abidjan</div>
              <NavLink to="/inscription" className="btn btn-gold btn-lg" style={{ marginTop: 32, display: 'inline-flex' }}>
                Rejoindre Society
              </NavLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

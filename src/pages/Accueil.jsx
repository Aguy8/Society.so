import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Marquee from '../components/Marquee.jsx'
import Icon from '../components/Icon.jsx'

export default function Accueil() {
  return (
    <div className="page">
      <Nav active="Accueil" />

      {/* HERO */}
      <section style={{ padding: '100px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px 6px 6px', background: '#F2F2F2', borderRadius: 999, marginBottom: 32 }}>
                <span style={{ background: '#0E47AB', color: 'white', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>BIENTÔT</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>Rejoignez la liste d'attente</span>
              </div>
              <h1 className="hero-title">
                Donnez<br />
                <span style={{ color: '#0E47AB' }}>une vraie vie</span><br />
                à votre communauté.
              </h1>
              <p style={{ fontSize: 20, marginTop: 32, maxWidth: 540, lineHeight: 1.5, color: '#3A3A3A' }}>
                Society est la plateforme tout-en-un qui aide les associations, ONG, mutuelles, alumni et leaders africains à <b style={{ color: '#0a0a0a' }}>structurer, engager et monétiser</b> leur communauté — depuis un seul espace.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
                <NavLink to="/inscription" className="btn btn-primary btn-xl">
                  Inscrire ma communauté
                  <Icon name="arrow" size={16} color="white" />
                </NavLink>
                <button className="btn btn-outline btn-xl">
                  <Icon name="play" size={14} />
                  Voir la démo (2 min)
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 56, flexWrap: 'wrap' }}>
                <div className="avatars">
                  {['https://images.unsplash.com/photo-1531123897727-8f11ebb3a745?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1489424731084-a3d5bc15a39b?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'].map(img => (
                    <div key={img} style={{ backgroundImage: `url(${img})` }} />
                  ))}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>+ 1 200 leaders communautaires</div>
                  <div style={{ fontSize: 13, color: '#6B6B6B' }}>déjà sur la liste d'attente bêta.</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div style={{ position: 'relative', height: 680, minHeight: 480 }}>
              <div style={{ position: 'absolute', inset: 0, background: '#0E47AB', borderRadius: 40, transform: 'rotate(-3deg)' }} />
              <div style={{ position: 'absolute', top: 30, right: 40, width: 200, height: 200, background: '#D4A75B', borderRadius: 999 }} />
              <div style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', width: 280, aspectRatio: '9 / 19.5', borderRadius: 42, border: '10px solid #0a0a0a', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.3)', background: '#0a0a0a' }}>
                <img src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=400&q=80" alt="Society app" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ position: 'absolute', top: 120, left: -20, background: 'white', padding: 16, borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.15)', width: 200 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFD9DE', display: 'grid', placeItems: 'center' }}>
                    <Icon name="heart" size={18} color="#C23B5A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#6B6B6B' }}>Cagnotte active</div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>Cansein Fondation</div>
                  </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em' }}>3 240 000 <span style={{ fontSize: 12, color: '#6B6B6B' }}>FCFA</span></div>
                <div style={{ height: 6, background: '#F2F2F2', borderRadius: 999, overflow: 'hidden', marginTop: 8 }}>
                  <div style={{ width: '64%', height: '100%', background: '#0E47AB' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 100, right: -10, background: 'white', padding: 18, borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.15)', width: 220 }}>
                <div style={{ fontSize: 12, color: '#6B6B6B', marginBottom: 6 }}>Cotisations du mois</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>184</span>
                  <span style={{ fontSize: 13, color: '#0E47AB', fontWeight: 600 }}>/200 membres</span>
                </div>
                <div style={{ display: 'flex', gap: 3, marginTop: 12 }}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} style={{ flex: 1, height: 24, borderRadius: 3, background: i < 18 ? '#0E47AB' : '#E5E5E5' }} />
                  ))}
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 40, left: 20, background: '#0a0a0a', color: 'white', padding: '14px 18px', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: '#3DDC84' }} />
                <span style={{ fontSize: 13, fontWeight: 500 }}>12 nouveaux membres</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* PROBLÈME / SOLUTION */}
      <section style={{ padding: '120px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Le problème</span>
              <h2 style={{ marginTop: 24 }}>10 outils pour gérer une communauté.<br /><span style={{ color: '#6B6B6B' }}>Aucun ne fait le travail.</span></h2>
              <p style={{ fontSize: 18, marginTop: 28, maxWidth: 480 }}>
                WhatsApp pour communiquer. Excel pour les cotisations. Google Forms pour les inscriptions. Facebook pour la visibilité. Mobile money pour collecter. Et toujours rien à montrer aux bailleurs.
              </p>
              <p style={{ fontSize: 18, marginTop: 16, maxWidth: 480, color: '#0a0a0a', fontWeight: 600 }}>
                Les leaders communautaires africains perdent en moyenne 5 à 10h par semaine en gestion manuelle.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14 }}>
              {['WhatsApp', 'Excel', 'Forms', 'Facebook', 'Donorbox', 'Mailchimp', 'Eventbrite', 'Google Drive'].map((n, i) => (
                <div key={i} style={{ padding: 20, background: 'white', borderRadius: 16, position: 'relative' }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{n}</div>
                  <div style={{ position: 'absolute', top: 14, right: 14, width: 22, height: 22, borderRadius: '50%', background: '#FEE', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>×</div>
                </div>
              ))}
              <div style={{ gridColumn: 'span 2', padding: 24, background: '#0E47AB', borderRadius: 16, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>Society</div>
                  <div style={{ opacity: 0.85, fontSize: 13 }}>Un seul espace. Tout intégré.</div>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#D4A75B', color: '#0a0a0a', display: 'grid', placeItems: 'center', fontWeight: 700 }}>✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ padding: '140px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">5 Modules</span>
              <h2 style={{ marginTop: 24, maxWidth: 800 }}>Tout ce qu'il faut, là où il faut.</h2>
            </div>
            <NavLink to="/fonctionnalites" className="btn btn-outline">Explorer en détail <Icon name="arrow" size={14} /></NavLink>
          </div>

          <div className="modules-grid">
            <div className="module-card module-blue" style={{ gridColumn: 'span 7' }}>
              <div>
                <div className="module-tag" style={{ background: 'rgba(255,255,255,0.15)' }}>01 — Gestion communautaire</div>
                <h3 style={{ fontSize: 48, lineHeight: 0.95, color: 'white', maxWidth: 440, marginTop: 16 }}>Vos membres,<br />parfaitement organisés.</h3>
                <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.85)', fontSize: 16, maxWidth: 440 }}>Profils, segmentation, rôles, communication ciblée par sous-groupes. Fini les listes WhatsApp en pagaille.</p>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Base de données', 'Sous-groupes', 'Rôles & permissions', 'Tableau de bord'].map(t => (
                  <span key={t} style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.12)', borderRadius: 999, fontSize: 13, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="module-card module-gold" style={{ gridColumn: 'span 5' }}>
              <div>
                <div className="module-tag" style={{ background: 'rgba(0,0,0,0.1)', color: '#3a2a0c' }}>02 — Monétisation</div>
                <h3 style={{ fontSize: 38, lineHeight: 0.95, color: '#0a0a0a', marginTop: 16 }}>Transformez l'énergie en flux.</h3>
                <p style={{ marginTop: 20, color: '#3a2a0c', fontSize: 15 }}>Cagnottes, cotisations, billetterie, abonnements — paiement Mobile Money intégré.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {['Orange Money', 'Wave', 'MTN MoMo', 'Banques', 'Cartes prépayées', 'Flooz'].map(p => (
                  <div key={p} style={{ background: 'white', padding: '10px 6px', borderRadius: 12, fontSize: 11, fontWeight: 600, textAlign: 'center' }}>{p}</div>
                ))}
              </div>
            </div>

            <div className="module-card module-grey" style={{ gridColumn: 'span 4' }}>
              <div className="module-tag" style={{ background: 'white' }}>03 — Mise en relation</div>
              <h3 style={{ fontSize: 28, marginTop: 12 }}>L'algorithme qui connecte.</h3>
              <p style={{ marginTop: 12, fontSize: 15 }}>Besoins ↔ ressources. Bénévoles, expertises, partenaires RSE.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
                <div style={{ display: 'flex' }}>
                  {['https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80'].map((img, i) => (
                    <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', backgroundImage: `url(${img})`, backgroundSize: 'cover', border: '2px solid white', marginLeft: i ? -10 : 0 }} />
                  ))}
                </div>
                <div style={{ padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>+ 12 matchs</div>
              </div>
            </div>

            <div className="module-card module-dark" style={{ gridColumn: 'span 4' }}>
              <div className="module-tag" style={{ background: 'rgba(255,255,255,0.15)' }}>04 — Visibilité & Impact</div>
              <h3 style={{ fontSize: 28, color: 'white', marginTop: 12 }}>Rapports d'impact, automatiquement.</h3>
              <div style={{ marginTop: 20, padding: 16, background: 'rgba(255,255,255,0.08)', borderRadius: 12 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Bénéficiaires touchés</div>
                <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em' }}>14 290</div>
                <div style={{ fontSize: 12, color: '#3DDC84' }}>↑ 28 % ce trimestre</div>
              </div>
            </div>

            <div className="module-card module-gradient" style={{ gridColumn: 'span 4' }}>
              <div className="module-tag" style={{ background: 'rgba(255,255,255,0.6)' }}>05 — Espace Leader</div>
              <h3 style={{ fontSize: 28, marginTop: 12 }}>Votre audience.<br />Votre algorithme.</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, padding: '12px 14px', background: 'rgba(255,255,255,0.7)', borderRadius: 14, backdropFilter: 'blur(10px)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>Aïssatou D.</div>
                  <div style={{ fontSize: 12, color: '#6B6B6B' }}>+ 4 200 fans abonnés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section style={{ padding: '140px 64px', background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 80px' }}>
            <span className="eyebrow dark">Pour qui ?</span>
            <h2 style={{ marginTop: 24, color: 'white', fontSize: 80 }}>Society s'adapte<br />à votre <span style={{ color: '#D4A75B' }}>réalité</span>.</h2>
          </div>
          <div className="segments-grid">
            {[
              { n: 'ONG & Associations', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80', d: 'Coordonnez vos actions, prouvez votre impact, sécurisez vos bailleurs.', count: '20 000+' },
              { n: 'Mutuelles & Tontines', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80', d: 'Automatisez les cotisations, sécurisez les flux, fini les conflits.', count: '15 000+' },
              { n: 'Alumni & Jeunesse', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', d: 'Reconnectez la diaspora, organisez événements et mentorat.', count: '8 000+' },
              { n: 'Réseaux Pro', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', d: 'Espaces collaboratifs, contenus premium, mise en relation.', count: '6 000+' },
              { n: 'Groupes religieux', img: 'https://images.unsplash.com/photo-1514746676280-63eff6c01a95?auto=format&fit=crop&w=800&q=80', d: 'Communication multi-paroisses, collectes traçables, fidèles engagés.', count: '12 000+' },
              { n: 'Leaders & Influenceurs', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', d: 'Communauté propriétaire, monétisation directe, indépendance.', count: '4 000+' },
            ].map((s, i) => (
              <div key={i} style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '4/5', backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
                <div style={{ position: 'absolute', top: 20, right: 20, padding: '6px 12px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{s.count} en CI</div>
                <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                  <h3 style={{ color: 'white', fontSize: 28, lineHeight: 1 }}>{s.n}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 10, fontSize: 14 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '120px 64px', background: '#0E47AB', color: 'white' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow white">Marché</span>
              <h2 style={{ marginTop: 24, color: 'white', fontSize: 72 }}>Une opportunité de <span style={{ color: '#D4A75B' }}>30 M€</span>.</h2>
              <p style={{ fontSize: 18, marginTop: 24, color: 'rgba(255,255,255,0.85)', maxWidth: 480 }}>
                85 % des Ivoiriens sont membres d'au moins un groupe communautaire. Seulement 10 % disposent d'un outil numérique adapté.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                { n: '85 %', l: 'des Ivoiriens membres d\'un groupe' },
                { n: '+150 K', l: 'communautés en Côte d\'Ivoire' },
                { n: '10 %', l: 'seulement disposent d\'un outil numérique' },
                { n: '+25 %', l: 'croissance annuelle du marché' },
              ].map((s, i) => (
                <div key={i} style={{ padding: 32, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#D4A75B' }}>{s.n}</div>
                  <div style={{ marginTop: 12, color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="témoin" />
            </div>
            <div>
              <span className="eyebrow">Ils nous font confiance</span>
              <blockquote style={{ margin: '32px 0 0', fontSize: 36, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em' }}>
                « Avant Society, je passais mes week-ends à relancer 200 cotisantes sur WhatsApp. Aujourd'hui, je suis le suivi en temps réel — et j'ai du temps pour <span style={{ color: '#0E47AB' }}>vraiment animer</span> notre mutuelle. »
              </blockquote>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>Awa K.</div>
                  <div style={{ color: '#6B6B6B', fontSize: 15 }}>Présidente — Mutuelle des Femmes d'Abobo</div>
                </div>
                <div style={{ flex: 1, height: 1, background: '#E5E5E5' }} />
                <div style={{ fontSize: 13, color: '#6B6B6B' }}>Bêta-testeuse — Mutuelle des Femmes d'Abobo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ background: '#0a0a0a', borderRadius: 40, padding: '80px 64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#0E47AB', opacity: 0.6, filter: 'blur(80px)' }} />
            <div style={{ position: 'relative', zIndex: 2 }} className="cta-grid">
              <div>
                <h2 style={{ color: 'white', fontSize: 64 }}>Prêt à donner une<br /><span style={{ color: '#D4A75B' }}>vraie voix</span> à votre<br />communauté ?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginTop: 24, maxWidth: 480 }}>
                  Inscrivez votre communauté en moins de 5 minutes. Accès gratuit pendant la phase bêta — sans carte bancaire.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <NavLink to="/inscription" className="btn btn-gold btn-xl" style={{ justifyContent: 'space-between', padding: '24px 32px' }}>
                  <span>Inscrire ma communauté</span>
                  <Icon name="arrow" size={18} color="#0a0a0a" />
                </NavLink>
                <NavLink to="/tarifs" className="btn btn-outline-white btn-xl" style={{ justifyContent: 'space-between', padding: '24px 32px' }}>
                  <span>Voir les tarifs</span>
                  <Icon name="arrow" size={18} color="white" />
                </NavLink>
                <div style={{ marginTop: 8, color: 'rgba(255,255,255,0.6)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <Icon name="check" size={14} color="#3DDC84" /> 5 minutes pour démarrer
                  <span style={{ margin: '0 8px' }}>·</span>
                  <Icon name="check" size={14} color="#3DDC84" /> Aucune carte bancaire
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

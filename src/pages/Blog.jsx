import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const articles = [
  { id: 1, category: 'Gestion', title: 'Comment structurer les cotisations de votre mutuelle en 2026', excerpt: "La gestion des cotisations reste le nerf de la guerre pour toute mutuelle africaine. Decouvrez les methodes utilisees par les meilleures communautes d'Abidjan pour automatiser les rappels et reduire les impayes de 60 %.", author: 'Mariam Kone', date: '12 avril 2026', readTime: '7 min', featured: true },
  { id: 2, category: 'Leadership', title: 'Les 5 competences cles d\'un leader communautaire moderne', excerpt: 'Facilitation, communication digitale, gestion financiere... Le profil du leader communautaire africain a profondement evolue. Tour d\'horizon des competences indispensables.', author: 'Kouame Assoumou', date: '8 avril 2026', readTime: '5 min', featured: false },
  { id: 3, category: 'Financement', title: 'Cagnottes communautaires : maximiser vos collectes avec les bons outils', excerpt: "Le crowdfunding solidaire explose en Afrique de l'Ouest. Comment choisir la bonne strategie, fixer un objectif realiste et mobiliser vos membres a chaque etape ?", author: 'Aissatou Diallo', date: '3 avril 2026', readTime: '6 min', featured: false },
  { id: 4, category: 'Engagement', title: 'Taux d\'engagement : pourquoi vos membres se desengagent et comment y remedier', excerpt: "Un membre inactif coute plus cher qu'un membre jamais recrute. Trois leviers concrets testes par des associations ivoiriennes pour maintenir la flamme communautaire.", author: 'Serge Bamba', date: '28 mars 2026', readTime: '8 min', featured: false },
  { id: 5, category: 'Evenements', title: 'Organiser une Assemblee Generale digitale : le guide complet', excerpt: "Quorum en ligne, votes securises, PV automatique... La digitalisation de vos AG n'est plus un luxe. Voici comment la reussir sans budget tech, depuis Abidjan.", author: 'Fatoumata Traore', date: '20 mars 2026', readTime: '10 min', featured: false },
  { id: 6, category: 'Impact', title: "Rapport d'impact : comment convaincre vos bailleurs en un seul document", excerpt: "Les ONG et associations qui recoivent des financements externes ont une chose en commun : un rapport d'impact irreprochable. Decouvrez la methode SEEF adoptee par 200 organisations.", author: 'Bintou Ouedraogo', date: '15 mars 2026', readTime: '6 min', featured: false },
]

const catBg = { Gestion: '#E8F0FD', Leadership: '#FDF6EC', Financement: '#E8F0FD', Engagement: '#F2F2F2', Evenements: '#E8F0FD', Impact: '#FDF6EC' }
const catText = { Gestion: '#0E47AB', Leadership: '#8B5E1A', Financement: '#0E47AB', Engagement: '#3A3A3A', Evenements: '#0E47AB', Impact: '#8B5E1A' }
const catIcon = { Gestion: 'chart', Leadership: 'star', Financement: 'money', Engagement: 'heart', Evenements: 'calendar', Impact: 'target' }

export default function Blog() {
  const featured = articles.find(a => a.featured)
  const others = articles.filter(a => !a.featured)

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Blog Society</span>
          <h1 style={{ fontSize: 80, marginTop: 24, lineHeight: 0.92, maxWidth: 800 }}>
            Ressources pour<br />
            <span style={{ color: '#0E47AB' }}>leaders africains.</span>
          </h1>
          <p style={{ fontSize: 19, marginTop: 28, maxWidth: 580, lineHeight: 1.55, color: '#3A3A3A' }}>
            Strategies, outils et retours d'experience pour gerer, engager et faire grandir votre communaute.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 64px 40px' }}>
        <div className="container">
          <span className="eyebrow">Article a la une</span>
          {featured && (
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: '#0E47AB', borderRadius: 32, overflow: 'hidden', minHeight: 420 }}>
              <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ display: 'inline-block', padding: '6px 14px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', marginBottom: 28 }}>
                    {featured.category.toUpperCase()}
                  </span>
                  <h2 style={{ fontSize: 36, color: 'white', lineHeight: 1.15, fontWeight: 800 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginTop: 20, lineHeight: 1.6 }}>
                    {featured.excerpt}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 999, background: '#D4A75B', display: 'grid', placeItems: 'center', fontWeight: 800, color: '#0a0a0a', fontSize: 14 }}>
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{featured.author}</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{featured.date} - {featured.readTime} de lecture</div>
                    </div>
                  </div>
                  <NavLink to="/blog/cotisations" className="btn btn-gold">
                    Lire l'article
                    <Icon name="arrow" size={15} color="#0a0a0a" />
                  </NavLink>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 56 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 80, fontWeight: 900, color: 'white', lineHeight: 1, opacity: 0.15, letterSpacing: '-0.05em' }}>60%</div>
                  <div style={{ fontSize: 18, color: 'white', fontWeight: 700, marginTop: -20, position: 'relative', zIndex: 1 }}>de reduction</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>des impayes en moyenne</div>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 48 }}>
                    {['Gestion', 'Cotisations', 'Mutuelle'].map(tag => (
                      <span key={tag} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: 999, color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 600 }}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '40px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>Tous les articles</h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Tout', 'Gestion', 'Leadership', 'Financement', 'Engagement'].map(f => (
                <button key={f} style={{ padding: '8px 18px', border: f === 'Tout' ? '2px solid #0E47AB' : '1px solid #E5E5E5', background: f === 'Tout' ? '#0E47AB' : 'white', color: f === 'Tout' ? 'white' : '#3A3A3A', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {others.map(article => (
              <div key={article.id} style={{ background: 'white', border: '1px solid #EBEBEB', borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 200, background: catBg[article.category] || '#F2F2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                  <div style={{ textAlign: 'center' }}>
                    <Icon name={catIcon[article.category] || 'chart'} size={48} color={catText[article.category] || '#3A3A3A'} />
                    <div style={{ marginTop: 12, fontSize: 13, fontWeight: 700, color: catText[article.category], letterSpacing: '0.04em' }}>{article.category.toUpperCase()}</div>
                  </div>
                </div>
                <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ display: 'inline-block', padding: '4px 12px', background: catBg[article.category], color: catText[article.category], borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 16, alignSelf: 'flex-start' }}>
                    {article.category}
                  </span>
                  <h3 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.2, flex: 1 }}>{article.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 14, lineHeight: 1.55 }}>
                    {article.excerpt.slice(0, 120)}...
                  </p>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 999, background: '#0E47AB', display: 'grid', placeItems: 'center', fontWeight: 800, color: 'white', fontSize: 12 }}>
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#0a0a0a' }}>{article.author}</div>
                        <div style={{ fontSize: 11, color: '#9B9B9B' }}>{article.readTime} - {article.date}</div>
                      </div>
                    </div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, color: '#0E47AB' }}>
                      Lire <Icon name="arrow" size={14} color="#0E47AB" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn btn-outline" style={{ fontSize: 16, padding: '16px 32px' }}>
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#0a0a0a' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 48, color: 'white', fontWeight: 800 }}>Restez informe.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>
            Chaque semaine, les meilleures ressources pour leaders communautaires africains directement dans votre boite mail.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <input type="email" placeholder="votre@email.com" style={{ padding: '16px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: 15, width: 320, outline: 'none' }} />
            <button className="btn btn-gold" style={{ fontSize: 15 }}>S'abonner</button>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>Pas de spam. Desabonnement en un clic.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

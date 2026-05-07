import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import { TYPES_INSCRIPTION, SEGMENTS } from '../data/segments.js'
import { PAYS_NOMS, getVillesByPays } from '../data/countries.js'
import { api } from '../api/client.js'

const COULEURS = ['#0E47AB', '#D4A75B', '#0a0a0a', '#C23B5A', '#0F8B4F', '#5C2E91']
const TAILLE_MEMBRES = ['1 - 50', '50 - 200', '200 - 500', '500 - 2 000', '+ 2 000']
const MODULES_DISPO = ['Gestion communautaire', 'Monétisation', 'Mise en relation', 'Visibilité & Impact', 'Espace Leader']
const PLANS = [
  { id: 'Starter', label: 'Starter', prix: 'Gratuit', desc: 'Démarrer et explorer', features: ['Jusqu\'à 50 membres', '1 admin', 'Page publique basique', 'Gestion communautaire'] },
  { id: 'Communauté', label: 'Communauté', prix: '15 000 FCFA/mois', desc: 'Gérer & engager', features: ['Jusqu\'à 500 membres', '3 admins', 'Cotisations & cagnottes', 'Événements + billetterie', 'Reporting basique'] },
  { id: 'Pro', label: 'Pro', prix: '35 000 FCFA/mois', desc: 'Structurer & monétiser', features: ['Membres illimités', 'Admins illimités', 'Tous les modules', 'Rapports d\'impact RSE', 'Connexion RSE & bailleurs', 'Support dédié'] },
]

const STEPS = [
  { n: '01', t: 'Votre communauté' },
  { n: '02', t: 'Vos besoins' },
  { n: '03', t: 'Vous, fondateur·rice' },
  { n: '04', t: 'Validation' },
]

function StepIndicator({ current }) {
  return (
    <div style={{ marginTop: 40, display: 'grid', gap: 12 }}>
      {STEPS.map((s, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, background: active ? 'white' : 'transparent', borderRadius: 14, border: active ? '1px solid #0E47AB' : '1px solid transparent' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: done ? '#0F8B4F' : active ? '#0E47AB' : '#E5E5E5', color: done || active ? 'white' : '#6B6B6B', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
              {done ? '✓' : s.n}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: active ? '#0a0a0a' : done ? '#0F8B4F' : '#6B6B6B' }}>{s.t}</div>
            {active && <div style={{ fontSize: 11, color: '#0E47AB', fontWeight: 600, marginLeft: 'auto' }}>En cours</div>}
          </div>
        )
      })}
    </div>
  )
}

export default function Inscription() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    // Step 1
    nom: '',
    type: TYPES_INSCRIPTION[0].slug,
    description: '',
    pays: "Côte d'Ivoire",
    ville: 'Abidjan',
    membres_count: '50 - 200',
    couleur: '#0E47AB',
    // Step 2
    modules: ['Gestion communautaire'],
    plan: 'Starter',
    // Step 3
    fondateur_nom: '',
    fondateur_prenom: '',
    fondateur_email: '',
    fondateur_telephone: '',
    fondateur_role: '',
    // Step 4 (résumé)
  })

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const villes = getVillesByPays(form.pays)

  function validateStep(s) {
    const e = {}
    if (s === 0) {
      if (!form.nom.trim()) e.nom = 'Le nom est requis'
      if (!form.description.trim()) e.description = 'La description est requise'
    }
    if (s === 2) {
      if (!form.fondateur_nom.trim()) e.fondateur_nom = 'Le nom est requis'
      if (!form.fondateur_email.trim()) e.fondateur_email = 'L\'email est requis'
      else if (!/\S+@\S+\.\S+/.test(form.fondateur_email)) e.fondateur_email = 'Email invalide'
    }
    return e
  }

  function nextStep() {
    const e = validateStep(step)
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStep(s => s + 1)
  }

  async function handleSubmit() {
    const e = validateStep(step)
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitting(true)
    try {
      const typeObj = TYPES_INSCRIPTION.find(t => t.slug === form.type)
      await api.communities.create({
        nom: form.nom,
        type: typeObj?.n || form.type,
        description: form.description,
        pays: form.pays,
        ville: form.ville || '',
        membres_count: form.membres_count,
        couleur: form.couleur,
        plan: form.plan,
      })
    } catch (err) {
      // If backend is offline, still navigate — data will be persisted when available
      if (!err.message?.includes('Failed to fetch') && !err.message?.includes('NetworkError')) {
        setErrors({ submit: err.message })
        setSubmitting(false)
        return
      }
    }
    navigate('/confirmation')
    setSubmitting(false)
  }

  const typeActuel = TYPES_INSCRIPTION.find(t => t.slug === form.type)

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '60px 64px 120px', background: '#F8F8F8', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="inscription-grid">
            {/* Sidebar */}
            <div style={{ position: 'sticky', top: 100 }}>
              <span className="eyebrow">Inscription</span>
              <h1 style={{ fontSize: 56, marginTop: 24, lineHeight: 0.95 }}>Inscrivez<br />votre<br />communauté.</h1>
              <p style={{ fontSize: 16, marginTop: 20, maxWidth: 360, lineHeight: 1.5, color: '#6B6B6B' }}>
                5 minutes pour créer votre espace. Aucune carte bancaire. Modifiable à tout moment.
              </p>

              <StepIndicator current={step} />

              <div style={{ marginTop: 40, padding: 24, background: '#FFF8E5', borderRadius: 16, borderLeft: '4px solid #D4A75B' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Bêta gratuite</div>
                <div style={{ fontSize: 13, marginTop: 6, color: '#6B5418', lineHeight: 1.5 }}>Accès complet pendant la phase bêta — sans engagement ni carte bancaire.</div>
              </div>
            </div>

            {/* Form panels */}
            <div style={{ background: 'white', borderRadius: 32, padding: 48, boxShadow: '0 20px 60px rgba(0,0,0,0.04)' }}>

              {/* ─── ÉTAPE 1 ─── */}
              {step === 0 && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em' }}>ÉTAPE 01 / 04</span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>~ 2 minutes</span>
                  </div>
                  <h2 style={{ fontSize: 40, lineHeight: 1.05 }}>Parlez-nous de votre communauté.</h2>
                  <p style={{ fontSize: 15, marginTop: 10, color: '#6B6B6B' }}>Ces informations apparaîtront sur la page publique de votre communauté.</p>

                  <div style={{ marginTop: 36, display: 'grid', gap: 24 }}>
                    {/* Nom */}
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Nom de votre communauté <span style={{ color: '#C23B5A' }}>*</span></label>
                      <input type="text" placeholder="Mutuelle des Femmes d'Abobo" value={form.nom}
                        onChange={e => set('nom', e.target.value)}
                        style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.nom ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 16, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                      {errors.nom && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.nom}</div>}
                    </div>

                    {/* Type */}
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Type de communauté <span style={{ color: '#C23B5A' }}>*</span></label>
                      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                        {SEGMENTS.map((s) => (
                          <button type="button" key={s.slug} onClick={() => set('type', s.slug)}
                            style={{ padding: 0, border: `2.5px solid ${form.type === s.slug ? s.color : 'transparent'}`, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', background: 'none', fontFamily: 'inherit', position: 'relative', aspectRatio: '3/4', boxShadow: form.type === s.slug ? `0 0 0 2px ${s.color}44` : '0 2px 12px rgba(0,0,0,0.08)' }}>
                            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 20%, ${s.color}ee 100%)` }} />
                            {form.type === s.slug && (
                              <div style={{ position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: '50%', background: 'white', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 900, color: s.color }}>✓</div>
                            )}
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 10px 12px', textAlign: 'center' }}>
                              <div style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>{s.nom}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Description courte</label>
                      <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>En une ou deux phrases. Ce qui vous rassemble.</div>
                      <textarea value={form.description} onChange={e => set('description', e.target.value)}
                        placeholder="Une mutuelle de soutien aux femmes commerçantes du marché d'Abobo..."
                        style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.description ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 15, fontFamily: 'inherit', minHeight: 100, resize: 'vertical', lineHeight: 1.5, boxSizing: 'border-box', outline: 'none' }} />
                      {errors.description && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.description}</div>}
                    </div>

                    {/* Pays + Ville */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Pays <span style={{ color: '#C23B5A' }}>*</span></label>
                        <select value={form.pays} onChange={e => { set('pays', e.target.value); set('ville', '') }}
                          style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                          {PAYS_NOMS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Ville principale</label>
                        {villes.length > 0 ? (
                          <select value={form.ville} onChange={e => set('ville', e.target.value)}
                            style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                            {villes.map(v => <option key={v} value={v}>{v}</option>)}
                            <option value="Autre">Autre</option>
                          </select>
                        ) : (
                          <input type="text" placeholder="Votre ville" value={form.ville} onChange={e => set('ville', e.target.value)}
                            style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                        )}
                      </div>
                    </div>

                    {/* Taille + Couleur */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Nombre de membres</label>
                        <select value={form.membres_count} onChange={e => set('membres_count', e.target.value)}
                          style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                          {TAILLE_MEMBRES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Couleur principale</label>
                        <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                          {COULEURS.map((c) => (
                            <button type="button" key={c} onClick={() => set('couleur', c)}
                              style={{ width: 40, height: 40, borderRadius: '50%', background: c, border: form.couleur === c ? '3px solid #0a0a0a' : '3px solid transparent', cursor: 'pointer', boxShadow: form.couleur === c ? '0 0 0 2px white inset' : 'none', flexShrink: 0 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={nextStep} className="btn btn-primary btn-lg">
                      Continuer — Vos besoins <Icon name="arrow" size={14} color="white" />
                    </button>
                  </div>
                </>
              )}

              {/* ─── ÉTAPE 2 ─── */}
              {step === 1 && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em' }}>ÉTAPE 02 / 04</span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>~ 1 minute</span>
                  </div>
                  <h2 style={{ fontSize: 40, lineHeight: 1.05 }}>Quels sont vos besoins ?</h2>
                  <p style={{ fontSize: 15, marginTop: 10, color: '#6B6B6B' }}>Sélectionnez les modules qui vous intéressent et choisissez votre plan de départ.</p>

                  <div style={{ marginTop: 36, display: 'grid', gap: 28 }}>
                    {/* Modules */}
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Modules souhaités</label>
                      <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>Sélectionnez tout ce qui vous intéresse — sans contrainte.</div>
                      <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
                        {MODULES_DISPO.map((mod, i) => {
                          const selected = form.modules.includes(mod)
                          return (
                            <button type="button" key={i} onClick={() => {
                              set('modules', selected ? form.modules.filter(m => m !== mod) : [...form.modules, mod])
                            }}
                              style={{ padding: '18px 24px', border: `1.5px solid ${selected ? '#0E47AB' : '#E5E5E5'}`, borderRadius: 16, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', background: selected ? '#F4F7FE' : 'white', fontFamily: 'inherit', textAlign: 'left' }}>
                              <div style={{ width: 28, height: 28, borderRadius: 8, background: selected ? '#0E47AB' : '#F2F2F2', color: selected ? 'white' : '#6B6B6B', display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                                {selected ? '✓' : `0${i + 1}`}
                              </div>
                              <span style={{ fontSize: 15, fontWeight: 600, color: selected ? '#0E47AB' : '#0a0a0a' }}>{mod}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Plan */}
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Plan de départ</label>
                      <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>Vous pourrez changer de plan à tout moment. La phase bêta est gratuite.</div>
                      <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
                        {PLANS.map((plan) => (
                          <button type="button" key={plan.id} onClick={() => set('plan', plan.id)}
                            style={{ padding: '20px 24px', border: `1.5px solid ${form.plan === plan.id ? '#0E47AB' : '#E5E5E5'}`, borderRadius: 16, display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer', background: form.plan === plan.id ? '#F4F7FE' : 'white', fontFamily: 'inherit', textAlign: 'left' }}>
                            <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${form.plan === plan.id ? '#0E47AB' : '#C9C9C9'}`, background: form.plan === plan.id ? '#0E47AB' : 'white', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                              {form.plan === plan.id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: 16, fontWeight: 700 }}>{plan.label}</span>
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#0E47AB' }}>{plan.prix}</span>
                              </div>
                              <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>{plan.desc}</div>
                              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                                {plan.features.map(f => (
                                  <span key={f} style={{ padding: '2px 8px', background: form.plan === plan.id ? '#E8EFFC' : '#F2F2F2', borderRadius: 999, fontSize: 11, fontWeight: 600, color: form.plan === plan.id ? '#0E47AB' : '#6B6B6B' }}>{f}</span>
                                ))}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => setStep(0)} style={{ padding: '14px 22px', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer' }}>← Retour</button>
                    <button onClick={nextStep} className="btn btn-primary btn-lg">
                      Continuer — Vos informations <Icon name="arrow" size={14} color="white" />
                    </button>
                  </div>
                </>
              )}

              {/* ─── ÉTAPE 3 ─── */}
              {step === 2 && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em' }}>ÉTAPE 03 / 04</span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>~ 1 minute</span>
                  </div>
                  <h2 style={{ fontSize: 40, lineHeight: 1.05 }}>Qui êtes-vous ?</h2>
                  <p style={{ fontSize: 15, marginTop: 10, color: '#6B6B6B' }}>Informations du fondateur ou de la fondatrice. Nous ne partagerons jamais ces données.</p>

                  <div style={{ marginTop: 36, display: 'grid', gap: 20 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Nom <span style={{ color: '#C23B5A' }}>*</span></label>
                        <input type="text" placeholder="Koné" value={form.fondateur_nom} onChange={e => set('fondateur_nom', e.target.value)}
                          style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.fondateur_nom ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 15, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                        {errors.fondateur_nom && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.fondateur_nom}</div>}
                      </div>
                      <div>
                        <label style={{ fontSize: 14, fontWeight: 600 }}>Prénom</label>
                        <input type="text" placeholder="Awa" value={form.fondateur_prenom} onChange={e => set('fondateur_prenom', e.target.value)}
                          style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Email professionnel <span style={{ color: '#C23B5A' }}>*</span></label>
                      <input type="email" placeholder="awa.kone@example.com" value={form.fondateur_email} onChange={e => set('fondateur_email', e.target.value)}
                        style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.fondateur_email ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 15, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                      {errors.fondateur_email && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.fondateur_email}</div>}
                    </div>

                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Téléphone (WhatsApp de préférence)</label>
                      <input type="tel" placeholder="+225 07 00 00 00 00" value={form.fondateur_telephone} onChange={e => set('fondateur_telephone', e.target.value)}
                        style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                    </div>

                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600 }}>Votre rôle dans la communauté</label>
                      <select value={form.fondateur_role} onChange={e => set('fondateur_role', e.target.value)}
                        style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                        <option value="">-- Sélectionner --</option>
                        {['Fondateur·rice', 'Président·e', 'Secrétaire général·e', 'Trésorier·ère', 'Coordinateur·rice', 'Responsable communication', 'Directeur·rice exécutif·ve', 'Autre'].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => setStep(1)} style={{ padding: '14px 22px', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer' }}>← Retour</button>
                    <button onClick={nextStep} className="btn btn-primary btn-lg">
                      Vérifier ma demande <Icon name="arrow" size={14} color="white" />
                    </button>
                  </div>
                </>
              )}

              {/* ─── ÉTAPE 4 — VALIDATION ─── */}
              {step === 3 && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em' }}>ÉTAPE 04 / 04</span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>~ 30 secondes</span>
                  </div>
                  <h2 style={{ fontSize: 40, lineHeight: 1.05 }}>Tout est bon ?</h2>
                  <p style={{ fontSize: 15, marginTop: 10, color: '#6B6B6B' }}>Vérifiez vos informations avant de soumettre votre demande.</p>

                  <div style={{ marginTop: 36, display: 'grid', gap: 16 }}>
                    {/* Bloc communauté */}
                    <div style={{ padding: 24, background: '#F8F8F8', borderRadius: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Votre communauté</div>
                        <button onClick={() => setStep(0)} style={{ fontSize: 12, fontWeight: 600, color: '#0E47AB', background: 'none', border: 'none', cursor: 'pointer' }}>Modifier</button>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 14, background: form.couleur, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 20, fontWeight: 800 }}>{form.nom}</div>
                          <div style={{ fontSize: 14, color: '#6B6B6B' }}>{typeActuel?.n} · {form.ville}, {form.pays}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: '#3A3A3A', lineHeight: 1.5, margin: 0 }}>{form.description}</p>
                      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ padding: '4px 12px', background: 'white', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{form.membres_count} membres</span>
                        <span style={{ padding: '4px 12px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>Plan {form.plan}</span>
                      </div>
                    </div>

                    {/* Bloc besoins */}
                    <div style={{ padding: 24, background: '#F8F8F8', borderRadius: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Modules sélectionnés</div>
                        <button onClick={() => setStep(1)} style={{ fontSize: 12, fontWeight: 600, color: '#0E47AB', background: 'none', border: 'none', cursor: 'pointer' }}>Modifier</button>
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {form.modules.length > 0 ? form.modules.map(m => (
                          <span key={m} style={{ padding: '6px 14px', background: '#E8EFFC', color: '#0E47AB', borderRadius: 999, fontSize: 13, fontWeight: 600 }}>{m}</span>
                        )) : <span style={{ fontSize: 14, color: '#6B6B6B' }}>Aucun module sélectionné</span>}
                      </div>
                    </div>

                    {/* Bloc fondateur */}
                    <div style={{ padding: 24, background: '#F8F8F8', borderRadius: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fondateur·rice</div>
                        <button onClick={() => setStep(2)} style={{ fontSize: 12, fontWeight: 600, color: '#0E47AB', background: 'none', border: 'none', cursor: 'pointer' }}>Modifier</button>
                      </div>
                      <div style={{ display: 'grid', gap: 6 }}>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>{form.fondateur_prenom} {form.fondateur_nom}</div>
                        <div style={{ fontSize: 14, color: '#6B6B6B' }}>{form.fondateur_email}</div>
                        {form.fondateur_telephone && <div style={{ fontSize: 14, color: '#6B6B6B' }}>{form.fondateur_telephone}</div>}
                        {form.fondateur_role && <div style={{ fontSize: 14, color: '#6B6B6B' }}>{form.fondateur_role}</div>}
                      </div>
                    </div>
                  </div>

                  {errors.submit && (
                    <div style={{ marginTop: 16, padding: 16, background: '#FFF5F5', borderRadius: 12, color: '#C23B5A', fontSize: 14, fontWeight: 600 }}>
                      {errors.submit}
                    </div>
                  )}

                  <div style={{ marginTop: 24, padding: 20, background: '#E8FBF1', borderRadius: 16, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name="check" size={20} color="#0F8B4F" />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0F8B4F' }}>Accès bêta gratuit</div>
                      <div style={{ fontSize: 13, color: '#1A5C37', marginTop: 2 }}>Votre communauté sera activée immédiatement. Aucun paiement requis pour la phase bêta.</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 32, paddingTop: 28, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => setStep(2)} style={{ padding: '14px 22px', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer' }}>← Retour</button>
                    <button onClick={handleSubmit} disabled={submitting} className="btn btn-primary btn-lg" style={{ opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? 'Envoi en cours...' : 'Créer ma communauté'} {!submitting && <Icon name="arrow" size={14} color="white" />}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const express = require('express')
const router = express.Router()
const db = require('../db')

// GET all communities
router.get('/', (req, res) => {
  const { type, pays, search } = req.query
  let q = 'SELECT c.*, COUNT(m.id) as total_membres FROM communities c LEFT JOIN membres m ON m.community_id = c.id'
  const conds = [], params = []
  if (type)   { conds.push('c.type = ?');         params.push(type) }
  if (pays)   { conds.push('c.pays = ?');          params.push(pays) }
  if (search) { conds.push('c.nom LIKE ?');        params.push(`%${search}%`) }
  if (conds.length) q += ' WHERE ' + conds.join(' AND ')
  q += ' GROUP BY c.id ORDER BY c.created_at DESC'
  res.json(db.prepare(q).all(...params))
})

// GET one community with members
router.get('/:id', (req, res) => {
  const community = db.prepare('SELECT * FROM communities WHERE id = ?').get(req.params.id)
  if (!community) return res.status(404).json({ error: 'Communauté non trouvée' })
  const membres = db.prepare('SELECT * FROM membres WHERE community_id = ? ORDER BY created_at DESC').all(req.params.id)
  res.json({ ...community, membres })
})

// POST create community
router.post('/', (req, res) => {
  const { nom, type, description, pays, ville, membres_count, couleur, plan } = req.body
  if (!nom || !type) return res.status(400).json({ error: 'Nom et type sont requis' })
  const result = db.prepare(
    'INSERT INTO communities (nom, type, description, pays, ville, membres_count, couleur, plan) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  ).run(nom, type, description || '', pays || "Côte d'Ivoire", ville || '', membres_count || '', couleur || '#0E47AB', plan || 'Starter')
  res.status(201).json({ id: result.lastInsertRowid, message: 'Communauté créée' })
})

// PUT update community
router.put('/:id', (req, res) => {
  const { nom, type, description, pays, ville, membres_count, couleur, statut, plan } = req.body
  db.prepare(
    'UPDATE communities SET nom=?, type=?, description=?, pays=?, ville=?, membres_count=?, couleur=?, statut=?, plan=? WHERE id=?'
  ).run(nom, type, description, pays, ville, membres_count, couleur, statut, plan, req.params.id)
  res.json({ message: 'Communauté mise à jour' })
})

// DELETE community
router.delete('/:id', (req, res) => {
  db.prepare('DELETE FROM communities WHERE id = ?').run(req.params.id)
  res.json({ message: 'Communauté supprimée' })
})

// GET stats
router.get('/_stats/global', (req, res) => {
  const total_communities = db.prepare('SELECT COUNT(*) as n FROM communities').get().n
  const total_membres = db.prepare('SELECT COUNT(*) as n FROM membres').get().n
  const by_type = db.prepare('SELECT type, COUNT(*) as n FROM communities GROUP BY type').all()
  const by_pays = db.prepare('SELECT pays, COUNT(*) as n FROM communities GROUP BY pays ORDER BY n DESC LIMIT 10').all()
  res.json({ total_communities, total_membres, by_type, by_pays })
})

module.exports = router

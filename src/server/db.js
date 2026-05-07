const Database = require('better-sqlite3')
const path = require('path')

const db = new Database(path.join(__dirname, '../../society.db'))

db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS communities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    pays TEXT DEFAULT 'Côte d\'Ivoire',
    ville TEXT,
    membres_count TEXT,
    couleur TEXT DEFAULT '#0E47AB',
    statut TEXT DEFAULT 'actif',
    plan TEXT DEFAULT 'Starter',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS membres (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT,
    email TEXT,
    telephone TEXT,
    pays TEXT,
    ville TEXT,
    role TEXT DEFAULT 'Membre',
    statut TEXT DEFAULT 'actif',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE
  );
`)

module.exports = db

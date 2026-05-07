import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Fonctionnalites from './pages/Fonctionnalites.jsx'
import PourQui from './pages/PourQui.jsx'
import Tarifs from './pages/Tarifs.jsx'
import APropos from './pages/APropos.jsx'
import Inscription from './pages/Inscription.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Segment from './pages/Segment.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/pour-qui" element={<PourQui />} />
        <Route path="/pour-qui/:slug" element={<Segment />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

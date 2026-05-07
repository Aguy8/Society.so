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
import Blog from './pages/Blog.jsx'
import Presse from './pages/Presse.jsx'
import Documentation from './pages/Documentation.jsx'
import Securite from './pages/Securite.jsx'
import Carrieres from './pages/Carrieres.jsx'
import Contact from './pages/Contact.jsx'
import CentreAide from './pages/CentreAide.jsx'
import EtudesDeCas from './pages/EtudesDeCas.jsx'
import Statut from './pages/Statut.jsx'
import MobileApp from './pages/MobileApp.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import Confidentialite from './pages/Confidentialite.jsx'
import CGU from './pages/CGU.jsx'
import Benevolat from './pages/Benevolat.jsx'
import MiseEnRelation from './pages/MiseEnRelation.jsx'
import Comparatif from './pages/Comparatif.jsx'
import Integrations from './pages/Integrations.jsx'
import Manifeste from './pages/Manifeste.jsx'
import Ambassadeurs from './pages/Ambassadeurs.jsx'
import Temoignages from './pages/Temoignages.jsx'
import Demarrer from './pages/Demarrer.jsx'
import RSE from './pages/RSE.jsx'
import Newsletter from './pages/Newsletter.jsx'
import Webinaires from './pages/Webinaires.jsx'
import Changelog from './pages/Changelog.jsx'
import FeatureMembres from './pages/features/Membres.jsx'
import FeatureFinances from './pages/features/Finances.jsx'
import FeatureEvenements from './pages/features/Evenements.jsx'
import FeatureCommunication from './pages/features/Communication.jsx'
import FeatureImpact from './pages/features/Impact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/fonctionnalites/membres" element={<FeatureMembres />} />
        <Route path="/fonctionnalites/finances" element={<FeatureFinances />} />
        <Route path="/fonctionnalites/evenements" element={<FeatureEvenements />} />
        <Route path="/fonctionnalites/communication" element={<FeatureCommunication />} />
        <Route path="/fonctionnalites/impact" element={<FeatureImpact />} />
        <Route path="/pour-qui" element={<PourQui />} />
        <Route path="/pour-qui/:slug" element={<Segment />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/securite" element={<Securite />} />
        <Route path="/carrieres" element={<Carrieres />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/centre-aide" element={<CentreAide />} />
        <Route path="/etudes-de-cas" element={<EtudesDeCas />} />
        <Route path="/statut" element={<Statut />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/benevolat" element={<Benevolat />} />
        <Route path="/mise-en-relation" element={<MiseEnRelation />} />
        <Route path="/comparatif" element={<Comparatif />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/manifeste" element={<Manifeste />} />
        <Route path="/ambassadeurs" element={<Ambassadeurs />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/demarrer" element={<Demarrer />} />
        <Route path="/rse" element={<RSE />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/webinaires" element={<Webinaires />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

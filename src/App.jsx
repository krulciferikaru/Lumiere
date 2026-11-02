import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import CallingCard from './components/CallingCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { PageTransitionProvider } from './components/PageTransition'
import { navLinks } from './data/nav'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const { pathname, hash } = useLocation()

  // New page starts at the top, unless it's heading to a section
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <PageTransitionProvider>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CallingCard />
    </PageTransitionProvider>
  )
}

export default App

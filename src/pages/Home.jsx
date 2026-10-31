import { useEffect } from 'react'
import { useLocation } from 'react-router'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Works from '../components/Works'

function Home() {
  const { hash } = useLocation()

  // Coming back from a case study with /#section: jump to that section
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <main>
      <Hero />
      <Works />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home

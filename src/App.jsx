import Nav from './components/Nav'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Timeline from './components/Timeline'
import CaseStudies from './components/CaseStudies'
import AdditionalProjects from './components/AdditionalProjects'
import Approach from './components/Approach'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Timeline />
        <CaseStudies />
        <AdditionalProjects />
        <Approach />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

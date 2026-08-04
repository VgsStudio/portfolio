import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Talks from './components/Talks'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Certifications />
        <About />
        <Experience />
        <Projects />
        <Talks />
        <Contact />
      </main>
    </>
  )
}

export default App

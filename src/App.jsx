import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Journey from "./components/Journey/Journey"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

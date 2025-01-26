import Navbar from './Components/Navbar'
import './App.css'
import Intro from './Components/Intro'
import About from './Components/About'
import ProjectSec from './Components/ProjectSec'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
 

  return (
   
     <div className='App'>
        < Navbar />
        < Intro />
        < About />
        <ProjectSec />
        <Skills />
        <Contact />
        <Footer />

     </div>
   
  )
}

export default App

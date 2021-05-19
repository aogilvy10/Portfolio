import './App.css';
import LandingPage from './components/LandingPage'
import About from './components/About'
import './index'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {




  return (
    <div className='page'>
      <LandingPage/>
      <About/>
      <Projects/>
      <Experience/>
      <Interests/>
      <Contact/>
    </div>
  )
}

export default App;

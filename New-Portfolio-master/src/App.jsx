import Banner from './components/Banner/Banner';
import Exp from './components/Experience/Exp';
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project';
import Skill from './components/Skills/Skill';
import Contact from './components/Contact/Contact'
import Coding from './components/Coding/Coding';

function App() {
  return <>
  <Navbar />
  <Banner/>
  <Skill />
  <Project />
  <Coding />
  <Exp />
  <Contact />
  </>
}

export default App;

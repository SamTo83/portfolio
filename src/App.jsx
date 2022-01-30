import './App.scss';
import Description from './components/Description/Description';
import Greeting from './components/Greeting/Greeting';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import agileDevelopment from '../src/assets/images/skills-image/agile-development.PNG';
import cleanCoding from '../src/assets/images/skills-image/clean-coding.PNG';
import debugging from '../src/assets/images/skills-image/debugging.PNG';
import responsiveDesign from '../src/assets/images/skills-image/responsive-design.PNG';
import version from '../src/assets/images/skills-image/version.PNG';
import webDesign from '../src/assets/images/skills-image/web-design.PNG';
import Experience from './components/Experience/Experience';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Contact from './components/Contact/Contact';

function App(pps) {

  const galleryImages = [
    agileDevelopment,
    cleanCoding,
    debugging,
    responsiveDesign,
    version,
    webDesign,
  ];

  return (
    <div className="App">
      <Navbar  />
      <Greeting/>
      <Description/>
      <Projects/>
      <Experience imagesArr={galleryImages}/>
      <WorkHistory/>
      <Contact />
    </div>
  );
}

export default App;

